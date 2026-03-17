import { FiCalendar, FiSearch } from "react-icons/fi";

const TASK_TYPES = ["All", "cleaning", "maintenance"];

const InputField = ({ label, children }) => (
  <label className="block">
    <span className="mb-1 block text-xs font-medium text-slate-500">{label}</span>
    {children}
  </label>
);

const ScheduleFilters = ({
  search,
  onSearch,
  city,
  onCity,
  building,
  onBuilding,
  flat,
  onFlat,
  dateTime,
  onDateTime,
  taskType,
  onTaskType,
}) => {
  return (
    <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-700">Search</span>
        <label className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search"
            className="w-36 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:w-44"
          />
          <FiSearch className="text-slate-400" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <InputField label="City">
          <input
            type="text"
            value={city}
            onChange={(e) => onCity(e.target.value)}
            placeholder="eg., London"
            className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </InputField>

        <InputField label="Building Name">
          <input
            type="text"
            value={building}
            onChange={(e) => onBuilding(e.target.value)}
            placeholder="eg., Conditioning House"
            className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </InputField>

        <InputField label="Flat No">
          <input
            type="text"
            value={flat}
            onChange={(e) => onFlat(e.target.value)}
            placeholder="eg., Flat 319"
            className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </InputField>

        <InputField label="Date & Time">
          <div className="relative">
            <input
              type="text"
              value={dateTime}
              onChange={(e) => onDateTime(e.target.value)}
              placeholder="eg., 2/1/2026 ; 09:00"
              className="h-11 w-full rounded-md border border-slate-200 px-3 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
            <FiCalendar className="pointer-events-none absolute right-3 top-3.5 text-slate-400" />
          </div>
        </InputField>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-semibold text-slate-700">Task Type</span>
        {TASK_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => onTaskType(type)}
            className={`rounded-lg px-4 py-1.5 text-sm font-semibold transition ${
              taskType === type
                ? "bg-blue-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ScheduleFilters;
