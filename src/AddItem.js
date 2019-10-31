import React from "react";
import moment from "moment";

// Controlled Component

class AddItem extends React.Component {
  state = {
    newItemText: "",
    dateSelected: moment().format("YYYY-MM-DD")
  };

  // Function which update state must always live where the state lives
  updateNewItemText = event => {
    this.setState({
      newItemText: event.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.addNewTaskFunc(this.state.newItemText, this.state.dateSelected);
    this.setState({
      newItemText: ""
    });
  };

  handleDateChange = e => {
    console.log(e.target.value);
    this.setState({
      dateSelected: e.target.value
    });
  }

  render() {
    // JSX
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="newItem"
            placeholder="Type an item here"
            value={this.state.newItemText}
            onChange={this.updateNewItemText}
          ></input>
        </div>

        <div className="form-group mx-sm-3 mb-2">
          <input type="date" onChange={this.handleDateChange} value={this.state.dateSelected} />
        </div>
        <button className="btn btn-primary mb-2" onClick={this.handleClick} disabled={this.state.newItemText.length === 0}>
          Add to List
        </button>
      </form>
    );
  }
}

export default AddItem;
