import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layouts/MainLayout.jsx';
import { Home } from './pages/Home/Home.jsx';
import { User } from './pages/User/User.jsx';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="user/*" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}
