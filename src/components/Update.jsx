import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [noteFTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState("");
  //const [age, setAge] = useState(0);

  const [error, setError] = useState();
  const { id } = useParams();
  console.log(id);

   const navigate = useNavigate();

  //receving single user data
  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();

    if (!response.ok){
        console.log(result.error);
        setError(result.error);
    }
    if (response.ok){
        setError("");
        console.log("Updated user ", result);
        setNoteTitle(result.noteTitle);
        setNote(result.note);
        //setAge(result.age);
    }
  };

  //passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { noteFTitle, note};
    console.log(updatedUser);
    const response = await fetch(`http://localhost:5000/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("updated result..", result);
      setError("");
      navigate("/read");
    }
    if (!response.ok) {
      console.log(response.error);
      setError(response.error);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div class="container my-2">
      <h1 class="h1 text-center">Edit Data</h1>
      {/* {error && <div class="alert alert-danger"> {error} </div>} */}
      <form className="form" onSubmit={handleUpdate}>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            value={noteFTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Add Note</label>
          <input
            type="text"
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
        <button type="submit" class="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;