
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import Head from "next/head";
function Index() {
	return (
		<>
			<Head>
				<title>Terms of Use - JobScout</title>
				<meta
					name="description"
					content="Explore the Terms of Use for JobScout. Understand our policies, terms, and conditions that govern your use of our website and services."
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
							Terms of Use
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
										1. Acceptance of Terms
									</motion.p>
									<motion.p>
										Welcome to JobScout! By accessing or
										using the JobScout mobile application
										("App") and related services
										("Services"), you agree to comply with
										and be bound by the terms and conditions
										outlined in this Terms of Use agreement
										("Agreement"). This Agreement
										constitutes a legally binding contract
										between you and JobScout. If you do not
										agree with these terms, please do not
										use the App.
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
										2. Use of Services
									</motion.p>
									<motion.p>
										<span className="font-medium mr-2">
											{" "}
											2.1. Lawful Use:
										</span>{" "}
										You agree to use JobScout's Services
										solely for lawful purposes. You will not
										use the App in any way that violates
										applicable local, state, national, or
										international laws or regulations.
										<br />
										<br />
										<span className="font-medium mr-2">
											2.2. Account Responsibility:
										</span>{" "}
										You are responsible for maintaining the
										confidentiality of your account
										information and for all activities that
										occur under your account. Notify us
										immediately of any unauthorized use or
										security breach.
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
										3. Intellectual Property
									</motion.p>
									<motion.p>
										<span className="font-medium mr-2">
											{" "}
											3.1. Ownership:
										</span>{" "}
										All content and materials available on
										the App, including but not limited to
										text, graphics, logos, images, and
										software, are the property of JobScout
										or its licensors and are protected by
										applicable copyright, trademark, and
										other intellectual property laws.
										<br />
										<br />
										<span className="font-medium mr-2">
											3.2. License:
										</span>{" "}
										JobScout grants you a limited,
										revocable, non-exclusive license to
										access and use the App for its intended
										purpose. This license does not transfer
										ownership of any intellectual property
										rights.
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
										4. User-Generated Content
									</motion.p>
									<motion.p>
										By using JobScout, you may contribute
										user-generated content. You retain
										ownership of your content, but you grant
										JobScout a non-exclusive, royalty-free
										license to use, display, and distribute
										your content within the App and for
										promotional purposes. You are solely
										responsible for the content you post.
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
										5. Privacy
									</motion.p>
									<motion.p>
										Your use of JobScout is also governed by
										our Privacy Policy. Please review the{" "}
										<span
											className="text-[#7350C4] cursor-pointer underline"
											onClick={() =>
												window.open(
													"https://jobscout.work/privacy-policy",
													"_blank",
												)
											}
										>
											Privacy Policy
										</span>{" "}
										to understand our practices concerning
										the collection, use, and protection of
										your information.
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
										6. Disclaimers and Limitation of
										Liability
									</motion.p>
									<motion.p>
										<span className="font-medium mr-2">
											{" "}
											6.1. Disclaimer:
										</span>{" "}
										JobScout provides the Services on an
										"as-is" and "as-available" basis. We
										make no warranties or representations
										regarding the accuracy or completeness
										of the content, and your use of the App
										is at your own risk.
										<br />
										<br />
										<span className="font-medium mr-2">
											6.2. Limitation of Liability:
										</span>{" "}
										JobScout shall not be liable for any
										indirect, incidental, consequential, or
										punitive damages arising out of your
										access to or use of the App.
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
										7. Termination
									</motion.p>
									<motion.p>
										JobScout reserves the right to terminate
										or suspend your account and access to
										the Services at its sole discretion,
										without notice, for any reason,
										including but not limited to a violation
										of these Terms of Use.
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
										8. Changes to Terms of Use
									</motion.p>
									<motion.p>
										JobScout reserves the right to update
										and modify these terms at any time.
										Changes will be effective upon posting
										the updated terms on our website or
										within the App. Your continued use of
										the App after such changes constitutes
										acceptance of the updated terms.
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
										9. Governing Law
									</motion.p>
									<motion.p>
										This Agreement is governed by and
										construed in accordance with the laws of
										the Republic of India. Any disputes
										arising under or in connection with this
										Privacy Policy will be resolved in
										accordance with the laws of the Republic
										of India.
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
										10. Contact Information
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
							</motion.div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</main>
			
		</>
	);
}

export default Index;
