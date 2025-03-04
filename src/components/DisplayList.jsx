// src/components/DiaryList.js
import { useState, useEffect } from "react";
import ShowDetail from "./ShowDetail"

const DiaryList = () => {
  const [entries, setEntries] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [selectedEntry,setSelectedEntry] = useState({
    title: "",
    date: "",
    image:"",
    content:""
  });

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEntries(storedEntries);
  }, []);

  const handleClickModal = (diaryDate) =>{
    setModalOpen(true);
    const selectedDiary = entries.find(entry => entry.date == diaryDate);
    setSelectedEntry(selectedDiary);
  }
 
  // Sort entries by date (most recent first)
  const sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-4" >
      {sortedEntries.length === 0 ? (
        <p className="text-center text-lg text-[#005172] my-8">No diary entries yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-[14%]">
          {sortedEntries.map((entry) => (
            <div className="card border border-[#00514f] p-4 rounded-lg shadow-sm hover:shadow-lg 
            transition-shadow duration-300" key={entry.date}>
              <h2 className="text-xl text-center font-semibold text-[#00514f]">{entry.title}</h2>
              <p className="text-[#005477]">{new Date(entry.date).toLocaleDateString()}</p>
              <div>
              <i className="fa-solid fa-circle-info cursor-pointer text-[#00514f] text-xl" 
              onClick={() => handleClickModal(entry.date)}></i>
              </div>
            </div>
          ))}
        </div>
      )}

      <ShowDetail isOpen={modalOpen} setModalOpen={setModalOpen} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry}/>
    </div>
  );
};

export default DiaryList;
