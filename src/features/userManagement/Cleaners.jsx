import { useMemo, useState } from "react";
import MiniAdminHeader from "./components/MiniAdminHeader";
import CleanersTable from "./components/CleanersTable";

const MOCK_CLEANERS = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  memberNo: "0123456",
  memberName: "Sarah Khan",
  phoneNumber: "0123456789",
  email: "sarah.khan@email.com",
  location: "Bradford",
  tasksCompleted: 145,
}));

const Cleaners = () => {
  const [search, setSearch] = useState("");

  const filteredCleaners = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return MOCK_CLEANERS;
    }

    return MOCK_CLEANERS.filter((cleaner) =>
      [
        cleaner.memberNo,
        cleaner.memberName,
        cleaner.phoneNumber,
        cleaner.email,
        cleaner.location,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <MiniAdminHeader
        search={search}
        onSearch={setSearch}
        onCreate={() => console.log("Add cleaner")}
        subtitle="Manage your cleaners & staff"
        listTitle="All Cleaners list"
        buttonLabel="Add Cleaner"
      />

      <CleanersTable cleaners={filteredCleaners} />
    </main>
  );
};

export default Cleaners;
