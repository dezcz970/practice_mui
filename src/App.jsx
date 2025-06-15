import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './components/Home';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        {/* その他のルート */}
      </Routes>
    </Router>
  );
}

export default App;
