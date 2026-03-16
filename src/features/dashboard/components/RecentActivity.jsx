// Full class strings so Tailwind v4 can scan them
const barColor = {
  orange: "bg-orange-400",
  green: "bg-green-400",
  blue: "bg-blue-400",
  purple: "bg-purple-400",
};

const activities = [
  {
    label: "New maintenance request",
    sub: "Flat 319 · Conditioning House",
    color: "orange",
    time: "10 mins ago",
  },
  {
    label: "Cleaning completed",
    sub: "Flat 203 · Mill Street",
    color: "green",
    time: "25 mins ago",
  },
  {
    label: "New property added",
    sub: "Flat 412 · Abbey House",
    color: "blue",
    time: "1 hour ago",
  },
  {
    label: "Cleaner assigned",
    sub: "Sarah Khan to Flat 319",
    color: "purple",
    time: "10 mins ago",
  },
  {
    label: "Maintenance completed",
    sub: "Flat 156 · Conditioning House",
    color: "orange",
    time: "10 mins ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-base font-bold text-slate-800">Recent Activity</h3>

      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`mt-1 h-full min-h-8 w-1 shrink-0 rounded-full ${barColor[activity.color]}`}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-700">{activity.label}</p>
              <p className="mt-0.5 text-xs text-slate-400">{activity.sub}</p>
            </div>
            <span className="shrink-0 whitespace-nowrap text-xs text-slate-400">
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
