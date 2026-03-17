import { useState } from "react";
import AddPropertyModal from "./components/AddPropertyModal";
import BuildingFlatsHeader from "./components/BuildingFlatsHeader";
import FlatsTable from "./components/FlatsTable";

const MOCK_BUILDING = {
  name: "Conditioning House",
  city: "Bradford",
  propertyCount: 3,
};

const BuildingFlatsList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <div className="mx-auto w-full">
        <BuildingFlatsHeader
          name={MOCK_BUILDING.name}
          city={MOCK_BUILDING.city}
          propertyCount={MOCK_BUILDING.propertyCount}
          onAddProperty={() => setIsAddModalOpen(true)}
        />
        <FlatsTable />
      </div>

      <AddPropertyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </main>
  );
};

export default BuildingFlatsList;