
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Jobscout | Accelerate Your Hiring Process with AI</title>
				<link
					rel="apple-touch-icon"
					href="/favicon.ico"
					type="image"
					sizes="any"
				/>
				<link rel="icon" href="/favicon.ico" type="image" sizes="any" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head>
			{router?.pathname !== "/404" && <Navbar />}
			<Toaster position="top-center" />
			<Component {...pageProps} />
		{router?.pathname !== "/404" && <Footer />}
		</>
	);
}
