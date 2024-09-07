import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import './MainLayout.css';

export function MainLayout () {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}