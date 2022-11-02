import FormInput from "../../components/Form/form"
import {useState} from 'react';
import "./login.style.scss"
import {AiOutlineUser} from 'react-icons/ai'
import {CiLock} from "react-icons/ci"
import Button from "../../components/Button/button.component";
import bg from "../../assets/svg1.svg";
import bg1 from "../../assets/svg2.svg";
const defaultFormFields={
    username:'',
    password:''
}

const LoginForm= ()=>{

    const [loginFormFields,setFormFields]=useState(defaultFormFields);
    const {username,password}=loginFormFields



    const onChangeHandler=(event)=>{
        console.log("fired")
        const {name,value}=event.target
        setFormFields({...loginFormFields,[name]:value})

    }

    return (
        <div className="login-container">
            <div className="login-header">
        <span className="mmcy">MMCY|</span><span className="tech">Tech </span><span className="mmcy">   Recruitment</span>
        </div>
        <div className="input-container">
        <form>
          
        <FormInput label="Username" value={username} name='username' onChange={onChangeHandler} icon={<AiOutlineUser/>} required/>
        <FormInput label="Password" type='password' name='password' value={password} onChange={onChangeHandler} icon={<CiLock/>} required/>    
        <p>Forget Password?</p>
        <Button type='submit' className="btn-mg">Login</Button>
        </form>
       
        </div>
        <img src={bg1} alt="test" className="bg-svg"/>
        <img src={bg} alt="test" className="bg-svg"/> 
        </div>
    )

}
export default LoginForm