
import DisplayList from "./components/DisplayList";

function App() {
  const entries = localStorage.getItem("diaryEntries") || [];

  return (
    <>
      <h1 className="text-4xl text-[#005477] font-bold text-center py-5" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        Personal Diary
      </h1>
      <AddEntry />
      <DisplayList />
    </>
  )
}

export default App
