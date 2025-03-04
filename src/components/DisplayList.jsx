// src/components/DiaryList.js
import { useState, useEffect } from "react";

const DiaryList = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEntries(storedEntries);
  }, []);

  // Sort entries by date (most recent first)
  const sortedEntries = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-[url('image/cardsBackground.png')] min-h-screen p-4" >
      {sortedEntries.length === 0 ? (
        <p className="text-center text-gray-500">No diary entries yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedEntries.map((entry) => (
            <div className="border p-4 rounded-lg cursor-pointer shadow-sm  hover:shadow-lg transition-shadow bg-gray-200 duration-300">
              <h2 className="text-xl font-semibold">{entry.title}</h2>
              <p className="text-gray-500">{new Date(entry.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}

  
    </div>
  );
};

export default DiaryList;
