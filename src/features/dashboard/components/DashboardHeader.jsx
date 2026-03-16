import { FiBell, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Super Admin Dashboard</h2>
        <p className="text-sm text-slate-500">
          Welcome back! Here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search"
            className="w-44 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 lg:w-60"
          />
        </div>

        <button
          type="button"
          onClick={() => navigate("/dashboard/notifications")}
          aria-label="Notifications"
          className="rounded-full border border-slate-200 bg-white p-2 transition hover:bg-slate-50"
        >
          <FiBell className="text-lg text-slate-500" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
            JT
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight text-slate-800">John Tari</p>
            <p className="text-xs leading-tight text-slate-400">johnTari@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
