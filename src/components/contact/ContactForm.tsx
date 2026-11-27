"use client";

import { useState } from "react";
import { TextField } from "@/components/ui/TextField";
import {
  validateContactForm,
  validateField,
  type ContactField,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/utils/validation";

const initialValues: ContactFormValues = {
  fullName: "",
  subject: "",
  email: "",
  message: "",
};

const fieldId = (field: ContactField) => `contact-${field}`;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<ContactField, boolean>>
  >({});
  const [isSent, setIsSent] = useState(false);

  function handleChange(field: ContactField, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (touched[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: validateField(field, value),
      }));
    }
  }

  function handleBlur(field: ContactField) {
    setTouched((previous) => ({ ...previous, [field]: true }));
    setErrors((previous) => ({
      ...previous,
      [field]: validateField(field, values[field]),
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    const invalidFields = Object.keys(validationErrors) as ContactField[];

    setErrors(validationErrors);
    setTouched({ fullName: true, subject: true, email: true, message: true });

    if (invalidFields.length > 0) {
      document.getElementById(fieldId(invalidFields[0]))?.focus();
      return;
    }

    setIsSent(true);
    setValues(initialValues);
    setTouched({});
  }

  if (isSent) {
    return (
      <div
        role="status"
        className="rounded-card bg-paper p-8 text-center ring-1 ring-ink/5"
      >
        <p className="font-serif text-3xl">Message sent!</p>
        <p className="mt-2 text-ink-soft">
          Thanks for getting in touch. We usually reply within a day.
        </p>
        <button
          type="button"
          onClick={() => setIsSent(false)}
          className="mt-6 rounded-full bg-ink px-5 py-2.5 font-semibold text-cream transition-colors hover:bg-ink/85"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="space-y-5 rounded-card bg-paper/60 p-6 ring-1 ring-ink/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id={fieldId("fullName")}
          label="Full name"
          autoComplete="name"
          value={values.fullName}
          error={errors.fullName}
          onChange={(value) => handleChange("fullName", value)}
          onBlur={() => handleBlur("fullName")}
        />
        <TextField
          id={fieldId("email")}
          label="Email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => handleChange("email", value)}
          onBlur={() => handleBlur("email")}
        />
      </div>
      <TextField
        id={fieldId("subject")}
        label="Subject"
        value={values.subject}
        error={errors.subject}
        onChange={(value) => handleChange("subject", value)}
        onBlur={() => handleBlur("subject")}
      />
      <TextField
        id={fieldId("message")}
        label="Message"
        multiline
        value={values.message}
        error={errors.message}
        onChange={(value) => handleChange("message", value)}
        onBlur={() => handleBlur("message")}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-terracotta px-8 py-3.5 text-lg font-bold text-paper transition hover:bg-terracotta-dark active:scale-[0.98] sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
