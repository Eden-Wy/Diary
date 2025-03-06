// // src/components/NewEntry.js
// import { useState, useEffect } from "react";

// // const addEntry = () => {
// //     const entry = newEntry();
// //     <button onClick={addEntry}>Add Entry</button>


// // };

// function AddEntry({isAddModalOpen,setIsAddModalOpen}) {
//     const [newEntry, setNewEntry] = useState([
//         {
//             title: "",
//             date: "",
//             image: "",
//             content: ""
//         }
//     ]);

//     const handleChange = (e) => {
//         setEntryFields({
//           ...newEntry,
//           [e.target.name]: e.target.value,
//         });
//       };

//     const submitForm = (e) =>{
//         e.preventDefault();
//         setNewEntry(
//             {
//                 title: "",
//                 date: "",
//                 image: "",
//                 content: ""
//             });
//     }

//     return (
//         <>
//             <div className= {`modal-container fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
//                  rounded-3xl border-2 shadow-md border-[#fff6e0] p-3 ${isAddModalOpen ? "opened-modal" : "closed-modal"}`}>
//             <div className="bg-[rgba(202,202,202,0.7)] w-full h-full max-h-full overflow-y-scroll p-3 rounded-2xl">
//                 <i className="fas fa-times-circle text-red-800 absolute -top-[7px] -right-[7px]
//                 text-3xl cursor-pointer" onClick={()=> setIsAddModalOpen(false)}></i>
//                 <form onSubmit={submitForm}>
//                             <div key={newEntry.date}>
//                                  <input
//                                     name="Title"
//                                     placeholder="Enter a title for today's entry"
//                                     value={newEntry.title}
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     name="date"
//                                     placeholder='Enter a date for this entry'
//                                     value={newEntry.date}
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     name="image"
//                                     placeholder='Image'
//                                     value={newEntry.image}
//                                     onChange={handleChange}
//                                 />
//                                 <input
//                                     name="content"
//                                     placeholder="Dear diary... "
//                                     value={newEntry.content}
//                                     onChange={handleChange}
//                                 />
//                                 <button type="submit">Enter</button>
//                             </div>
//                  </form>
//             </div>
      
//       </div>
//         </>
//     // <div className="newEntry">
//     //   <form onSubmit={submit}>
//     //     {entryFields.map((entry, index) => {
//     //         return (
//     //             <div key={index}>
//     //                 <input
//     //                     name="Title"
//     //                     placeholder="Enter a title for today's entry"
//     //                     value={entry.title}
//     //                     onChange={handleChange}
//     //                 />
//     //                 <input
//     //                     name="date"
//     //                     placeholder='Enter a date for this entry'
//     //                     value={entry.date}
//     //                     onChange={handleChange}
//     //                 />
//     //                 <input
//     //                     name="image"
//     //                     placeholder='Image'
//     //                     value={entry.imageURL}
//     //                     onChange={handleChange}
//     //                 />
//     //                 <input
//     //                     name="content"
//     //                     placeholder="Dear diary... "
//     //                     value={entry.content}
//     //                     onChange={handleChange}
//     //                 />
//     //             </div>
//     //         )
//     //     })}
//     //  </form>
//     // </div>
//     )
// }

// export default AddEntry;



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

    window.location.reload(); //  Refresh the page after saving (optional)

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
