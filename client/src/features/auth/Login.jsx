import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, reset } from './authSlice';
import Spinner from '../../components/ui/Spinner';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Checkbox } from '../../components/ui/checkbox';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const { email, password, rememberMe } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess && user) {
      if (user.role) {
        navigate('/member-dashboard');
      } else {
        navigate('/onboarding');
      }
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isSuccess, navigate, dispatch]);

  const onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                Password
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onChange}
                  required
                />
              </Label>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMe" name="rememberMe" checked={rememberMe} onCheckedChange={(checked) => onChange({ target: { name: 'rememberMe', type: 'checkbox', checked } })} />
                <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
              </div>
              <Link to="/forgot-password"className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
