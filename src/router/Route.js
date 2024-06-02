import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import HeroPage from "../views/Hero";
import ResponsiveAppBar from "../component/CustomeAppBar";
import AboutUS from "../views/About";
import Contact from "../views/Contact";
import DashBoard from "../views/DashBoard";
import AIProblem from "../views/AIProblem";
import Blog from "../views/Blog";
import Explore from "../views/Explore";
import Help from "../views/Help";
import LeaderBoard from "../views/LeaderBoard";
import LearningParth from "../views/LearningParth";
import MyCource from "../views/MyCource";
import PracticeProblems from "../views/PracticeProblems";
import Settings from "../views/Settings";
import Tutoring from "../views/Tutoring";
import MainPage from "../views/MainPage";
import Sign from "../views/SignIn";
import Register from "../views/Register";
import MainSelectOne from "../views/MainSelectOne";
import SelectTutors from "../views/SelectTutors";
import SelfStudy from "../views/SelfStudy";
import SelfStudySelection from "../views/SelfStudySelection";





export const CreateRouter = () => {
    return(
<BrowserRouter>
    <Routes>
        
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/ai" element={<AIProblem/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/leaderboard" element={<LeaderBoard/>} />
        <Route path="/learnpath" element={<LearningParth/>} />
        <Route path="/mycource" element={<MyCource/>} />
        <Route path="/practice" element={<PracticeProblems/>} />
        <Route path="/setting" element={<Settings/>} />
        <Route path="/tutoring" element={<Tutoring/>} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/select01" element={<MainSelectOne/>} />
        <Route path="/selectTutors" element={<SelectTutors/>} />
        <Route path="/selfstudy" element={<SelfStudy/>} />
        <Route path="/selfstudyselection" element={<SelfStudySelection/>} />
       
        
     </Routes>
    
</BrowserRouter>
    )
}