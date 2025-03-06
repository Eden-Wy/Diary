import { useState } from "react";

// Function to retrieve stored diary entries
const getEntries = () => {
  return JSON.parse(localStorage.getItem("diaryEntries")) || [];
};

// Function to save a new entry
const saveEntry = (entry) => {
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem("diaryEntries", JSON.stringify(entries));
};

const AddEntryModal = ({ close, onSave }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!id || !title || !date || !image || !content) {
      alert("Please fill in all fields!");
      return;
    }

    // Prevent duplicate IDs
    const existingEntries = getEntries();
    if (existingEntries.some((entry) => entry.id === id)) {
      alert("ID already exists! Please use a unique ID.");
      return;
    }

    const newEntry = { id, title, date, image: preview, content };
    saveEntry(newEntry);
    onSave(newEntry);

    window.location.reload(); // Refresh the page after saving (optional)

    close();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Entry</h2>

        <input
          className="w-full p-2 border mb-2"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="w-full p-2 border mb-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full p-2 border mb-2"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Image Upload Field */}
        <input
          className="w-full p-2 border mb-2"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Preview Image */}
        {preview && (
          <img src={preview} alt="Preview" className="w-full h-40 object-cover mb-2 rounded" />
        )}

        <textarea
          className="w-full p-2 border mb-2"
          rows="4"
          placeholder="Your diary entry..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div className="flex justify-end gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
            Save
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
