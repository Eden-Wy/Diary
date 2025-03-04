
function ShowDetail({isOpen,selectedEntry,setSelectedEntry,setModalOpen}) {
  

  const handleClickCloseModal = () => {
    setModalOpen(false);
    setSelectedEntry({
      title:"",
      date:"",
      image:"",
      content:""
    });

  }


    return (
      <div className= {`modal-container fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
      rounded-3xl border-2 shadow-md border-[#fff6e0] p-3 ${isOpen ? "opened-modal" : "closed-modal"}`}>
      <div className="bg-[rgba(202,202,202,0.7)] w-full h-full p-3 rounded-2xl">
        <i className="fas fa-times-circle text-red-800 absolute -top-[7px] -right-[7px]
        text-3xl cursor-pointer" onClick={() => handleClickCloseModal()}></i>
        <h2 className="text-center text-2xl font-bold text-[#886300]">{selectedEntry.title}</h2>
        <div className="text-sm text-[#4d3800]">
          05.02.2025{selectedEntry.date}
        </div>
        <div className="m-3 mx-auto">
          <img className="max-w-full h-full" alt=""/>
        </div>
        <div className="text-justify m-3 text-[#4d3800]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      
      </div>
    )
  
}
 
export default ShowDetail