import { Link } from "react-router";
import { FiArrowLeft, FiMail } from "react-icons/fi";

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    console.log("Forgot Password Data:", {
      email: form.get("email"),
    });
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl items-center justify-center">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <Link
            to="/login"
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
              Forgot your password?
            </h2>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-500 sm:text-base">
              Don&apos;t worry, happens to all of us. Enter your email below to
              recover your password
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-500 px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.99]"
            >
              Send OTP
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;