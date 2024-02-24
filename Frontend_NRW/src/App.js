import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ChangePassword1 from "./pages/ChangePassword";
import MainHome from "./pages/MainHome";
import Layout from "./pages/Layout";
import ConsumerDashboard from "./pages/consumerDashboard/consumerHomePage/ConsumerDashboard";
import JalNigamDashboard from "./pages/jalnigamDashboard/JalNigamDashboard";
import { useSelector } from "react-redux";
import AboutUs from "./pages/consumerDashboard/aboutus/AboutUs";
import Sessions from "./pages/consumerDashboard/onlineSessions/OnlineSessions";
import Blogs from "./pages/consumerDashboard/blogs/Blogs";
import Blog1 from "./pages/consumerDashboard/blogs/Blog1";
import Blog2 from "./pages/consumerDashboard/blogs/Blog2";
import Blog3 from "./pages/consumerDashboard/blogs/Blog3";
import Blog4 from "./pages/consumerDashboard/blogs/Blog4";
import Blog5 from "./pages/consumerDashboard/blogs/Blog5";
import Complaint from "./pages/consumerDashboard/support/Complaint";
import FeedbackForm from "./pages/consumerDashboard/support/FeedbackForm";
import FAQ from "./pages/consumerDashboard/support/FAQ";
import BillingSystem from "./pages/jalnigamDashboard/BillingSystem";
import MeterTable from "./pages/jalnigamDashboard/Notification";
import Crud from "./pages/consumerDashboard/Payment";
import ConsumerDetails from "./pages/govtDashboard/ConsumerDetails";
import ConsumerBilling from "./pages/govtDashboard/ConsumerBilling";
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainHome />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} /> */}
            <Route path="login" element={<LoginReg />} />
            
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/consumer" element={<ConsumerDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/notification" element={<MeterTable/>}/>
          <Route path="/changepassword" element={<ChangePassword1/>}/>
          <Route path="/sessions" element={<Sessions />}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blog1" element={<Blog1/>}/>
          <Route path="/blog2" element={<Blog2/>}/>
          <Route path="/blog3" element={<Blog3/>}/>
          <Route path="/blog4" element={<Blog4/>}/>
          <Route path="/blog5" element={<Blog5/>}/>
          <Route path="/faqs" element={<FAQ/>} />
					<Route path="/complaint" element={<Complaint/>} />
					<Route path="/feedback" element={<FeedbackForm/>} />
          <Route path="/bill" element={<Crud/>} />
					<Route path="/jalnigamdashboard" element={<JalNigamDashboard/>} />
					<Route path="/billing" element={<BillingSystem/>} />
          <Route exact path="/govtDashboard" element={<ConsumerDetails/>} />
            <Route exact path="/consumerBilling" element={<ConsumerBilling/>} />
          {/* <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} /> */}
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
