import React from "react";
import { useState, useEffect } from "react";
import Question from "./Question";

export default function Topics({ topic, data }) {
  const [open, setOpen] = useState(false);
  
  


  let userData = JSON.parse(localStorage.getItem("userData"));
  // userData['1']
  return (
    <div className="container-wrapper">
      <button
        onClick={() => setOpen(!open)}
        style={
          open
            ? {
                borderRadius: "7px 7px 0 0",
                backgroundColor: "unset",
                color: "white"
              }
            : { borderRadius: "7px" }
        }
      >
        {" "}
        {topic}{" "}
      </button>
      {open &&
        data.map((que, index) => {
          let questionLocalData = {
            status: false, 
            code: "", 
            github: ""
          };
          if(userData[topic.split(' ')[0] + index]) {
            questionLocalData.status = userData[topic.split(' ')[0] + index].status;
            questionLocalData.code = userData[topic.split(' ')[0] + index].code;
            questionLocalData.github = userData[topic.split(' ')[0] + index].github;  
          } else {
            userData[topic.split(' ')[0] + index] = questionLocalData; 
          }
          
          localStorage.setItem("userData", JSON.stringify(userData))
          return (
            <Question
              question={que.question}
              solved={que.solved}
              link={que.link}
              github={que.github}
              level = {que.level}
              key={index}
              index = {index}
            />
          );
        })}
    </div>
  );
}
