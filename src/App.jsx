import { useState } from 'react'
import DisplayList from "./components/DisplayList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const entries = localStorage.getItem("diaryEntries") || [];
  const [count, setCount] = useState(0)
  console.log(entries);

  return (
    <>
   <h1 className="text-4xl text-blue-600 font-bold text-center mb-6" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        Personal Diary
      </h1>
   <DisplayList />

    </>
  )
}

export default App
