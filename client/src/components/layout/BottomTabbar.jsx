import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Utensils, LineChart, MoreHorizontal } from 'lucide-react';

const BottomTabbar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/member-dashboard', icon: Home },
{ name: 'Workouts', path: '/workouts', icon: Dumbbell },
    { name: 'Meals', path: '/meal-plan', icon: Utensils },
    { name: 'Progress', path: '/workout-history', icon: LineChart },
    { name: 'Community', path: '/forum', icon: MoreHorizontal },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around p-2 z-50">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex flex-col items-center transition-colors duration-300 ${
            location.pathname === item.path ? 'text-accent' : 'text-light'
          }`}
        >
          <item.icon size={24} />
          <span className="text-xs">{item.name === 'MoreHorizontal' ? 'Community' : item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomTabbar;
