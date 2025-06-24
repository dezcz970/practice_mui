import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router';
import ChangePassword from './components/ChangePassword';
import DateVoteForm from './components/DateVoteForm';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import RestaurantList from './components/RestaurantList';
import UserPage from './components/UserPage';

function RequirePasswordChange({ mustChangePassword, children }) {
  const location = useLocation();
  if (mustChangePassword && location.pathname !== '/change-password') {
    return <Navigate to="/change-password" replace />;
  }
  return children;
}

function App() {
  // 仮の認証・初回パスワード変更状態
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mustChangePassword, setMustChangePassword] = useState(true); // 初回ログイン時true

  // ログイン時のコールバック
  const handleLogin = (username, password) => {
    // 本来はAPI認証
    setIsAuthenticated(true);
    // ここで初回ログインかどうか判定し、仮にtrueに
    setMustChangePassword(true);
  };

  // パスワード変更時のコールバック
  const handleChangePassword = () => {
    setMustChangePassword(false);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/change-password" element={<ChangePassword onChangePassword={handleChangePassword} />} />
        <Route
          path="/*"
          element={
            <RequirePasswordChange mustChangePassword={mustChangePassword}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/date-vote" element={<DateVoteForm />} />
                <Route path="/restaurants" element={<RestaurantList />} />
                {/* その他のルート */}
              </Routes>
            </RequirePasswordChange>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
