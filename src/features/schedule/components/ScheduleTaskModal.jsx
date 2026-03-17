import { useEffect, useRef, useState } from "react";
import { FiCalendar, FiClock, FiImage, FiPlus, FiUpload, FiX } from "react-icons/fi";

const CITIES = ["London", "Bradford", "Halifax", "Leeds"];
const BUILDINGS = ["Conditioning House", "Central House", "North Residence"];
const PROPERTIES = ["Flat 319", "Flat 201", "Flat 402"];
const STAFF = ["Sarah Khan", "John Thomas", "Maya Lee"];

const ScheduleTaskModal = ({ isOpen, onClose, onSubmit }) => {
  const inputRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    city: "",
    building: "",
    property: "",
    assignTo: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    return () => {
      photos.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [photos]);

  if (!isOpen) {
    return null;
  }

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const handlePhoto = (event) => {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    const nextImages = files.map((file, index) => ({
      id: `${file.name}-${index}-${Date.now()}`,
      file,
      preview: URL.createObjectURL(file),
    }));

    setPhotos((current) => [...current, ...nextImages]);
    event.target.value = "";
  };

  const addNote = () => {
    setNotes((current) => [...current, ""]);
  };

  const updateNote = (index, value) => {
    setNotes((current) => current.map((item, i) => (i === index ? value : item)));
  };

  const removeNote = (index) => {
    setNotes((current) => current.filter((_, i) => i !== index));
  };

  const removePhoto = (imageId) => {
    setPhotos((current) => {
      const target = current.find((image) => image.id === imageId);
      if (target) {
        URL.revokeObjectURL(target.preview);
      }

      return current.filter((image) => image.id !== imageId);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      ...form,
      noteList: notes.map((item) => item.trim()).filter(Boolean),
      photos: photos.map((image) => ({
        name: image.file.name,
        type: image.file.type,
        size: image.file.size,
      })),
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Schedule New Task"
      >
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-3xl font-bold text-slate-800">Schedule New Task</h2>
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
            multiple
            onChange={handlePhoto}
            className="hidden"
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-slate-500">City *</span>
              <select
                required
                value={form.city}
                onChange={update("city")}
                className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>Select city</option>
                {CITIES.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-medium text-slate-500">Building *</span>
              <select
                required
                value={form.building}
                onChange={update("building")}
                className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>Select building</option>
                {BUILDINGS.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-medium text-slate-500">Property *</span>
              <select
                required
                value={form.property}
                onChange={update("property")}
                className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>Select Property</option>
                {PROPERTIES.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-medium text-slate-500">Assign To *</span>
              <select
                required
                value={form.assignTo}
                onChange={update("assignTo")}
                className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>Select staff</option>
                {STAFF.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-medium text-slate-500">Date *</span>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={update("date")}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 pr-10 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
                <FiCalendar className="pointer-events-none absolute right-3 top-3.5 text-slate-400" />
              </div>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-medium text-slate-500">Time *</span>
              <div className="relative">
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={update("time")}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 pr-10 text-sm text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
                <FiClock className="pointer-events-none absolute right-3 top-3.5 text-slate-400" />
              </div>
            </label>
          </div>

          <section className="rounded-xl border border-slate-200 p-3 sm:p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-2">
                <FiImage className="text-slate-500" />
                Upload Reference Photos*
              </span>
            </h3>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex h-32 w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-blue-300 bg-blue-50/50 text-blue-500 transition hover:bg-blue-50"
            >
              <span className="text-center text-sm font-semibold">
                <FiUpload className="mx-auto mb-2 text-4xl" />
                Tap to Upload Photo
              </span>
            </button>

            {photos.length > 0 ? (
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {photos.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg border border-slate-200"
                  >
                    <img
                      src={image.preview}
                      alt="Reference preview"
                      className="h-24 w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(image.id)}
                      className="absolute right-1.5 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-slate-600 opacity-100 shadow-sm transition hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
                      aria-label="Remove image"
                    >
                      <FiX className="text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Notes / Instructions *</h3>

            {notes.map((note, index) => (
              <div key={index} className="relative">
                <textarea
                  value={note}
                  onChange={(event) => updateNote(index, event.target.value)}
                  rows={2}
                  placeholder="Add any special instructions..."
                  className="w-full rounded-md border border-red-100 bg-red-50 px-4 py-3 pr-10 text-lg text-slate-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
                <div className="absolute right-2 top-2">
                  <button
                    type="button"
                    onClick={() => removeNote(index)}
                    className="rounded p-1 text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
                    aria-label={`Remove note ${index + 1}`}
                  >
                    <FiX className="text-xs" />
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addNote}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-blue-300 bg-blue-50 px-4 text-sm font-semibold text-blue-500 transition hover:bg-blue-100"
            >
              <FiPlus />
              Add Note
            </button>
          </section>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
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
              Assign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleTaskModal;
