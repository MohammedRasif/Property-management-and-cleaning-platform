import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

const OTP_LENGTH = 4;
const INITIAL_SECONDS = 120;

const VerifyCode = () => {
	const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
	const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);
	const inputRefs = useRef([]);

	useEffect(() => {
		if (secondsLeft <= 0) {
			return undefined;
		}

		const timer = setInterval(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [secondsLeft]);

	const formatTime = (totalSeconds) => {
		const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
		const seconds = String(totalSeconds % 60).padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	const handleChange = (index, value) => {
		if (!/^\d?$/.test(value)) {
			return;
		}

		const updatedOtp = [...otp];
		updatedOtp[index] = value;
		setOtp(updatedOtp);

		if (value && index < OTP_LENGTH - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (index, event) => {
		if (event.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (event) => {
		event.preventDefault();
		const pastedValue = event.clipboardData
			.getData("text")
			.replace(/\D/g, "")
			.slice(0, OTP_LENGTH)
			.split("");

		if (pastedValue.length === 0) {
			return;
		}

		const updatedOtp = Array(OTP_LENGTH)
			.fill("")
			.map((_, index) => pastedValue[index] ?? "");

		setOtp(updatedOtp);
		const lastIndex = Math.min(pastedValue.length - 1, OTP_LENGTH - 1);
		inputRefs.current[lastIndex]?.focus();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const code = otp.join("");

		if (code.length !== OTP_LENGTH) {
			return;
		}

		console.log("Verification Data:", { code });
	};

	const handleResend = () => {
		setOtp(Array(OTP_LENGTH).fill(""));
		setSecondsLeft(INITIAL_SECONDS);
		inputRefs.current[0]?.focus();
		console.log("Resend code requested");
	};

	return (
		<main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
			<section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
				<div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
					<Link
						to="/forgot-password"
						className="mb-8 inline-flex items-center gap-1 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-500 transition hover:bg-blue-100"
					>
						<FiArrowLeft className="text-sm" />
						Back
					</Link>

					<header className="mb-8 text-center">
						<h1 className="text-4xl font-extrabold leading-none tracking-tight">
							<span className="text-blue-500">Jensa</span>{" "}
							<span className="text-slate-800">Group</span>
						</h1>

						<h2 className="mt-5 text-3xl font-bold text-slate-800 sm:text-4xl">
							Verify code
						</h2>

						<p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-500 sm:text-base">
							An authentication code has been sent to your email.
						</p>
					</header>

					<form className="space-y-6" onSubmit={handleSubmit}>
						<div className="text-center">
							<p className="mb-3 text-sm font-semibold text-slate-700">Enter Code</p>

							<div className="flex items-center justify-center gap-2 sm:gap-3">
								{otp.map((digit, index) => (
									<input
										key={index}
										ref={(element) => {
											inputRefs.current[index] = element;
										}}
										inputMode="numeric"
										maxLength={1}
										value={digit}
										onChange={(event) => handleChange(index, event.target.value)}
										onKeyDown={(event) => handleKeyDown(index, event)}
										onPaste={handlePaste}
										className="h-12 w-12 rounded-lg border border-slate-200 bg-white text-center text-2xl font-semibold text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 sm:h-14 sm:w-14"
										aria-label={`OTP digit ${index + 1}`}
									/>
								))}
							</div>

							<p className="mt-4 text-sm text-slate-400">{formatTime(secondsLeft)} Sec</p>

							<p className="mt-2 text-sm text-slate-500">
								Didn&apos;t receive a code?{" "}
								<button
									type="button"
									onClick={handleResend}
									className="font-semibold text-blue-500 transition hover:text-blue-600"
								>
									Resend
								</button>
							</p>
						</div>

						<button
							type="submit"
							className="w-full rounded-xl bg-blue-500 px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.99]"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default VerifyCode;
