import './App.css';
import LoginForm from './routes/auth/login.route';
import Navigation from './routes/navigation/navigation.route';
import {Routes,Route} from "react-router"

import Jobs from './routes/job/job.route';
import CreateJob from './routes/create-job/create-job.route';
import EditJob from './routes/edit-job/edit-job.route';
import JobDetail from './routes/job-detail/job-detail.route'

import Application from "./routes/application/application.routes"

const user=true;

const App=()=> {
  return (
    <Routes>
      {user ? <Route path="/" element={<Navigation/>}>
      <Route index  element={<Jobs/>}/>
      <Route path="CreateJob" element={<CreateJob/>}/>
      <Route path="EditJob/:title" element={<EditJob/>}/>
      <Route path=":title" element={<JobDetail/>}/>
      <Route path='/application' element={<Application/>}/>
      </Route> 
      :<Route path='/' element={<LoginForm/>}/>
}
    
    </Routes>
  );
}

export default App;
