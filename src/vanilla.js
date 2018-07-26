// @flow
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component<{}, { number: number }> {
  state = {
    number: null
  };

  onClick = number => this.setState({ number });

  render() {
    return (
      <div className="App">
        <h1> Vanilla </h1>
        <hr />
        <ChildA onClick={this.onClick} />
        <ChildB number={this.state.number} />
        <ChildC />
      </div>
    );
  }
}

class ChildA extends React.PureComponent<{
  onClick: (number: number) => void
}> {
  render() {
    console.log("render ChildA");
    return (
      <div>
        <h1>ChildA</h1>

        <button onClick={() => this.props.onClick(Math.random())}>hey</button>
      </div>
    );
  }
}

function ChildB({ number }: { number: number }) {
  console.log("render ChildB");
  return (
    <div>
      <h1>ChildB</h1>

      <span>{number}</span>
    </div>
  );
}

class ChildC extends React.PureComponent<{}> {
  render() {
    console.log("render ChildC");
    return <h1>ChildC</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
