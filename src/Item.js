import React from "react";
import moment from "moment";
import "./Item.css";

class Item extends React.Component {
  handleDelete = () => {
    this.props.deleteTaskFunc(this.props.id);
  }

  handleComplete = () => {
    this.props.completeTaskFunc(this.props.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <p className={this.props.completed ? "completed" : ""}>
            {this.props.text}
          </p>
        </div>
        <div className="col-2">
          <p>{moment(this.props.date, "YYYY-MM-DD").fromNow()}</p>
        </div>
        <div className="col-3">
          <p>Due by: {moment(this.props.dueBy, "YYYY-MM-DD").format("dddd Do MMM")}</p>
        </div>
        <div className="col-1">
          {!this.props.completed && (
            <button className="btn btn-info" onClick={this.handleComplete}>Done</button>
          )}
        </div>
        <div className="col-1">
          <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Item;
