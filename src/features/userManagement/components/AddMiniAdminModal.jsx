import { useEffect, useRef, useState } from "react";
import { FiImage, FiX } from "react-icons/fi";

const AREAS = ["Bradford", "Halifax", "Leeds"];

const AddMiniAdminModal = ({ isOpen, onClose, onSubmit }) => {
  const inputRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    personalEmail: "",
    city: "",
    state: "",
    fullAddress: "",
    loginEmail: "",
    initialPassword: "",
    area: "",
  });

  useEffect(() => {
    return () => {
      if (photo?.preview) {
        URL.revokeObjectURL(photo.preview);
      }
    };
  }, [photo]);

  if (!isOpen) {
    return null;
  }

  const updateField = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setPhoto({
      file,
      preview: URL.createObjectURL(file),
    });
    setPhotoError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!photo) {
      setPhotoError("Photo is required.");
      return;
    }

    onSubmit({
      ...form,
      photo: photo
        ? {
            name: photo.file.name,
            size: photo.file.size,
            type: photo.file.type,
          }
        : null,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Add New Mini Admin"
      >
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Add New Mini Admin</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
            aria-label="Close modal"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={`mx-auto flex h-32 w-44 items-center justify-center overflow-hidden rounded-lg border border-dashed bg-blue-50/40 text-blue-500 transition hover:bg-blue-50 ${
              photoError ? "border-red-300" : "border-blue-300"
            }`}
          >
            {photo ? (
              <img src={photo.preview} alt="Mini admin" className="h-full w-full object-cover" />
            ) : (
              <span className="text-center text-sm font-semibold leading-tight">
                <FiImage className="mx-auto mb-2 text-4xl" />
                Upload Photo JPG
              </span>
            )}
          </button>

          {photoError ? (
            <p className="text-center text-xs font-medium text-red-500">{photoError}</p>
          ) : null}

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Personal Information</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" required value={form.fullName} onChange={updateField("fullName")} placeholder="Full Name*" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              <input type="email" required value={form.personalEmail} onChange={updateField("personalEmail")} placeholder="Email*" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Address Information</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" required value={form.city} onChange={updateField("city")} placeholder="City" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              <input type="text" required value={form.state} onChange={updateField("state")} placeholder="State/Province" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
            </div>
            <textarea required value={form.fullAddress} onChange={updateField("fullAddress")} rows={3} placeholder="Full Address" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">User Log In Information</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="email" required value={form.loginEmail} onChange={updateField("loginEmail")} placeholder="Email" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              <input type="password" required value={form.initialPassword} onChange={updateField("initialPassword")} placeholder="Initial Password" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Assign Area</h3>
            <select
              required
              value={form.area}
              onChange={updateField("area")}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Select one location
              </option>
              {AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </section>

          <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Add Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMiniAdminModal;
