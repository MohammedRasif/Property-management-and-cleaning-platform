import { useState } from "react";
import HouseMaintenanceDetailsHeader from "./components/HouseMaintenanceDetailsHeader";
import MaintenanceIssuesTable from "./components/MaintenanceIssuesTable";

const MOCK_ISSUES = [
  { id: 1,  title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "Done",        reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 2,  title: "Loose tap",           description: "Kitchen tap is loose",               date: "12.01.26", property: "Flat 319", priority: "High", status: "Pending",     reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 3,  title: "Door hinge squeaking",description: "Main door hinge needs oiling",       date: "12.01.26", property: "Flat 319", priority: "High", status: "In Progress", reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 4,  title: "Leaking shower",      description: "Shower head leaking",               date: "12.01.26", property: "Flat 319", priority: "High", status: "Pending",     reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 5,  title: "Broken window latch", description: "Bedroom window latch broken",        date: "12.01.26", property: "Flat 319", priority: "High", status: "Pending",     reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 6,  title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "Pending",     reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 7,  title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "Pending",     reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 8,  title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "In Progress", reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 9,  title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "In Progress", reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 10, title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "In Progress", reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 11, title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "In Progress", reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 12, title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "In Progress", reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
  { id: 13, title: "Broken lamp",         description: "Ceiling lamp not working in bedroom", date: "12.01.26", property: "Flat 319", priority: "High", status: "Done",        reportedBy: "Sarah Khan", solvedBy: "Sarah Khan" },
];

const openStatuses = ["Pending", "In Progress"];

const HouseMaintenenceDetails = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch]     = useState("");

  const openCount = MOCK_ISSUES.filter((i) => openStatuses.includes(i.status)).length;

  const filtered = MOCK_ISSUES.filter((issue) => {
    const matchesTab    = activeTab === "All" || issue.status === activeTab;
    const matchesSearch = issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.property.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <HouseMaintenanceDetailsHeader
        buildingName="Conditioning House"
        openCount={openCount}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        search={search}
        onSearch={setSearch}
      />
      <MaintenanceIssuesTable issues={filtered} />
    </main>
  );
};

export default HouseMaintenenceDetails;