import { useMemo, useState } from "react";
import MiniAdminHeader from "./components/MiniAdminHeader";
import MiniAdminTable from "./components/MiniAdminTable";

const MOCK_MAINTENANCE_WORKERS = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  memberNo: "0123456",
  name: "Sarah Khan",
  phone: "0123456789",
  email: "sarah.khan@email.com",
  addedOn: "12/8/2024",
}));

const MaintenanceWorker = () => {
  const [search, setSearch] = useState("");

  const filteredWorkers = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return MOCK_MAINTENANCE_WORKERS;
    }

    return MOCK_MAINTENANCE_WORKERS.filter((worker) =>
      [worker.memberNo, worker.name, worker.phone, worker.email].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <MiniAdminHeader
        search={search}
        onSearch={setSearch}
        onCreate={() => console.log("Add maintenance worker")}
        subtitle="Manage your cleaners & staff"
        listTitle="All Maintenance Worker list"
        buttonLabel="Add Maintenance Worker"
      />

      <MiniAdminTable admins={filteredWorkers} emptyLabel="maintenance workers" />
    </main>
  );
};

export default MaintenanceWorker;
