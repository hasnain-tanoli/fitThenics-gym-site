import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { reset } from '../features/auth/authSlice';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      if (user?.membershipInfo) {
        navigate('/member-dashboard');
      } else if (user) {
        navigate('/membership');
      }
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  return useSelector((state) => state.auth);
};
