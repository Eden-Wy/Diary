// import { useState } from "react";
// import DisplayList from "./components/DisplayList";
// import AddEntry from "./components/AddEntry";

// function App() {
//   const entries = localStorage.getItem("diaryEntries") || [];
//   const [isAddModalOpen,setIsAddModalOpen] = useState(false);

//   return (
//     <>
//       <h1 className="text-4xl text-[#005477] font-bold text-center py-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
//         Personal Diary
//       </h1>
//       <button className="absolute top-[25px] right-[25px] bg-[#005477] rounded-sm p-2 text-[#ccc]
//       cursor-pointer" onClick={()=> setIsAddModalOpen(true)}>
//         Add Entry
//       </button>
//       <DisplayList />
//       <AddEntry isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
//     </>
//   )
// }

// export default App


import { useState } from "react";
import DisplayList from "./components/DisplayList";
import AddEntryModal from "./components/AddEntry";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("diaryEntries")) || []
  );

  const handleSave = (newEntry) => {
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1
        className="text-4xl text-[#005477] font-bold text-center py-5"
        style={{ fontFamily: "'Bebas Neue', cursive" }}
      >
        Personal Diary
      </h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto block"
        onClick={handleOpenModal}
      >
        Add New Entry
      </button>

      {/* Show AddEntryModal if showModal is true */}
      {showModal && (
        <AddEntryModal close={handleCloseModal} onSave={handleSave} />
      )}

      {/* Render entries */}
      <DisplayList entries={entries} />
    </>
  );
}

export default App;
