// src/components/NewEntry.js
import { useState, useEffect } from "react";

// const addEntry = () => {
//     const entry = newEntry();
//     <button onClick={addEntry}>Add Entry</button>


// };

function AddEntry({isAddModalOpen,setIsAddModalOpen}) {
    const [newEntry, setNewEntry] = useState(
        {
            title: "",
            date: "",
            image: "",
            content: ""
        }
    );

    const [localStorageData,setLocalStoragedata] = useState([]);

    const handleChange = (e) => {
        setNewEntry({
          ...newEntry,
          [e.target.name]: e.target.value,
        });
      };

      useEffect(() => {
        const diaryList = JSON.parse(localStorage.getItem("diaryEntries")) || [];
        console.log(diaryList)
        },[]);

    const submitForm = (e) =>{
        e.preventDefault();
        if(!newEntry.title || !newEntry.date || !newEntry.image || !newEntry.content){
            alert("Please fill all the information and try again");
            return;
        }
        

        setNewEntry(
            {
                title: "",
                date: "",
                image: "",
                content: ""
            });
    }

    return (
        <>
            <div className= {`modal-container fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
                 rounded-3xl border-2 shadow-md border-[#fff6e0] p-3 ${isAddModalOpen ? "opened-modal" : "closed-modal"}`}>
            <div className="bg-[rgba(255,242,206,0.7)] w-full h-full max-h-full overflow-y-scroll p-13 rounded-2xl">
                <i className="fas fa-times-circle text-red-800 absolute -top-[7px] -right-[7px]
                text-3xl cursor-pointer bg-[white] rounded-3xl" onClick={()=> setIsAddModalOpen(false)}></i>
                <form onSubmit={submitForm} key={newEntry.date}>
                            <div>
                                 <input
                                    className="bg-[white] p-2 rounded-md mb-3"
                                    type="text"
                                    name="title"
                                    placeholder="Enter a title"
                                    value={newEntry.title}
                                    onChange={handleChange}
                                />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        name="date"
                                        placeholder='Enter a date for this entry'
                                        value={newEntry.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="image"
                                        placeholder='Image'
                                        value={newEntry.image}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="content"
                                        placeholder="Dear diary... "
                                        value={newEntry.content}
                                        onChange={handleChange}
                                    />
                                </div>
                               
                                <button className="bg-[#005477] rounded-sm p-2 text-[#ccc] cursor-pointer" type="submit">Enter</button>
                 </form>
            </div>
      
      </div>
        </>
    // <div className="newEntry">
    //   <form onSubmit={submit}>
    //     {entryFields.map((entry, index) => {
    //         return (
    //             <div key={index}>
    //                 <input
    //                     name="Title"
    //                     placeholder="Enter a title for today's entry"
    //                     value={entry.title}
    //                     onChange={handleChange}
    //                 />
    //                 <input
    //                     name="date"
    //                     placeholder='Enter a date for this entry'
    //                     value={entry.date}
    //                     onChange={handleChange}
    //                 />
    //                 <input
    //                     name="image"
    //                     placeholder='Image'
    //                     value={entry.imageURL}
    //                     onChange={handleChange}
    //                 />
    //                 <input
    //                     name="content"
    //                     placeholder="Dear diary... "
    //                     value={entry.content}
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //         )
    //     })}
    //  </form>
    // </div>
    )
}

export default AddEntry;
