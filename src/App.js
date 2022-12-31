import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Auth from "./Components/auth/Auth";
import EmailRecovery from "./Components/auth/EmailRecovery";
import Layout from "./Layout/Layout";
import CompletedPage from "./Pages/CompletedPage";
import CreateTask from "./Pages/CreateTask";
import DashboardPage from "./Pages/DashboardPage";
import Inprogress from "./Pages/Inprogress";
import Monthly from "./Pages/Monthly";
import OTPConfirm from "./Pages/OTPConfirm";
import PasswordChange from "./Pages/PasswordChange";
import ProfilePage from "./Pages/ProfilePage";
import SettingPage from "./Pages/SettingPage";
import Today, { default as NewTask } from "./Pages/Today";
import PrivateRoute from "./router/PrivateRoute";
import RedirectRoute from "./router/RedirectRoute";

function App() {

  
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<RedirectRoute></RedirectRoute>}>
          <Route path="/" element={<Auth></Auth>} />
          <Route path="/passwordRecovery" element={<EmailRecovery></EmailRecovery>} />
          <Route path="/otpCheck" element={<OTPConfirm></OTPConfirm>} />
          <Route path="/createPassword" element={<PasswordChange></PasswordChange>} />
          </Route>
        
       <Route element={<PrivateRoute/>}>
       <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
         <Route path="/createTask" element={<Layout><CreateTask /></Layout>} />
         <Route path="/newTask" element={<Layout><NewTask /></Layout>} />
         <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
         <Route path="/inprogress" element={<Layout><Inprogress /></Layout>} />
         <Route path="/completed" element={<Layout><CompletedPage /></Layout>} />
         <Route path="/monthly" element={<Layout><Monthly /></Layout>} />
         <Route path="/today" element={<Layout><Today /></Layout>} />
         <Route path="*" element={<Layout><SettingPage /></Layout>} />
       </Route>
         
    

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
