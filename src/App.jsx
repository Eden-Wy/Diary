import { useState,useEffect} from 'react'
import ShowDetail from "./components/ShowDetail"
import DisplayList from "./components/DisplayList";

function App() {
  const entries = localStorage.getItem("diaryEntries") || [];
  const [count, setCount] = useState(0)
  // Razi codes
  const [modalOpen,setModalOpen] = useState(false);
  const [diaryDetail,setDiaryDetail] = useState({
    title: "",
    date: "",
    image:"",
    content:""
  });

  const handleClickModal = (diaryDate) =>{
    // setModalOpen(true); 
  //   useEffect(() => {
  //   const diaryList = JSON.parse(localStorage.getItem(diaries)) || [];
  //   const selectedDiary = diaryList.filter(diary => diary.date == diaryDate);
  //   setDiaryDetail(selectedDiary);
  // }, [diaryDate]);
  }
  // razi codes
  console.log(entries);

  return (
    <>
      <h1 className="text-4xl text-blue-600 font-bold text-center mb-6" style={{ fontFamily: "'Bebas Neue', cursive" }}>
        Personal Diary
      </h1>
      <DisplayList />
      {/* Razieh codes */}
      <div>
      <i className="fa-solid fa-circle-info cursor-pointer text-[#00514f] text-xl" 
      onClick={() => setModalOpen(true)}></i>
      </div>
      <ShowDetail isOpen={modalOpen} setModalOpen={setModalOpen} diaryDetail={diaryDetail} setDiaryDetail={setDiaryDetail}/>
      {/* Razieh code end */}
    </>
  )
}

export default App
