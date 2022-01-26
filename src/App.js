import { Component, useState } from "react";
import "./styles.css";

export default function App() {
  // New state declaration
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="App">
      <h1>Hello Pau {isCheck ? "ON" : "OFF"}</h1>
      <h2>Ponte a aprender React</h2>
      <ButtonOnOff check={isCheck} setIsCheck={setIsCheck} />
    </div>
  );
}

class ButtonOnOff extends Component {
  // Component LifeCycle ->>
  constructor({ check }) {
    super();
    console.log("Calling contructor");
    // Old state declaration
    this.state = {
      check
    };
  }


  // Component LifeCycle ->>
  componentDidUpdate(previousProps) {
    console.log(previousProps.check, this.props.check, "did update");
    if (previousProps.check !== this.props.check) {
      this.setState({ check: this.props.check });
    }
  }

  // Component LifeCycle ->>
  render() {
    const { setIsCheck } = this.props;
    console.log("Calling render");

    return (
      <button
        onClick={() => {
          setIsCheck(!this.state.check);
        }}
      >
        {this.state.check ? "Apagar" : "Encender"}
      </button>
    );
  }
}
