
import React from "react";
import Header from "./Header";    
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//keep a function which cretes notes and we gonna pass a single note item into it and renders a custom  note component
//and which will return a note component which will have props
//this title and content props must be there is notes.js
//Whenever we want to loop through or map through a dynamic array we must have a key


function App(){
    return (
        <div>
        <Header />
        
        {notes.map ((noteItem) =>
        <Note
         key = {noteItem.key}
         title = {noteItem.title}   
         content = {noteItem.content}
        />
    )}

        <Footer />
    </div>
    );
}
 
export default App; 