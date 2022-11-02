import { useState, useRef, useEffect } from "react";
import InputFields from "../../components/input-field/input-field.component";
import TextInput from "../../components/text-input/text-input.component";
import CreateIcon from "../../components/create-icon/create-icon.component";
import Button from "../../components/Button/button.component";
import "./create-job.style.scss";
import { FaRegTimesCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import SelectInput from "../../components/select-input/select.component";
import DeleteIcon from "../../components/delete-icon/delete-icon.component";

const DEFAULT_STEP = { text: "", type: "" };
let DEFAULT_BASIC = { inputTitle: "", final_message: "", current_status: "" };
const DEFAULT_INPUT = {
  title: "",
  steps: [DEFAULT_STEP, ''],
};

const CreateJob = () => {
  let input = useLocation();
  let { steps, title, status } = input.state || DEFAULT_INPUT;

  const finalMessage = steps[steps.length - 1];
  DEFAULT_BASIC = {
    ...DEFAULT_BASIC,
    inputTitle: title,
    final_message: finalMessage,
  };
  const [basicInput, setBasicInput] = useState(DEFAULT_BASIC);
  const [currentStatus, setCurrentStatus] = useState(status);
  const [inputSteps, setInputSteps] = useState(steps);
  const [draggable, setDraggable] = useState(false);
  const { inputTitle, final_message } = basicInput;
  let draggedItem = useRef();
  let draggedNode = useRef();
  
  //input handlers
  const textInputHandler = (event, i) => {
    inputSteps[i] = { ...inputSteps[i], text: event.target.value };

    setInputSteps([...inputSteps]);
  };
  const selectInputHandler = (event, i) => {
    inputSteps[i] = { ...inputSteps[i], type: event.target.value };

    setInputSteps([...inputSteps]);
  };
  const basicInputHandler = (event) => {
    const { name, value } = event.target;
    setBasicInput({ ...basicInput, [name]: value });
  };
  
  const statusHandler = (event) => {
    setCurrentStatus(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    inputSteps[inputSteps.length-1]={
        text:final_message.text||final_message,
        type:"finished"
    }
    const formData = {
      title: inputTitle,
      steps: [...inputSteps],
      status: currentStatus||"disapproved",
    };
    console.log(formData);
  };
  //
  //add and remove Steps Handler
  const addStep = () => {
    inputSteps.splice(inputSteps.length -1, 0, DEFAULT_STEP);
    setInputSteps([...inputSteps]);
  };
  const removeStepHandler = (event, i) => {
    setInputSteps(
      inputSteps.filter((step, index) => {
        if (index !== i) {
          return step;
        }
      })
    );
  };
  //
  //drag handlers
  const handleDragStart = (e, i) => {
    setTimeout(() => {
      setDraggable(true);
      draggedItem.current = i;
      draggedNode.current = e.target;
      draggedNode.current.addEventListener("dragend", handleDragEnd);
    }, 0);
  };

  const handleDragEnter = (e, i) => {
    let item = draggedItem.current;
    let temp;
    temp = inputSteps[i];
    inputSteps[i] = inputSteps[item];
    inputSteps[item] = temp;
    draggedItem.current = i;
    setInputSteps([...inputSteps]);
  };
  const handleDragEnd = () => {
    draggedItem.current = null;
    draggedNode.current = null;
    setDraggable(false);
  };
  const dragStyle = (i) => {
    if (i === draggedItem.current) {
      return "dragged";
    }
    return "step";
  };

  return (
    <div className="create-job-scrollbar">
      <div className="create-job-container">
        <h1>{title ? "Edit Job/" + title : "Create Job"}</h1>
        {title && (
          <div className="edit-delete-icon-container">
            <DeleteIcon />
          </div>
        )}
        <form onSubmit={submitHandler}>
          <div className="create-job-title">
            <div className="h3">Job Title</div>
            <TextInput
              name="inputTitle"
              value={inputTitle}
              onChange={basicInputHandler}
            />
          </div>
          <div className="create-job-steps">
            <div className="h3">Steps</div>
            <div className="steps">
              {inputSteps.map((step, i) => {
                
                if (i !== inputSteps.length - 1) {
                  return (
                    <div
                      className={draggable ? dragStyle(i) : "step"}
                      draggable={true}
                      onDragStart={(event) => handleDragStart(event, i)}
                      onDragEnter={(event) => handleDragEnter(event, i)}
                      key={i}
                    >
                      <InputFields
                        textInputHandler={textInputHandler}
                        selectInputHandler={selectInputHandler}
                        step={step}
                        label={i}
                      />
                      <div className="remove-icon">
                        {i !== 0 && (
                          <FaRegTimesCircle
                            className="minus-icon"
                            onClick={(event) => removeStepHandler(event, i)}
                          />
                        )}
                      </div>
                    </div>
                  );
                }
              })}

              <div className="createIcon" onClick={addStep}>
                <CreateIcon buttonType="outline" />
              </div>
              <div className="final-message">
                <TextInput
                  placeholder="Final Message"
                  name="final_message"
                  onChange={basicInputHandler}
                  value={title ? final_message.text: final_message}
                />
              </div>
              <div className="edit-status">
                {status && (
                  <div className="edit-status-container">
                    <div className="edit-status-text">Status: </div>
                    <SelectInput
                      selected_type="status_types"
                      selected={currentStatus}
                      selectInputHandler={statusHandler}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="submit-button">
              <Button type="submit" buttonType="job">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateJob;
