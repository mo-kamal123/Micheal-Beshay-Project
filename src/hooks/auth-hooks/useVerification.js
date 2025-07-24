import { useMutation } from '@tanstack/react-query';
import { verfiyEmail } from '../../services/auth-services/verfiy-email';

// Custom hook for email verification using React Query's useMutation
export const useVerification = () => {
  return useMutation({
    mutationFn: verfiyEmail,
    onSuccess: data => {
      // Handle successful registration, e.g., store user data or tokens
      console.log('Registration successful:', data);
      // changeStorage('token', JSON.stringify(data.data.token));
    },
  });
};
