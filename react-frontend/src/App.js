import { HomePage } from './pages/homepage';
import { JobPage } from './pages/jobpage';
import { PostJobPage } from './pages/postjobpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Jobs" element={<JobPage />} />
        <Route path="/PostJob" element={<PostJobPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
