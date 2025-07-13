import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MembershipForm from '../../components/forms/MembershipForm';

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <Card className="w-full max-w-md bg-secondary text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-accent">
            Create Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MembershipForm isRegistration={true} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
