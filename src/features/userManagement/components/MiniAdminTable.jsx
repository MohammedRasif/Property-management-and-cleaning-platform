import { FiMoreVertical } from "react-icons/fi";

const MiniAdminRow = ({ admin }) => (
  <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
    <td className="px-4 py-3 text-sm text-slate-500">{admin.memberNo}</td>
    <td className="px-4 py-3 text-sm font-medium text-slate-700">{admin.name}</td>
    <td className="px-4 py-3 text-sm text-slate-500">{admin.phone}</td>
    <td className="px-4 py-3 text-sm text-slate-500">{admin.email}</td>
    <td className="px-4 py-3 text-sm text-slate-500">{admin.addedOn}</td>
    <td className="px-4 py-3 text-sm text-slate-500">
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-slate-100"
        aria-label={`Actions for ${admin.name}`}
      >
        <FiMoreVertical />
      </button>
    </td>
  </tr>
);

const MiniAdminCard = ({ admin }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-2 flex items-start justify-between gap-2">
      <div>
        <p className="font-semibold text-slate-800">{admin.name}</p>
        <p className="text-xs text-slate-400">#{admin.memberNo}</p>
      </div>
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-slate-100"
        aria-label={`Actions for ${admin.name}`}
      >
        <FiMoreVertical />
      </button>
    </div>

    <dl className="grid grid-cols-1 gap-y-2 text-xs sm:grid-cols-2 sm:gap-x-4">
      <div>
        <dt className="text-slate-400">Phone Number</dt>
        <dd className="font-medium text-slate-600">{admin.phone}</dd>
      </div>
      <div>
        <dt className="text-slate-400">Added On</dt>
        <dd className="font-medium text-slate-600">{admin.addedOn}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-slate-400">Email</dt>
        <dd className="font-medium text-slate-600">{admin.email}</dd>
      </div>
    </dl>
  </article>
);

const MiniAdminTable = ({ admins, emptyLabel = "mini admins" }) => {
  if (admins.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white py-20 text-slate-400">
        <p className="text-lg font-semibold">No {emptyLabel} found</p>
        <p className="mt-1 text-sm">Try another name, email, or phone</p>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-sm md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50">
              {["Member No", "Name", "Phone Number", "Email", "Added On", "Actions"].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <MiniAdminRow key={admin.id} admin={admin} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {admins.map((admin) => (
          <MiniAdminCard key={admin.id} admin={admin} />
        ))}
      </div>
    </>
  );
};

export default MiniAdminTable;
