import React from "react";
import ReactDOM from "react-dom";
let d = new Date();
let year = d.getFullYear();
function Foot() {
  return (
    <footer>
      <p>Copyright {year}</p>
    </footer>
  );
}
export default Foot;
