import {
  FiCalendar,
  FiChevronDown,
  FiDollarSign,
  FiFileText,
  FiGrid,
  FiLogOut,
  FiMessageSquare,
  FiSettings,
  FiTool,
  FiUser,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { NavLink } from "react-router";

const navItems = [
  { label: "Dashboard", icon: FiGrid, to: "/dashboard" },
  { label: "Buildings", icon: HiOutlineBuildingOffice2, to: "/buildings" },
  { label: "Maintenance", icon: FiTool, to: "/maintenance" },
  { label: "Schedule", icon: FiCalendar, to: "/schedule" },
  { label: "User Management", icon: FiUser, hasChevron: true, to: "/user-management" },
  { label: "Weekly Wages", icon: FiDollarSign, to: "/weekly-wages" },
  { label: "Reports", icon: FiFileText, to: "/reports" },
  { label: "Team Messaging", icon: FiMessageSquare, to: "/team-messaging" },
];

const Sidebar = ({ onNavigate = () => { } }) => {
  return (
    <aside className="h-screen w-full max-w-none border-r border-slate-200 bg-slate-50 px-5 py-8 sm:px-6 lg:max-w-75 lg:px-7">
      <div className="flex h-full flex-col">
        <h1 className=" text-xl sm:text-4xl font-extrabold leading-none tracking-tight ">
          <span className="text-blue-500">Jensa</span>{" "}
          <span className="text-slate-800">Group</span>
        </h1>

        <nav className="mt-10">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-lg font-medium transition ${isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                      }`
                    }
                  >
                    <Icon
                      className={`shrink-0 text-[21px]`}
                    />
                    <span>{item.label}</span>

                    {item.hasChevron ? (
                      <FiChevronDown className="ml-auto text-[20px]" />
                    ) : null}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-2">
          <button
            type="button"
            className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-lg font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-800"
          >
            <div className="relative">
              <FiUser className="text-[21px] text-slate-500" />
              <FiSettings className="absolute -bottom-1 -right-1 rounded-full bg-slate-50 text-[12px] text-slate-500" />
            </div>
            <span>Profile &amp; Settings</span>
          </button>

          <button
            type="button"
            className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-lg font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <FiLogOut className=" " />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;