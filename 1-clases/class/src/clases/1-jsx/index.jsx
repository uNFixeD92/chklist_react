import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  render() {
    return (
      <fragment>
        <h2>que es jsx</h2>
        <p>JSX no es un requisito para usar React</p>
        <a href="https://es.reactjs.org/docs/jsx-in-depth.html">
          {" "}
          jsx en profundidad
        </a>
        <p>
          react sin JSX es igual a <b>React.createElement</b>{" "}
        </p>

        {React.createElement("div", null, `Hello ${this.props.toWhat}`)}
      </fragment>
    );
  }
}

// ReactDOM.render(
//   React.createElement(Index, { toWhat: "World" }, null),
//   document.getElementById("root")
// );

export default Index;
