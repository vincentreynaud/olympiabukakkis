import React, { Component } from "react";
import { Tooltip } from "reactstrap";

class BtnCopy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltipOpen: false
    };
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { children, copyItem } = this.props;

    return (
      <>
        <button
          id="btn-copy"
          onClick={() => {
            navigator.clipboard.writeText(copyItem).then(() => console.log("copied!"), err => console.error(err));
          }}
        >
          {children}
          <Tooltip target="btn-copy" placement="bottom" isOpen={this.state.tooltipOpen} toggle={this.toggle}>
            Click to copy email
          </Tooltip>
        </button>
      </>
    );
  }
}

export default BtnCopy;

// console.log(e.target.closest(".btn-copy"));
// e.target.closest(".btn-copy").tooltip({ trigger: "click" });
