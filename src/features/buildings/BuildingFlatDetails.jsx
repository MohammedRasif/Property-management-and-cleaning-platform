import { LuBed } from "react-icons/lu";
import {
  FiUsers,
  FiSettings,
  FiFileText,
  FiImage,
  FiTool,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import FlatDetailsHeader from "./components/FlatDetailsHeader";

/* ─── Mock data ─────────────────────────────────────────── */
const MOCK_FLAT = {
  id: "319",
  name: "Flat 319",
  buildingName: "Conditioning House",
  city: "Bradford",
  beds: 2,
  beddingConfig: "1 King, 1 Single",
  occupancy: 5,
  adminNotes: "Monthly deep clean required",
  referencePhotos: [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80",
  ],
  maintenanceIssues: [
    {
      id: 1,
      title: "Broken lamp",
      description: "Bedside lamp not working",
      priority: "High",
      status: "Pending",
      date: "1/13/2026",
    },
    {
      id: 2,
      title: "Leaking shower",
      description: "Shower head dripping when off",
      priority: "High",
      status: "In Progress",
      date: "1/13/2026",
    },
  ],
  cleaningHistory: [
    { id: 1, task: "Deep clean", by: "Sarah Khan", date: "1/13/2026" },
  ],
  completedMaintenance: [],
};

/* ─── Priority / Status badges ───────────────────────────── */
const PRIORITY_STYLES = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-orange-100 text-orange-600",
  Low: "bg-green-100 text-green-600",
};

const STATUS_STYLES = {
  Pending: "bg-amber-100 text-amber-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Completed: "bg-green-100 text-green-600",
};

/* ─── Reusable card wrapper ─────────────────────────────── */
const Card = ({ title, icon: Icon, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
    <div className="mb-4 flex items-center gap-2">
      <Icon className="text-blue-500" />
      <h2 className="font-semibold text-slate-800">{title}</h2>
    </div>
    {children}
  </div>
);

/* ─── Section components ─────────────────────────────────── */
const PropertyInfoCard = ({ beds, beddingConfig, occupancy }) => (
  <Card title="Property Information" icon={FiSettings}>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3">
        <div className="flex items-center gap-2 text-slate-500">
          <LuBed className="text-base" />
          <span className="text-xs font-medium">Number of Beds</span>
        </div>
        <p className="ml-6 font-semibold text-slate-800">{beds} Beds</p>
      </div>
      <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3">
        <div className="flex items-center gap-2 text-slate-500">
          <LuBed className="text-base" />
          <span className="text-xs font-medium">Bedding Configuration</span>
        </div>
        <p className="ml-6 font-semibold text-slate-800">{beddingConfig}</p>
      </div>
      <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-3">
        <div className="flex items-center gap-2 text-slate-500">
          <FiUsers className="text-base" />
          <span className="text-xs font-medium">Occupancy</span>
        </div>
        <p className="ml-6 font-semibold text-slate-800">{occupancy} People</p>
      </div>
    </div>
  </Card>
);

const AdminNotesCard = ({ notes }) => (
  <Card title="Admin Notes" icon={FiFileText}>
    <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">{notes}</p>
  </Card>
);

const ReferencePhotosCard = ({ photos }) => (
  <Card title="Reference Photos" icon={FiImage}>
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {photos.map((src, i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-lg bg-slate-100">
          <img
            src={src}
            alt={`Reference photo ${i + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </Card>
);

const MaintenanceIssuesCard = ({ issues }) => (
  <Card title="Current Maintenance Issues" icon={FiTool}>
    {issues.length === 0 ? (
      <p className="text-sm text-slate-400">No current maintenance issues.</p>
    ) : (
      <ul className="space-y-3">
        {issues.map((issue) => (
          <li
            key={issue.id}
            className="rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-slate-800">{issue.title}</p>
                <p className="mt-0.5 text-sm text-slate-500">
                  {issue.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${PRIORITY_STYLES[issue.priority]}`}
                >
                  {issue.priority}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${STATUS_STYLES[issue.status]}`}
                >
                  {issue.status}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
              <FiClock />
              <span>{issue.date}</span>
            </div>
          </li>
        ))}
      </ul>
    )}
  </Card>
);

const CleaningHistoryCard = ({ history }) => (
  <Card title="Cleaning History" icon={FiCheckCircle}>
    {history.length === 0 ? (
      <p className="text-sm text-slate-400">No cleaning history yet.</p>
    ) : (
      <ul className="space-y-3">
        {history.map((entry) => (
          <li
            key={entry.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <div>
              <p className="font-semibold text-slate-800">{entry.task}</p>
              <p className="mt-0.5 text-sm text-slate-500">By {entry.by}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <FiClock />
              <span>{entry.date}</span>
            </div>
          </li>
        ))}
      </ul>
    )}
  </Card>
);

const CompletedMaintenanceCard = ({ items }) => (
  <Card title="Completed Maintenance" icon={FiCheckCircle}>
    {items.length === 0 ? (
      <p className="text-sm text-slate-400">No completed maintenance yet.</p>
    ) : (
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <p className="font-semibold text-slate-800">{item.title}</p>
          </li>
        ))}
      </ul>
    )}
  </Card>
);

/* ─── Page ───────────────────────────────────────────────── */
const BuildingFlatDetails = () => {
  const flat = MOCK_FLAT;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <FlatDetailsHeader
        flatName={flat.name}
        buildingName={flat.buildingName}
        city={flat.city}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <PropertyInfoCard
          beds={flat.beds}
          beddingConfig={flat.beddingConfig}
          occupancy={flat.occupancy}
        />
        <AdminNotesCard notes={flat.adminNotes} />
        <ReferencePhotosCard photos={flat.referencePhotos} />
        <MaintenanceIssuesCard issues={flat.maintenanceIssues} />
        <CleaningHistoryCard history={flat.cleaningHistory} />
        <CompletedMaintenanceCard items={flat.completedMaintenance} />
      </div>
    </div>
  );
};

export default BuildingFlatDetails;
