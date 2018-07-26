import React from "react";
import ReactDOM from "react-dom";
import { Provider, Subscribe, Container } from "unstated";
import "./styles.css";

////////////////
class NumberContainer extends Container {
  state = {
    number: null
  };

  onClick = number => this.setState({ number });
}
////////////////

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1> Unstated </h1>
          <hr />
          <ChildA />
          <ChildB />
          <ChildC />
        </div>
      </Provider>
    );
  }
}

class ChildA extends React.Component {
  render() {
    console.log("render ChildA");
    return (
      <Subscribe to={[NumberContainer]}>
        {container => (
          <div>
            <h1>ChildA</h1>

            <div>{container.state.number}</div>

            <button onClick={() => container.onClick(Math.random())}>
              hey
            </button>
          </div>
        )}
      </Subscribe>
    );
  }
}

function ChildB({ number }) {
  console.log("render ChildB");
  return (
    <Subscribe to={[NumberContainer]}>
      {({ state }) => (
        <div>
          <h1>ChildB</h1>

          <span>{state.number}</span>
        </div>
      )}
    </Subscribe>
  );
}

class ChildC extends React.Component {
  render() {
    console.log("render ChildC");
    return <h1>ChildC</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
