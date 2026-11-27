export interface ContactFormValues {
  fullName: string;
  subject: string;
  email: string;
  message: string;
}

export type ContactField = keyof ContactFormValues;
export type ContactFormErrors = Partial<Record<ContactField, string>>;

type Validator = (value: string) => string | undefined;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function minLength(label: string, min: number): Validator {
  return (value) => {
    const length = value.trim().length;
    if (length === 0) return `${label} is required.`;
    if (length < min) return `${label} must be at least ${min} characters.`;
    return undefined;
  };
}

const validators: Record<ContactField, Validator> = {
  fullName: minLength("Full name", 3),
  subject: minLength("Subject", 3),
  email: (value) => {
    if (!value.trim()) return "Email is required.";
    if (!EMAIL_PATTERN.test(value.trim()))
      return "Please enter a valid email, e.g. name@example.com.";
    return undefined;
  },
  message: minLength("Message", 10),
};

export function validateField(
  field: ContactField,
  value: string,
): string | undefined {
  return validators[field](value);
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  for (const field of Object.keys(validators) as ContactField[]) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }

  return errors;
}
