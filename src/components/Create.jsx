import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  //const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  console.log(noteTitle,note);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var addUser = { noteTitle, note};
    console.log(addUser);

    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });

    const result = await response.json(); //your data should be added to the backend 
    //but to check if everything's working fine-->
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setNoteTitle("");
      setNote("");
      //setAge(0);
      setError("");
      navigate("/read");
    }
  };

  return (
    <div class="container my-2">
      <h1 class="h1 text-center">Create New Note</h1>

      {error && <div class="alert alert-danger"> {error} </div>}
      <form classnoteTitle="form" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Add Note</label>
          <input
            type="note"
            class="form-control"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        {/* <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="number"
            class="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;