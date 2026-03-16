import { useState } from "react";
import { Link } from "react-router";
import { FiArrowLeft, FiEye, FiEyeOff, FiLock } from "react-icons/fi";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const password = String(form.get("password") ?? "");
        const confirmPassword = String(form.get("confirmPassword") ?? "");

        if (password !== confirmPassword) {
            console.log("Reset Password Error:", {
                message: "Passwords do not match",
            });
            return;
        }

        console.log("Reset Password Data:", {
            password,
            confirmPassword,
        });
    };

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
                <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                    <Link
                        to="/verify-code"
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
                            Set a password
                        </h2>

                        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-500 sm:text-base">
                            Your previous password has been reseted. Please set a new
                            password for your account.
                        </p>
                    </header>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Create Password
                            </label>

                            <div className="relative">
                                <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-11 pr-12 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((value) => !value)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition hover:text-slate-600"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Re-enter Password
                            </label>

                            <div className="relative">
                                <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-11 pr-12 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((value) => !value)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition hover:text-slate-600"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-1 w-full rounded-xl bg-blue-500 px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.99]"
                        >
                            Set password
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default ResetPassword;