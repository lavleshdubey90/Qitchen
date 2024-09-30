"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Background from "@/public/pages_bg.png";
import ReservationBg from "@/public/reservation_page_bg.png";
import Sidebar from '../components/Sidebar';
import Heading from '../components/Heading';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Reservation: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className='w-full xl:h-screen relative text-theme'>
      <div className=''>
        <Image alt='background' src={Background} width={1000} height={1000} className='h-full w-full object-cover absolute z-10' />
      </div>

      <div className='h-full w-full absolute z-10 bg-[#0a0b0a]/90'></div>

      <div className='flex flex-1 flex-col xl:flex-row gap-5 justify-between p-3 sm:p-5 h-full'>
        <Sidebar image={ReservationBg} heading={"Book A Table"} />

        <div className='xl:w-1/2 flex flex-1 border relative z-20 rounded-2xl border-theme/15 p-3 sm:p-5'>
          <div className='mt-12 w-full'>
            <Heading heading="Reservation" />

            <p className='mt-10 text-center mx-auto max-w-[500px] text-sm sm:text-lg text-theme/50'>
              Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
            </p>

            <div className='max-w-[600px] mx-auto mt-20'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  className={`input ${errors.name ? '!border-red-500' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  className={`input ${errors.email ? '!border-red-500' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <textarea
                  name="message"
                  placeholder='Message'
                  rows={5}
                  className={`input ${errors.message ? '!border-red-500' : ''}`}
                  value={formData.message}
                  onChange={handleInputChange}
                />

                <input
                  type="submit"
                  value="Reserve"
                  className='w-full p-3 py-4 cursor-pointer hover:bg-theme/70 duration-300 bg-theme text-black font-semibold rounded-lg'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
