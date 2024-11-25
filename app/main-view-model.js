import { Observable } from '@nativescript/core';
import { alert } from '@nativescript/core/ui/dialogs';

export function createViewModel() {
    const viewModel = new Observable();

    // Form fields
    viewModel.firstName = '';
    viewModel.lastName = '';
    viewModel.phone = '';
    viewModel.profession = '';
    viewModel.address = '';
    viewModel.comments = '';
    viewModel.message = '';

    viewModel.onSignUp = async () => {
        // Basic validation
        if (!viewModel.firstName || !viewModel.lastName || !viewModel.phone) {
            viewModel.set('message', 'Please fill in all required fields');
            return;
        }

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll just show a success message
            const formData = {
                firstName: viewModel.firstName,
                lastName: viewModel.lastName,
                phone: viewModel.phone,
                profession: viewModel.profession,
                address: viewModel.address,
                comments: viewModel.comments
            };

            console.log('Form data:', formData);
            
            await alert({
                title: 'Success!',
                message: 'Thank you for signing up for our newsletter!',
                okButtonText: 'OK'
            });

            // Clear the form
            viewModel.set('firstName', '');
            viewModel.set('lastName', '');
            viewModel.set('phone', '');
            viewModel.set('profession', '');
            viewModel.set('address', '');
            viewModel.set('comments', '');
            viewModel.set('message', '');

        } catch (error) {
            viewModel.set('message', 'An error occurred. Please try again.');
            console.error('Error:', error);
        }
    };

    return viewModel;
}