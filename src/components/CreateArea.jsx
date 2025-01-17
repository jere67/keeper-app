import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

const CreateArea = (props) => {

  const [isExpanded, setExpanded] = useState(false);

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

  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && 
          <input
            name="title"
            onChange={handleNote}
            value={note.title}
            placeholder="Title"
          />
        }

        <textarea
          name="content"
          onClick={expand}
          onChange={handleNote}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
