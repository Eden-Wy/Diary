// src/components/NewEntry.js
import { useState, useEffect } from "react";
  

  const Entry = () => {
    const [entry, setEntry] = useState({
      title: '',
      date: '',
      imageURL: '',
      content: '',
    });
  
    const handleChange = (e) => {
      setEntry({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <>
        <label>
          Title:
          <input
            title="title"
            value={form.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last name:
          <input name="lastName" value={form.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <br />
        <textarea name="message" value={form.message} onChange={handleChange} />
        <p>
          {form.firstName} {form.lastName} {form.email} {form.message}
        </p>
      </>
    );
  };
  

  

export default Entry;