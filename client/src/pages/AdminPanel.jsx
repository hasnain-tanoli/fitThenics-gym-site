import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUsers,
  approveUser,
  deleteUser,
  promoteUser,
  reset,
} from '../features/admin/adminSlice';
import Spinner from '../components/ui/Spinner';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (isError) {
      console.error(message); // Changed console.log to console.error for errors
    }

    dispatch(getUsers());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto p-4 bg-background text-foreground min-h-screen">
      <h1 className="text-4xl font-heading font-bold mb-6 text-center text-primary">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-secondary p-6 rounded-xl shadow-lg col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Member Management</h2>
          {users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left table-auto">
                <thead className="bg-background/50">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide">Name</th>
                    <th className="p-3 text-sm font-semibold tracking-wide">Email</th>
                    <th className="p-3 text-sm font-semibold tracking-wide">Status</th>
                    <th className="p-3 text-sm font-semibold tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((user) => (
                    <tr key={user._id} className="hover:bg-background/50 transition-colors duration-200">
                      <td className="p-3 text-sm text-secondary-foreground">{user.name}</td>
                      <td className="p-3 text-sm text-secondary-foreground">{user.email}</td>
                      <td className="p-3 text-sm">
                        <span className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                          user.membershipStatus === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                          user.membershipStatus === 'active' ? 'bg-green-500/20 text-green-500' :
                          'bg-gray-500/20 text-gray-500'
                        }`}>
                          {user.membershipStatus}
                        </span>
                      </td>
                      <td className="p-3 text-sm">
                        {user.membershipStatus === 'pending' && (
                          <button
                            onClick={() => dispatch(approveUser(user._id))}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-lg mr-2 transition-colors duration-200"
                          >
                            Approve
                          </button>
                        )}
                        <button
                          onClick={() => dispatch(deleteUser(user._id))}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg transition-colors duration-200"
                        >
                          Delete
                        </button>
                        {user.role !== 'admin' && (
                          <button
                            onClick={() => dispatch(promoteUser(user._id))}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg ml-2 transition-colors duration-200"
                          >
                            Promote
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-secondary-foreground">No users to display.</p>
          )}
        </div>
        <div className="bg-secondary p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Fee Management</h2>
          <p className="text-secondary-foreground">Fee management features will be added here.</p>
        </div>
        <div className="bg-secondary p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Announcement System</h2>
          <p className="text-secondary-foreground">Announcement system features will be added here.</p>
        </div>
        <div className="bg-secondary p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Diet & Workout Plans</h2>
          <p className="text-secondary-foreground">Diet and workout plan management features will be added here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
