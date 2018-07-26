import React from "react";
import { render } from "react-dom";
import { Provider, create, connect } from "mini-store";
import "./styles.css";

class App extends React.Component {
  store = create({
    number: null
  });

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <h1> Mini-store </h1>
          <hr />
          <ChildA />
          <ChildB />
          <ChildC />
        </div>
      </Provider>
    );
  }
}

@connect()
class ChildA extends React.Component {
  render() {
    console.log("render ChildA");
    return (
      <div>
        <h1>ChildA</h1>

        <button
          onClick={() => this.props.store.setState({ number: Math.random() })}
        >
          hey
        </button>
      </div>
    );
  }
}

@connect(state => ({ number: state.number }))
class ChildB extends React.Component {
  render() {
    console.log("render ChildB");

    return (
      <div>
        <h1>ChildB</h1>

        <span>{this.props.number}</span>
      </div>
    );
  }
}

class ChildC extends React.Component {
  render() {
    console.log("render ChildC");
    return <h1>ChildC</h1>;
  }
}

render(<App />, document.getElementById("root"));
