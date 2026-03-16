import { FiUser } from "react-icons/fi";

const tasks = [
  {
    title: "Deep clean kitchen",
    location: "Flat 319",
    assignee: "Sarah Khan",
    time: "10:00 AM",
  },
  {
    title: "Bathroom refresh",
    location: "Flat 319",
    assignee: "James Miller",
    time: "10:00 AM",
  },
  {
    title: "Full property clean",
    location: "Flat 319",
    assignee: "Sarah Khan",
    time: "10:00 AM",
  },
  {
    title: "Bedroom clean",
    location: "Flat 319",
    assignee: "Emma Wilson",
    time: "10:00 AM",
  },
];

const UpcomingTasks = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-base font-bold text-slate-800">Upcoming Tasks Today</h3>

      <ul className="divide-y divide-slate-100">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800">{task.title}</p>
              <p className="mt-0.5 text-xs text-slate-400">{task.location}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-blue-500">
                <FiUser className="shrink-0 text-[10px]" />
                {task.assignee}
              </p>
            </div>
            <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-blue-500">
              {task.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTasks;
