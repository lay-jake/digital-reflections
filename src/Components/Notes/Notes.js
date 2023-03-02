import { useState } from "react"
import NotesModal from "./NotesModal";

export default function Notes(){

    const [notes,setNote] = useState([]);

    const addNewNote = (note) =>{
        setNote([...note, {title:note.title,note:note.text}])
    }

    if(notes.length > 0){
        return(
            notes.map( (note) =>{
                return(
                <>
                <div key={note.title}>
                <h1>{note.title}</h1>
                <p>{note.text}</p>
                </div>
                </>
            )})
        )

    } else{

    return(
        <>
        <NotesModal/>
        </>

    )
    }
}