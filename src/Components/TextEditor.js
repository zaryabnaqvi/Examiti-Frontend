import React, { useEffect, useState } from "react";
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const TextEditor = ({ setData,data }) => {

    let [text,setText]=useState(data)
 var modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
    ]
 };

 var formats = [
    "header", "height", "bold", "italic", "strike",
    "underline",
    "list", "bullet", "indent",
    "link"
 ];

 const handleProcedureContentChange = (content) => {
    setText(content)
    setData(content);
    console.log("content---->", content);
 };

 useEffect(()=>{

 })

 return (
    <div className="flex justify-center items-center w-11/12 rounded-xl">
      <div className="w-full border-none rounded-xl overflow-hidden">
        <ReactQuill
          modules={modules}
          formats={formats}
          value={text}
          placeholder="Write your content here..."
          onChange={handleProcedureContentChange}
          style={{
            background: "white",
            aspectRatio: "20/9",
            borderRadius: "20px",
            border: "none",
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#333"
          }}
        />
      </div>
    </div>
 );
};

export default TextEditor;
