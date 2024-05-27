
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import Head from "next/head";
function Index() {
	return (
		<>
			<Head>
				<title>Privacy Policy - JobScout</title>
				<meta
					name="description"
					content="Read our Privacy Policy to understand how JobScout collects, uses, and protects your personal information. Learn about your privacy rights and how we ensure the security of your data."
				/>
				<meta
					name="keywords"
					content="shipping, delivery, orders, address"
				/>
			</Head>
			
			<main className="flex flex-col   items-center justify-center px-8">
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, scale: 1.2 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.1,
							scale: {
								type: "spring",
								damping: 50,
								stiffness: 200,
								restDelta: 0.001,
							},
						}}
						className="py-10 overflow-hidden"
					>
						<motion.p
							initial={{ opacity: 0, x: "-40%" }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								scale: {
									type: "spring",
									damping: 50,
									stiffness: 200,
									restDelta: 0.001,
								},
							}}
							className="text-center text-2xl md:text-3xl font-bold "
						>
							Privacy Policy
						</motion.p>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.6,
								scale: {
									type: "spring",
									damping: 50,
									stiffness: 200,
									restDelta: 0.001,
								},
							}}
							className="w-full md:w-[90%] lg:w-[70%] xl:w-[65%] mx-auto lg:text-justify"
						>
							<motion.div
								initial={{ opacity: 0, x: "-40%" }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									scale: {
										type: "spring",
										damping: 50,
										stiffness: 200,
										restDelta: 0.001,
									},
								}}
							>
								<motion.p
									initial={{
										opacity: 0,
										y: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-3 mt-7"
								>
									Effective Date: December 23, 2023
								</motion.p>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										1. Overview
									</motion.p>
									<motion.p>
										JobScout ("we," "us," or "our") is
										committed to protecting the privacy and
										security of your personal information.
										This Privacy Policy outlines how we
										collect, use, disclose, and protect the
										information you provide when using our
										mobile application and related services
										("Services"). By accessing or using
										JobScout, you agree to the terms of this
										Privacy Policy.
									</motion.p>
								</motion.div>

								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										2. Information We Collect
									</motion.p>
									<motion.p>
										<span className="font-medium mr-2">
											{" "}
											User-Provided Information:
										</span>{" "}
										We may collect personal information you
										voluntarily provide when using our
										Services, such as your name, contact
										information, and vehicle details.
										<br />
										<br />
										<span className="font-medium mr-2">
											Automatically Collected Information:
										</span>{" "}
										We may collect device information, usage
										data, and other technical information
										when you use our app.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										3. How We Use Your Information
									</motion.p>
									<motion.p>
										We use the collected information for
										purposes including, but not limited to,
										providing and improving our Services,
										responding to user inquiries, and
										offering a personalized experience. We
										may also use the information for
										analytics, marketing, and legal
										compliance.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										4. Sharing Your Information
									</motion.p>
									<motion.p>
										We do not sell, trade, or rent your
										personal information to third parties.
										We may share information with service
										providers, business partners, or in
										response to legal requests.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										5. Security
									</motion.p>
									<motion.p>
										We implement security measures to
										protect your information. However, no
										method of transmission over the internet
										or electronic storage is completely
										secure. Therefore, while we strive to
										protect your information, we cannot
										guarantee its absolute security.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										6. Your Choices
									</motion.p>
									<motion.p>
										You can manage your preferences and
										opt-out of certain data collection
										through the app settings. You may also
										contact us for assistance with specific
										requests related to your data.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										7. Children's Privacy
									</motion.p>
									<motion.p>
										JobScout is not intended for individuals
										under the age of 13. We do not knowingly
										collect personal information from
										children. If you believe we have
										inadvertently collected information from
										a child, please contact us to request
										its removal.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										8. Changes to this Privacy Policy
									</motion.p>
									<motion.p>
										We reserve the right to update this
										Privacy Policy. We will notify you of
										any changes by posting the new policy on
										this page. We recommend reviewing this
										Privacy Policy periodically for any
										updates.
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										9. Contact Us
									</motion.p>
									<motion.p>
										If you have questions, concerns, or
										requests regarding this Privacy Policy,
										please contact us at{" "}
										<span>
											<a
												href="mailto:support@jobscout.work"
												className="underline text-[#7350C4]"
											>
												{"  "}support@jobscout.work
											</a>
										</span>
									</motion.p>
								</motion.div>
								<motion.div
									initial={{
										opacity: 0,
										x: "40%",
										scale: 0.7,
									}}
									whileInView={{ opacity: 1, x: 0, scale: 1 }}
									transition={{
										duration: 0.6,
										scale: {
											type: "spring",
											damping: 14,
											stiffness: 200,
											restDelta: 0.001,
										},
									}}
									className="mb-5"
								>
									<motion.p className="font-bold mb-2 mt-8">
										10. Governing Law
									</motion.p>
									<motion.p>
										This Privacy Policy is governed by and
										construed in accordance with the laws of
										the Republic of India. Any disputes
										arising under or in connection with this
										Privacy Policy will be resolved in
										accordance with the laws of the Republic
										of India.
									</motion.p>
								</motion.div>
							</motion.div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</main>
		
		</>
	);
}

export default Index;
