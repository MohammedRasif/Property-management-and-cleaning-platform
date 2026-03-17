import { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import ScheduleFilters from "./components/ScheduleFilters";
import ScheduleStats from "./components/ScheduleStats";
import ScheduleTasksTable from "./components/ScheduleTasksTable";
import ScheduleTaskModal from "./components/ScheduleTaskModal";

const MOCK_TASKS = [
	{
		id: 1,
		dateTime: "2/1/2026 ; 09:00",
		type: "cleaning",
		typeLabel: "Cleaning",
		building: "Conditioning House",
		property: "Flat 319",
		assignedTo: "Sarah Khan",
		notes: "Deep clean kitchen and bathroom",
		city: "Dhaka",
	},
	{
		id: 2,
		dateTime: "2/1/2026 ; 09:00",
		type: "maintenance",
		typeLabel: "Maintenance",
		building: "Conditioning House",
		property: "Flat 319",
		assignedTo: "Sarah Khan",
		notes: "Deep clean kitchen and bathroom",
		city: "London",
	},
	{
		id: 3,
		dateTime: "2/1/2026 ; 09:00",
		type: "cleaning",
		typeLabel: "Cleaning",
		building: "Conditioning House",
		property: "Flat 319",
		assignedTo: "Sarah Khan",
		notes: "Deep clean kitchen and bathroom",
		city: "London",
	},
	{
		id: 4,
		dateTime: "2/1/2026 ; 09:00",
		type: "cleaning",
		typeLabel: "Cleaning",
		building: "Conditioning House",
		property: "Flat 319",
		assignedTo: "Sarah Khan",
		notes: "Deep clean kitchen and bathroom",
		city: "London",
	},
	{
		id: 5,
		dateTime: "2/1/2026 ; 09:00",
		type: "cleaning",
		typeLabel: "Cleaning",
		building: "Conditioning House",
		property: "Flat 319",
		assignedTo: "Sarah Khan",
		notes: "Deep clean kitchen and bathroom",
		city: "London",
	},
	{
		id: 6,
		dateTime: "2/1/2026 ; 09:00",
		type: "cleaning",
		typeLabel: "Cleaning",
		building: "Conditioning House",
		property: "Flat 319",
		assignedTo: "Sarah Khan",
		notes: "Deep clean kitchen and bathroom",
		city: "London",
	},
];

const Schedule = () => {
	const [search, setSearch] = useState("");
	const [city, setCity] = useState("");
	const [building, setBuilding] = useState("");
	const [flat, setFlat] = useState("");
	const [dateTime, setDateTime] = useState("");
	const [taskType, setTaskType] = useState("All");
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

	const filteredTasks = useMemo(() => {
		const qSearch = search.toLowerCase().trim();
		const qCity = city.toLowerCase().trim();
		const qBuilding = building.toLowerCase().trim();
		const qFlat = flat.toLowerCase().trim();
		const qDate = dateTime.toLowerCase().trim();

		return MOCK_TASKS.filter((task) => {
			const matchType = taskType === "All" || task.type === taskType;
			const matchSearch =
				qSearch === "" ||
				[task.building, task.property, task.assignedTo, task.notes]
					.join(" ")
					.toLowerCase()
					.includes(qSearch);
			const matchCity = qCity === "" || task.city.toLowerCase().includes(qCity);
			const matchBuilding =
				qBuilding === "" || task.building.toLowerCase().includes(qBuilding);
			const matchFlat = qFlat === "" || task.property.toLowerCase().includes(qFlat);
			const matchDate = qDate === "" || task.dateTime.toLowerCase().includes(qDate);

			return (
				matchType &&
				matchSearch &&
				matchCity &&
				matchBuilding &&
				matchFlat &&
				matchDate
			);
		});
	}, [search, city, building, flat, dateTime, taskType]);

	const stats = useMemo(() => {
		const cleaningCount = filteredTasks.filter((task) => task.type === "cleaning").length;
		const maintenanceCount = filteredTasks.filter(
			(task) => task.type === "maintenance"
		).length;

		return [
			{ label: "Total Scheduled", value: filteredTasks.length, valueColor: "text-slate-800" },
			{ label: "Cleaning Tasks", value: cleaningCount, valueColor: "text-blue-500" },
			{
				label: "Maintenance Tasks",
				value: maintenanceCount,
				valueColor: "text-red-500",
			},
			{ label: "Recurring Tasks", value: 1, valueColor: "text-orange-500" },
		];
	}, [filteredTasks]);

	return (
		<main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
			<header className="mb-5 flex flex-wrap items-start justify-between gap-3">
				<div>
					<h1 className="text-2xl font-bold text-slate-800">Schedule Management</h1>
					<p className="mt-0.5 text-sm text-slate-500">
						View and manage cleaning schedules
					</p>
				</div>

				<button
					type="button"
					onClick={() => setIsTaskModalOpen(true)}
					className="inline-flex h-10 items-center gap-2 rounded-xl bg-blue-500 px-4 text-sm font-semibold text-white transition hover:bg-blue-600"
				>
					<FiPlus className="text-base" />
					Schedule Task
				</button>
			</header>

			<div className="space-y-4">
				<ScheduleStats stats={stats} />

				<ScheduleFilters
					search={search}
					onSearch={setSearch}
					city={city}
					onCity={setCity}
					building={building}
					onBuilding={setBuilding}
					flat={flat}
					onFlat={setFlat}
					dateTime={dateTime}
					onDateTime={setDateTime}
					taskType={taskType}
					onTaskType={setTaskType}
				/>

				<ScheduleTasksTable tasks={filteredTasks} />

				<ScheduleTaskModal
					isOpen={isTaskModalOpen}
					onClose={() => setIsTaskModalOpen(false)}
					onSubmit={(payload) => {
						console.log(payload);
						setIsTaskModalOpen(false);
					}}
				/>
			</div>
		</main>
	);
};

export default Schedule;
