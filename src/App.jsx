import { useState } from "react";
import DisplayList from "./components/DisplayList";
import AddEntry from "./components/AddEntry";

function App() {
  const entries = localStorage.getItem("diaryEntries") || [];
  const [isAddModalOpen,setIsAddModalOpen] = useState(false);

  return (
    <>
      <h1 className="text-4xl text-[#005477] font-bold text-center py-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        Personal Diary
      </h1>
      <button className="absolute top-[25px] right-[25px] bg-[#005477] rounded-sm p-2 text-[#ccc]
      cursor-pointer" onClick={()=> setIsAddModalOpen(true)}>
        Add Entry
      </button>
      <DisplayList />
      <AddEntry isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
    </>
  )
}

export default App
