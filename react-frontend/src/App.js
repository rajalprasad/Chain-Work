import { HomePage } from './pages/homepage';
import { JobPage } from './pages/jobpage';
import { PostJobPage } from './pages/postjobpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navbar';
import { JobSubmissionPage } from './pages/jobsubmissionpage';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Jobs" element={<JobPage />} />
        <Route path="/PostJob" element={<PostJobPage />} />
        <Route path="/JobSubmission" element={<JobSubmissionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;