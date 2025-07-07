import { useMutation } from '@tanstack/react-query';
import { contactUs } from '../../services/contact-services/contact-services';

// Custom hook for sending a contact message using React Query's useMutation
export const useContact = () => {
  return useMutation({
    mutationFn: contactUs,
    onSuccess: data => {
      // Handle successful message sending, e.g., show a success message
      console.log('message sent successfully:', data);
    },
  });
};
