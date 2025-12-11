// resources/js/validation/contactValidation.js

export function validateContactForm(form) {
    const errors = {};

    // Name: only letters & spaces
    const namePattern = /^[A-Za-z\s]+$/;

    if (!form.full_name || form.full_name.trim().length < 3) {
        errors.full_name = ["Full name must be at least 3 characters long."];
    } else if (!namePattern.test(form.full_name)) {
        errors.full_name = ["Full name can only contain letters and spaces."];
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailPattern.test(form.email)) {
        errors.email = ["Please enter a valid email address."];
    }

    // Subject minimum 3 chars
    if (!form.subject || form.subject.trim().length < 3) {
        errors.subject = ["Subject must be at least 3 characters long."];
    }

    // Message minimum 10 chars
    if (!form.message || form.message.trim().length < 10) {
        errors.message = ["Message must be at least 10 characters long."];
    }

    return errors;
}
