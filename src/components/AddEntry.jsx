// src/components/NewEntry.js
import { useState, useEffect } from "react";
import newEntry from "./NewEntry";

const addEntry = () => {
    const entry = newEntry();
    console.log(entry);

    return (
        <button 
            className="bg-[#005477] text-white py-2 px-4 rounded pointer hover:bg-[#005477]" 
            type="submit" 
            onClick={addEntry}
            >Add Entry
        </button>;
    )
};

export default addEntry;
