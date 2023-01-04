import React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";

function Question({ question, link, index, level}) {

  const [isCodeOpen, setCodeOpen] = useState(false);
  const [isGithubOpen, setGithubOpen] = useState(false);

  // Getting data from localStorage
  let userData = JSON.parse(localStorage.getItem("userData"));
  
  const [github, setGithubLink] = useState(userData["array" + index]["github"]);
  const [code, setCode] = useState(userData["array" + index]["code"]);

  function handleGithub() {
    userData["array" + index]["github"] = github;
    localStorage.setItem("userData", JSON.stringify(userData));
    setGithubOpen(false);
  }

  function handleCode() {
    userData["array" + index]["code"] = code;
    localStorage.setItem("userData", JSON.stringify(userData));
    if(code.length > 0) 
      setCodeOpen(false);
  }

  let solved = userData["array" + index]["code"].length>0 && userData["array" + index]["github"].length>0;

  
  
  return (
    <>
      <div className="questions fit-in">
        <div className="que-sec-1">
          <div> {index+1}. </div>
          <div>
            {" "}
            <a href={link} target="blank" style={{ textDecoration: "none" }} className={level + "-question question-title"}>
              {" "}
              {question}{" "}
            </a>{" "}
          </div>
        </div>
        <div className="que-sec-2">
          <div>
            {" "}
            <span className={solved ? "que-solved" : "que-unsolved"}>
              {" "}
              {solved ? <img src="https://img.icons8.com/ios-filled/50/40C057/checked-checkbox.png" height="35" /> : <img src="https://img.icons8.com/ios-filled/50/FA5252/multiply-2.png" height="35" />}{" "}
            </span>{" "}
          </div>
          <div>
            <span className={"code-solution"+ ((code)?" remove-opacity": " add-opacity")} onClick={() => setCodeOpen(true)}> <img src="https://img.icons8.com/pastel-glyph/64/22C3E6/code-file--v2.png" height="35" /> </span>
            
            <span className={"code-solution code-link"+ ((github)?" remove-opacity": " add-opacity")} onClick={() => setGithubOpen(github?false:true)}>
              { github ? <a href={github} target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "white"}}>
                <img src="https://img.icons8.com/glyph-neue/64/1A1A1A/github.png" height="35" />
              </a> : <img src="https://img.icons8.com/glyph-neue/64/1A1A1A/github.png" height="35"/>
              }
            </span>
          </div>
        </div>
      </div>

      <Modal show={isCodeOpen} onHide={() => setCodeOpen(!isCodeOpen)}>
        <Modal.Header closeButton>
          <Modal.Title>Write Your Code...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={10} onChange={(e)=>setCode(e.target.value)} value={code}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCodeOpen(false)}>Close</Button>
          <Button variant="success" onClick={() => handleCode()}>Save</Button>
        </Modal.Footer>
      </Modal>


      {/* Modal for GitHub Link */}

      <Modal show={isGithubOpen} onHide={() => setGithubOpen(!isGithubOpen)}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Github Link...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} onChange={(e)=>setGithubLink(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setGithubOpen(false)}>Close</Button>
          <Button variant="success" onClick={() => handleGithub()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Question;
