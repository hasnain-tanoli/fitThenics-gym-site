import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { updateUser } from '../features/auth/authSlice';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fitnessGoal: '',
    weight: '',
    height: '',
    age: '',
    gender: '',
    workoutDays: '',
    mealPreferences: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    dispatch(updateUser(formData));
    navigate('/member-dashboard');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card className="w-full max-w-md bg-card text-card-foreground shadow-xl rounded-lg">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle className="text-3xl font-bold text-center text-primary">Choose Your Fitness Goal</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {['Lose Weight', 'Gain Muscle', 'Improve Endurance', 'Overall Fitness'].map((goalOption) => (
                  <Button
                    key={goalOption}
                    variant={formData.fitnessGoal === goalOption ? 'default' : 'outline'}
                    className="w-full py-3 text-lg"
                    onClick={() => handleSelectChange('fitnessGoal', goalOption)}
                  >
                    {goalOption}
                  </Button>
                ))}
              </div>
              <Button onClick={nextStep} className="w-full py-3 text-lg font-semibold">Next</Button>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card className="w-full max-w-md bg-card text-card-foreground shadow-xl rounded-lg">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle className="text-3xl font-bold text-center text-primary">Enter Your Body Stats</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-lg">Weight (kg)</Label>
                  <Input id="weight" name="weight" type="number" value={formData.weight} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-lg">Height (cm)</Label>
                  <Input id="height" name="height" type="number" value={formData.height} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-lg">Age</Label>
                  <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-lg">Gender</Label>
                  <Select onValueChange={(value) => handleSelectChange('gender', value)} value={formData.gender}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={prevStep} variant="outline" className="py-3 text-lg font-semibold">Previous</Button>
                <Button onClick={nextStep} className="py-3 text-lg font-semibold">Next</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card className="w-full max-w-md bg-card text-card-foreground shadow-xl rounded-lg">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle className="text-3xl font-bold text-center text-primary">Set Your Workout Days</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {['3 days/week', '4 days/week', '5 days/week', '6+ days/week'].map((daysOption) => (
                  <Button
                    key={daysOption}
                    variant={formData.workoutDays === daysOption ? 'default' : 'outline'}
                    className="w-full py-3 text-lg"
                    onClick={() => handleSelectChange('workoutDays', daysOption)}
                  >
                    {daysOption}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={prevStep} variant="outline" className="py-3 text-lg font-semibold">Previous</Button>
                <Button onClick={nextStep} className="py-3 text-lg font-semibold">Next</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 4:
        return (
          <Card className="w-full max-w-md bg-card text-card-foreground shadow-xl rounded-lg">
            <CardHeader className="border-b border-border pb-4">
              <CardTitle className="text-3xl font-bold text-center text-primary">Choose Meal Preferences</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'No Preference'].map((mealOption) => (
                  <Button
                    key={mealOption}
                    variant={formData.mealPreferences === mealOption ? 'default' : 'outline'}
                    className="w-full py-3 text-lg"
                    onClick={() => handleSelectChange('mealPreferences', mealOption)}
                  >
                    {mealOption}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button onClick={prevStep} variant="outline" className="py-3 text-lg font-semibold">Previous</Button>
                <Button onClick={handleSubmit} className="py-3 text-lg font-semibold">Finish</Button>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      {renderStep()}
    </div>
  );
};

export default Onboarding;
