import "./storyEditor.css"
import React from "react";

export default function StoryEditor(){
    return(
        <div className="editor-container">
            <h2 className="title" placeholder="Story Title" contentEditable></h2>
            <hr/>
            <div className="editor" placeholder="Type your text" contentEditable></div>
        </div>
    );
}