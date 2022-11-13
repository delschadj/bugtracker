import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getAuth } from "firebase/auth";
import { bugsColRef, users_colRef } from '../../firebase';
import { addDoc } from "firebase/firestore";

function AddIssue() {
  

  const navigate = useNavigate ();

  const [title, setTitle] = useState ("")
  const [description, setDescription] = useState ("")
  const [assignTo, setAssignTo] = useState ("")
  const [priority, setPriority] = useState ("")

  const [error, setError] = useState ("")

  const auth = getAuth();
  const user = auth.currentUser;

  console.log ("title:" + title)
  console.log ("description:" + description)
  console.log ("assignTo:" + assignTo)
  console.log ("priority:" + priority)

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try{
      // Object to paste
      const docAdd = ({ 
        title: title,
        description: description,
        assignTo: assignTo,
        priority: priority,
       })

      // Paste
      addDoc(bugsColRef, docAdd)
      alert ("Success!")
    }

    catch (e) {
      console.log (e.message)
    }
  }


  return (
    <div className="add-issue">
      <form>

      <label>
          Title

          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            type="text" 
            placeholder="Title" />

        </label>

        <label>
          Description
          <input 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            type="text" 
            placeholder="Description of Issue" />
        </label>

        <label>
          Assign To
          <select name="assignTo" onChange={(e) => setAssignTo(e.target.value)}>
            <option value="Ron">Ron</option>
            <option value="Morten">Morten</option>
            <option value="Sara">Sara</option>
            <option value="Divyansh">Divyansh</option>
          </select>
        </label>

        <label>
          Priority
          <select name="priority" onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Extra-High">Extra-High</option>
          </select>
        </label>

        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
