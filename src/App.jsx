import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UserAnalytics from './components/UserAnalytics';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Dashboard />} />
        <Route path="/analytics" element={<UserAnalytics />} />
        <Route path="/user/:userId" element={<UserAnalytics />} />
        <Route path="/analytics/:userId" element={<UserAnalytics/>} />
      </Routes>
    </Router>
  );
}

export default App;
