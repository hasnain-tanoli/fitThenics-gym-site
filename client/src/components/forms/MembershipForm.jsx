import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, updateMembership, reset } from '../../features/auth/authSlice';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  age: yup.number().required('Age is required').positive().integer(),
  gender: yup.string().required('Gender is required'),
});

const MembershipForm = ({ isRegistration }) => {
  const { register: formRegister, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isRegistration && isSuccess && user) {
      navigate('/onboarding');
    }
    // Reset the auth state on component unmount
    return () => {
      dispatch(reset());
    };
  }, [isRegistration, isSuccess, user, navigate, dispatch]);

  const onSubmit = (data) => {
    console.log('Submitting data:', data);
    if (isRegistration) {
      console.log('Registering user');
      dispatch(register(data));
    } else {
      console.log('Updating membership');
      dispatch(updateMembership(data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-secondary-foreground">Name</label>
        <input {...formRegister('name')} className="mt-1 block w-full p-3 rounded-md bg-background border-primary/20 border text-foreground focus:ring-primary focus:border-primary" />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-foreground">Email</label>
        <input {...formRegister('email')} className="mt-1 block w-full p-3 rounded-md bg-background border-primary/20 border text-foreground focus:ring-primary focus:border-primary" />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-foreground">Phone</label>
        <input {...formRegister('phone')} className="mt-1 block w-full p-3 rounded-md bg-background border-primary/20 border text-foreground focus:ring-primary focus:border-primary" />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-secondary-foreground">Password</label>
        <input type="password" {...formRegister('password')} className="mt-1 block w-full p-3 rounded-md bg-background border-primary/20 border text-foreground focus:ring-primary focus:border-primary" />
        {errors.password && <p className="text-destructive text-xs mt-1">{errors.password.message}</p>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-secondary-foreground">Age</label>
          <input type="number" {...formRegister('age')} className="mt-1 block w-full p-3 rounded-md bg-background border-primary/20 border text-foreground focus:ring-primary focus:border-primary" />
          {errors.age && <p className="text-destructive text-xs mt-1">{errors.age.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-foreground">Gender</label>
          <select {...formRegister('gender')} className="mt-1 block w-full p-3 rounded-md bg-background border-primary/20 border text-foreground focus:ring-primary focus:border-primary">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-destructive text-xs mt-1">{errors.gender.message}</p>}
        </div>
      </div>
      <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg uppercase tracking-wider transition-all duration-300 hover:bg-primary/90">Submit</button>
    </form>
  );
};

export default MembershipForm;
