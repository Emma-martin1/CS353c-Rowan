import "./styles.css";
import { useEffect, useState } from "react";
import ShowCards from "./ShowCards";

export default function App() {
  const [showFaction, setShowFaction] = useState("");

  return (
    <div className="back">
      <ol className="nav">
        <li className="navButton">HOME</li>
        <li className="navButton">SELECT CARDS</li>
        <li className="navButton">VIEW CARDS</li>
        <li className="navButton">ACCOUNT</li>
      </ol>
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "norse"
              ? setShowFaction("")
              : setShowFaction("norse")
          }
        ></div>
        {showFaction === "norse" && <ShowCards faction={showFaction} />}
      </div>
      {/* //end of row */}
      <hr />
      <div class="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "china"
              ? setShowFaction("")
              : setShowFaction("china")
          }
        ></div>
        {showFaction === "china" && <ShowCards faction={showFaction} />}
      </div>
      {/* //end of row */}
      <hr />
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "southamerica"
              ? setShowFaction("")
              : setShowFaction("southamerica")
          }
        ></div>
        {showFaction === "southamerica" && <ShowCards faction={showFaction} />}
      </div>
      {/* //end of row */}
      <hr />
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "greek"
              ? setShowFaction("")
              : setShowFaction("greek")
          }
        ></div>
        {showFaction === "greek" && <ShowCards faction={showFaction} />}
      </div>

      <hr />
      {/* //end of row */}
      <div className="row">
        <div
          className="card choose"
          onClick={() =>
            showFaction === "usa" ? setShowFaction("") : setShowFaction("usa")
          }
        ></div>
        {showFaction === "usa" && <ShowCards faction={showFaction} />}
      </div>
      {/* //end of row */}
    </div> //end of app div
  );
}
