import { Link } from "react-router-dom";
import "../CSS/main.css";

import Header from "./Header.js";

export default function MainPg({ infoOne }) {
  return (
    <div id="mainContainer">
      <nav class="links">
        <Link to="/"> Back to loader</Link>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
        <a href="#">Link 5</a>
      </nav>

      <div id="midDiv">
        <Header />
      </div>

      <div id="mainBody">
        <div id="mazda">
          <tr>
            <td>Name</td>
            <td></td>
          </tr>

          <tr>
            <td> </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td> </td>
          </tr>

          <tr>
            <td> </td>
            <td> </td>
          </tr>
        </div>
      </div>
    </div>
  );
}
