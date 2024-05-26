'use client';

import React, { useState } from 'react';

interface FormState {
  email: string;
}

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
  });
  const [errors, setErrors] = useState<FormState>({
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isNUSEmail = (email: string) => {
    const domain = email.split('@')[1];
    return domain === 'u.nus.edu';
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      const errors = {email: ''};

      if (formState.email === '' || !validateEmail(formState.email)) {
        errors.email = 'Valid email is required';
      }

      if (!isNUSEmail(formState.email)) {
        errors.email = 'Email must be from NUS e.g example@u.nus.edu';
      }

      setErrors(errors);

      if (!errors.email) {
         await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        setFormState({ email: '', });
      }
    } catch (error) {
      // handle error here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4 justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <input
          className="w-full rounded-md border-2 border-slate-300 px-2 py-1 outline-purple-500"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
      </div>

      <button
        disabled={isSubmitting}
        className="rounded-md bg-purple-500 text-white px-2 py-1 block"
        type="submit"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactUs;