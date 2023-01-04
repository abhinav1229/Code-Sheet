import "./styles.css";
import "./topic.css"
import "./question.css"
import Traker from "./Tracker";

export default function App() {
  if(!localStorage.getItem("userData")) {
    localStorage.setItem("userData", JSON.stringify({}));
  }
  return (
    <div className="App">
      <Traker />
    </div>
  );
}

