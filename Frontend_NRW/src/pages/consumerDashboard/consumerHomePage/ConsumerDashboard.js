import VideoSection from "./VideoSection";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";
import ProjectOverview from "../../home/ProjectOverview";
import HomePage3 from "../../home/Features";
import WorkingProcess from "../aboutus/WorkingProcess";
import Gallery from "../../home/Gallery";
import Chatbot from "./Chatbot";
import whatsapp from '../Assets/whatsapp.png';
// import New from "./New";
import ChatPage from "./ChatPage";
import "../css/ConsumerDashboard.css"

function ConsumerDashboard() {
  return (
    <div className="home">
      <Navbar1/>
      <VideoSection/>
      <ProjectOverview/>
      <HomePage3/>
      <WorkingProcess/>
      <Gallery/>
      <Chatbot/>
      <a
      href="https://wa.me/918081048515?text=Hi%20myself%20!"
      className="float"
    >
      <img src={whatsapp} alt="" height="60px" width="60px" />
    </a>
      {/* <ChatPage/> */}
      <Footer/>
    </div>
  );
}

export default ConsumerDashboard;