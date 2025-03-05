// src/components/NewEntry.js
import { useState, useEffect } from "react";

// const addEntry = () => {
//     const entry = newEntry();
//     <button onClick={addEntry}>Add Entry</button>


// };

function AddEntry({isAddModalOpen,setIsAddModalOpen}) {
    const [newEntry, setNewEntry] = useState([
        {
            title: "",
            date: "",
            image: "",
            content: ""
        }
    ]);

    const handleChange = (e) => {
        setEntryFields({
          ...newEntry,
          [e.target.name]: e.target.value,
        });
      };

    const submitForm = (e) =>{
        e.preventDefault();
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
            <div className="bg-[rgba(202,202,202,0.7)] w-full h-full max-h-full overflow-y-scroll p-3 rounded-2xl">
                <i className="fas fa-times-circle text-red-800 absolute -top-[7px] -right-[7px]
                text-3xl cursor-pointer" onClick={()=> setIsAddModalOpen(false)}></i>
                <form onSubmit={submitForm}>
                            <div key={newEntry.date}>
                                 <input
                                    name="Title"
                                    placeholder="Enter a title for today's entry"
                                    value={newEntry.title}
                                    onChange={handleChange}
                                />
                                <input
                                    name="date"
                                    placeholder='Enter a date for this entry'
                                    value={newEntry.date}
                                    onChange={handleChange}
                                />
                                <input
                                    name="image"
                                    placeholder='Image'
                                    value={newEntry.image}
                                    onChange={handleChange}
                                />
                                <input
                                    name="content"
                                    placeholder="Dear diary... "
                                    value={newEntry.content}
                                    onChange={handleChange}
                                />
                                <button type="submit">Enter</button>
                            </div>
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
