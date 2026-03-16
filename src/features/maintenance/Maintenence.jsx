import { useState } from "react";
import { useNavigate } from "react-router";
import MaintenanceBuildingCard from "./components/MaintenanceBuildingCard";
import MaintenanceHeader from "./components/MaintenanceHeader";

const MOCK_BUILDINGS = [
  { id: 1, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80", highPriority: 2, pendingCount: 1, status: "Pending" },
  { id: 2, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80", highPriority: 2, pendingCount: 1, status: "In Progress" },
  { id: 3, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80", highPriority: 2, pendingCount: 1, status: "Done" },
  { id: 4, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80", highPriority: 2, pendingCount: 1, status: "Pending" },
  { id: 5, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80", highPriority: 2, pendingCount: 1, status: "In Progress" },
  { id: 6, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80", highPriority: 2, pendingCount: 1, status: "Pending" },
  { id: 7, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80", highPriority: 2, pendingCount: 1, status: "Done" },
  { id: 8, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=80", highPriority: 2, pendingCount: 1, status: "In Progress" },
  { id: 9, name: "Conditioning House", city: "Bradford", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80", highPriority: 2, pendingCount: 1, status: "Pending" },
];

const Maintenence = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = MOCK_BUILDINGS.filter((b) => {
    const matchesTab = activeTab === "All" || b.status === activeTab;
    const matchesSearch = b.city.toLowerCase().includes(search.toLowerCase()) ||
      b.name.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <MaintenanceHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        search={search}
        onSearch={setSearch}
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-400">
          <p className="text-lg font-semibold">No results found</p>
          <p className="mt-1 text-sm">Try adjusting your search or filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((building) => (
            <MaintenanceBuildingCard
              key={building.id}
              building={building}
              onViewDetails={(id) => navigate(`/maintenance/${id}`)}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Maintenence;