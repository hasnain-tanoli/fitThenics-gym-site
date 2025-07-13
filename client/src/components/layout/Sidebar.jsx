import React from 'react';
import { Link } from 'react-router-dom';
import { X, LayoutDashboard, Dumbbell, Utensils, TrendingUp, Users } from 'lucide-react'; // Added new icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`bg-secondary text-foreground w-64 min-h-screen p-5 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:relative z-50 shadow-lg`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-primary">FitThenics</h2>
        <button onClick={toggleSidebar} className="md:hidden text-secondary-foreground hover:text-foreground transition-colors duration-200">
          <X size={28} />
        </button>
      </div>
      <nav className="space-y-4">
        <ul className="nav flex-column space-y-2">
          <li className="nav-item">
            <Link className="nav-link flex items-center text-secondary-foreground hover:text-foreground hover:bg-background/50 p-3 rounded-lg transition-colors duration-200" to="/member-dashboard">
              <LayoutDashboard size={20} className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link flex items-center text-secondary-foreground hover:text-foreground hover:bg-background/50 p-3 rounded-lg transition-colors duration-200" to="/workouts">
              <Dumbbell size={20} className="mr-3" />
              Workouts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link flex items-center text-secondary-foreground hover:text-foreground hover:bg-background/50 p-3 rounded-lg transition-colors duration-200" to="/meal-plan">
              <Utensils size={20} className="mr-3" />
              Meal Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link flex items-center text-secondary-foreground hover:text-foreground hover:bg-background/50 p-3 rounded-lg transition-colors duration-200" to="/workout-history">
              <TrendingUp size={20} className="mr-3" />
              Progress
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link flex items-center text-secondary-foreground hover:text-foreground hover:bg-background/50 p-3 rounded-lg transition-colors duration-200" to="/forum">
              <Users size={20} className="mr-3" />
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
