import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "./Contact/TextInput";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import toast, { Toaster } from 'react-hot-toast';
function GetStartedForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		setIsSubmitting(true);

		setTimeout(() => {
			reset();
			setIsSubmitting(false);
			toast.success("Form submitted successfully!");
		}, 3000);
	};
	return (
        <div className="flex flex-col space-y-8">
             <Toaster />
			<div className="flex flex-col space-y-3">
				<p className="font-medium linear-text-gradient1 text-3xl">
					Get Started For Free
				</p>
				<p className="text-gray-600 text-md max-w-xl">
					Jobscout will help you streamline hiring, cut costs, save
					time, and secure top talent!
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-5 p-4 md:p-8 border bg-white border-[#cacaca] rounded-2xl"
			>
				<div>
					<p className="text-xl font-semibold text-black">
						Personal Info &mdash;
					</p>
				</div>
				<div className="w-full space-y-3 md:space-y-0 gap-4  md:flex justify-between items-center">
					<div className="w-full lg:w-1/2">
						<Controller
							name="YourName"
							control={control}
							defaultValue=""
							rules={{ required: "Your Name is required" }}
							render={({ field }) => (
								<TextInput
									label="Your Name"
									placeholder="Your Name"
									{...field}
									required
									className={
										"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none  text-base placeholder:text-base" +
										(errors.YourName ? "" : "")
									}
								/>
							)}
						/>
						{errors.YourName && (
							<p className="text-red-500 text-sm">
								{errors.YourName.message}
							</p>
						)}
					</div>
					<div className="w-full lg:w-1/2">
						<Controller
							name="YourDesignation"
							control={control}
							defaultValue=""
							rules={{ required: "Your Designation is required" }}
							render={({ field }) => (
								<TextInput
									label="Designation"
									placeholder="Designation"
									{...field}
									required
									className={
										"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base" +
										(errors.YourDesignation ? " " : "")
									}
								/>
							)}
						/>
						{errors.YourDesignation && (
							<p className="text-red-500 text-sm">
								{errors.YourDesignation.message}
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
								/\S+@\S+\.\S+/.test(value) ||
								"Invalid email address",
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
						<p className="text-red-500 text-sm">
							{errors.email.message}
						</p>
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
						<p className="text-red-500 text-sm">
							{errors.phoneNumber.message}
						</p>
					)}
				</div>

				<div>
					<p className="text-xl font-semibold text-black mt-5">
						Company Info &mdash;
					</p>
				</div>
				<div className="w-full space-y-3 md:space-y-0 gap-4  md:flex justify-between items-center">
					<div className="w-full lg:w-1/2">
						<Controller
							name="CompanyName"
							control={control}
							defaultValue=""
							rules={{ required: "Company Name is required" }}
							render={({ field }) => (
								<TextInput
									label="Company Name"
									placeholder="Company Name"
									{...field}
									required
									className={
										"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none  text-base placeholder:text-base" +
										(errors.CompanyName ? "" : "")
									}
								/>
							)}
						/>
						{errors.CompanyName && (
							<p className="text-red-500 text-sm">
								{errors.CompanyName.message}
							</p>
						)}
					</div>
					<div className="w-full lg:w-1/2">
						<Controller
							name="TotalMembers"
							control={control}
							defaultValue=""
							rules={{ required: "This field is required" }}
							render={({ field }) => (
								<TextInput
									label="Total Members"
									placeholder="eg.  1 - 10"
									{...field}
									required
									className={
										"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base" +
										(errors.TotalMembers ? " " : "")
									}
								/>
							)}
						/>
						{errors.TotalMembers && (
							<p className="text-red-500 text-sm">
								{errors.TotalMembers.message}
							</p>
						)}
					</div>
				</div>

				<div className="w-full">
					<Controller
						name="companyurl"
						control={control}
						defaultValue=""
						rules={{ required: "This field is required" }}
						render={({ field }) => (
							<TextInput
								label="Company's URL"
								placeholder="Enter either your Linkedin or Website's url"
								required
								{...field}
								className={
									"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base" +
									(errors.companyurl ? " " : "")
								}
							/>
						)}
					/>
					{errors.companyurl && (
						<p className="text-red-500 text-sm">
							{errors.companyurl.message}
						</p>
					)}
				</div>

				<div className="w-full">
					<Controller
						name="companyemail"
						control={control}
						defaultValue=""
						rules={{
							required: "Email is required",
							validate: (value) =>
								/\S+@\S+\.\S+/.test(value) ||
								"Invalid email address",
						}}
						render={({ field }) => (
							<TextInput
								label="Company Email"
								placeholder="you@company.com"
								required
								{...field}
								className={
									"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base" +
									(errors.companyemail ? " " : "")
								}
							/>
						)}
					/>
					{errors.companyemail && (
						<p className="text-red-500 text-sm">
							{errors.companyemail.message}
						</p>
					)}
				</div>

				<div>
					<label className="block text-black text-base font-semibold mb-2">
						Contact Number
					</label>
					<Controller
						control={control}
						name="contactNumber"
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
					{errors.contactNumber && (
						<p className="text-red-500 text-sm">
							{errors.contactNumber.message}
						</p>
					)}
				</div>
				<div className="w-full">
					<Controller
						name="message"
						control={control}
						defaultValue=""
						rules={{ required: "This field is required" }}
						render={({ field }) => (
							<TextInput
								label="Tell us about your requirement"
								type={"textarea"}
								placeholder="This will help us modify our product to meet your requirement standards"
								required
								{...field}
								className={
									"w-full px-3 py-2 h-32 resize-none border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-base placeholder:text-base"
								}
							/>
						)}
					/>
					{errors.message && (
						<p className="text-red-500 text-sm">
							{errors.message.message}
						</p>
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
	);
}

export default GetStartedForm;
