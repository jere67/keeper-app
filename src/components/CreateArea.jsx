import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleNote = (event) => {
    const {name, value} = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    })
  }

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleNote}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleNote}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
