

import { useState } from "react";
import { Link } from "react-router";
import {
    FiArrowLeft,
    FiEye,
    FiEyeOff,
    FiLock,
    FiMail,
} from "react-icons/fi";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)

        const form = new FormData(event.currentTarget);
        const data = Object.fromEntries(form.entries());
        console.log("Login Data:", {
            email: data.email,
            password: data.password,
            rememberMe: Boolean(data.rememberMe),
        });
    };

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
                <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                    <Link
                        to="/"
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
                        <h2 className="mt-4 text-3xl font-bold text-slate-800 sm:text-4xl">
                            Sign In
                        </h2>
                        <p className="mt-3 text-sm text-slate-500 sm:text-base">
                            Please Enter Your Details Below to Continue
                        </p>
                    </header>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-slate-700"
                            >
                                Password
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

                        <div className="flex items-center justify-between gap-3 text-sm">
                            <label className="inline-flex items-center gap-2 text-slate-500">
                                <input
                                    name="rememberMe"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-200"
                                />
                                Remember me
                            </label>

                            <Link
                                to="/forgot-password"
                                className="font-semibold text-blue-500 transition hover:text-blue-600"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="mt-1 w-full rounded-xl bg-blue-500 px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.99]"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default SignIn;