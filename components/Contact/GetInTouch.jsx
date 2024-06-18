/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

import axios from "axios";
import TextInput from "./TextInput";
import toast, { Toaster } from 'react-hot-toast';


const GetInTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true)
    

  
    setTimeout(() => {
      reset();
      setIsSubmitting(false)
      toast.success('Form submitted successfully!');
    }, 3000);
    
  };
  return (
    <div className="pt-20  my-12">
       <Toaster />
      <div className="container mx-auto  lg:w-[80%] 2xl:w-[80%]  flex flex-col lg:flex-row justify-center items-start w-full h-full gap-10 px-2">
        <div className="w-full lg:w-[50%]">
          <div className="w-[95%] md:w-[80%] mx-auto space-y-7 mt-6">
            <h2 className="text-3xl  text-center md:text-start md:text-4xl text-black font-semibold">
            Get in Touch
            </h2>
            <p className="text-gray text-base text-center md:text-start">
            Have questions, suggestions? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] shadow-lg rounded-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 p-4 md:p-8 border bg-white border-[#E6E6E6] rounded-2xl"
          >
            <div>
              <p className="text-xl font-semibold text-black">Send Message</p>
            </div>
            <div className="w-full space-y-3 md:space-y-0 gap-4  md:flex justify-between items-center">
              <div className="w-full lg:w-1/2">
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <TextInput
                      label="First name"
                      placeholder="First name"
                      {...field}
                      required
                      className={
                        "w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none  text-base placeholder:text-base" +
                        (errors.firstName ? "" : "")
                      }
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-base">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <TextInput
                      label="Last name"
                      placeholder="Last name"
                      {...field}
                      required
                      className={
                        "w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base" +
                        (errors.lastName ? " " : "")
                      }
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-base">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  validate: (value) =>
                    /\S+@\S+\.\S+/.test(value) || "Invalid email address",
                }}
                render={({ field }) => (
                  <TextInput
                    label="Email"
                    placeholder="you@company.com"
                    required
                    {...field}
                    className={
                      "w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base" +
                      (errors.email ? " " : "")
                    }
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-base">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-black text-base font-semibold mb-2">
                Phone Number
              </label>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    placeholder="Enter your number"
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    className={`w-full rounded border border-[#E6E6E6] bg-white px-1 py-2 outline-none focus:bg-white text-base placeholder:text-base ${
                      errors.phoneNumber ? "" : ""
                    }`}
                  />
                )}
                rules={{
                  required: "Mobile number is required",
                  validate: (value) =>
                    isValidPhoneNumber(value) ||
                    "Please enter a valid mobile number",
                }}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-base">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

           
            <div className="w-full">
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: "Message is required" }}
                render={({ field }) => (
                  <TextInput
                    label="Message"
                    type={"textarea"}
                    placeholder=""
                    required
                    {...field}
                    className={
                      "w-full px-3 py-2 h-32 resize-none border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base"
                    }
                  />
                )}
              />
              {errors.message && (
                <p className="text-red-500 text-base">{errors.message.message}</p>
              )}
            </div>

            <div className="mt-2 text-center">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-primary py-2 text-white gap-2"
              >
                {!isSubmitting ? (
                  "Submit"
                ) : (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
