import { useState,useEffect} from 'react'
import ShowDetail from "./components/ShowDetail"

function App() {
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

  return (
    <>
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
