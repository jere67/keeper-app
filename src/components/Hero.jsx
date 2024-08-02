import React from "react";

import notes from "./notes"
import Note from "./Note"

const Hero = () => {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
    </>
  );
}

export default Hero;