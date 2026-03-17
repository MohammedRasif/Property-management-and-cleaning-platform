import { useMemo, useState } from "react";
import MiniAdminHeader from "./components/MiniAdminHeader";
import MiniAdminTable from "./components/MiniAdminTable";
import AddMiniAdminModal from "./components/AddMiniAdminModal";

const MOCK_MINI_ADMINS = Array.from({ length: 13 }, (_, index) => ({
	id: index + 1,
	memberNo: "0123456",
	name: "Sarah Khan",
	phone: "0123456789",
	email: "sarah.khan@email.com",
	addedOn: "12/8/2024",
}));

const MiniAdmin = () => {
	const [search, setSearch] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const filteredAdmins = useMemo(() => {
		const query = search.toLowerCase().trim();

		if (!query) {
			return MOCK_MINI_ADMINS;
		}

		return MOCK_MINI_ADMINS.filter((admin) =>
			[admin.memberNo, admin.name, admin.phone, admin.email].some((value) =>
				value.toLowerCase().includes(query)
			)
		);
	}, [search]);

	return (
		<main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
			<MiniAdminHeader
				search={search}
				onSearch={setSearch}
				onCreate={() => setIsModalOpen(true)}
			/>

			<MiniAdminTable admins={filteredAdmins} />

			<AddMiniAdminModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={(payload) => {
					console.log(payload);
					setIsModalOpen(false);
				}}
			/>
		</main>
	);
};

export default MiniAdmin;
