// src/components/NewEntry.js
import { useState, useEffect } from "react";

const addEntry = () => {
    const entry = newEntry();
    <button onClick={addEntry}>Add Entry</button>


};

function newEntry() {
    const [entryFields, setEntryFields] = useState([
        {
            title: "",
            date: "",
            imageURL: "",
            content: ""
        }
    ]);

    const handleChange = (e) => {
        setEntryFields({
          ...newEntry,
          [e.target.name]: e.target.value,
        });
      };

    return (
    <div className="newEntry">
      <form onSubmit={submit}>
        {entryFields.map((entry, index) => {
            return (
                <div key={index}>
                    <input
                        name="Title"
                        placeholder="Enter a title for today's entry"
                        value={entry.title}
                        onChange={handleChange}
                    />
                    <input
                        name="date"
                        placeholder='Enter a date for this entry'
                        value={entry.date}
                        onChange={handleChange}
                    />
                    <input
                        name="imageURL"
                        placeholder='Image URL'
                        value={entry.imageURL}
                        onChange={handleChange}
                    />
                    <input
                        name="content"
                        placeholder="Dear diary... "
                        value={entry.content}
                        onChange={handleChange}
                    />
                </div>
            )
        })}
     </form>
    </div>
    );
}

export default newEntry;
