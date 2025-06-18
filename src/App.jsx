import { Route, BrowserRouter as Router, Routes } from 'react-router';
import DateVoteForm from './components/DateVoteForm';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import UserPage from './components/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/date-vote" element={<DateVoteForm />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        {/* その他のルート */}
      </Routes>
    </Router>
  );
}

export default App;
