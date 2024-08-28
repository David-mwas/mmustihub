import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/HomeDefaultPage";
import AboutPage from "./Pages/AboutPage";
import Programs from "./Pages/ProgramsPage";
import Projects from "./Pages/ProjectsPage";
import Membership from "./Pages/MembershipPage";
import Donate from "./Pages/DonatePage";
import CommunityAndEvents from "./Pages/CommunityAndEvents";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/communityandevents" element={<CommunityAndEvents />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
