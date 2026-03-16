import { useState } from "react";
import BuildingCardGrid from "./components/BuildingCardGrid";
import AddBuildingModal from "./components/AddBuildingModal";
import BuildingsHeader from "./components/BuildingsHeader";

const Buildings = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <div className="mx-auto w-full">
        <BuildingsHeader onAddBuilding={() => setIsAddModalOpen(true)} />
        <BuildingCardGrid />
      </div>

      <AddBuildingModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </main>
  );
};

export default Buildings;