import React, { Component } from "react";
import uuid from "uuid/v4";
import moment from "moment";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { text: "do the dishes", completed: true, date: "2019-10-21", id: uuid(), dueBy: "2019-11-10" },
      { text: "walk the cat", completed: false, date: "2019-10-23", id: uuid(), dueBy: "2019-11-13" },
      { text: "buy oat milk", completed: false, date: "2019-10-25", id: uuid(), dueBy: "2019-10-10" },
      { text: "print pictures", completed: true, date: "2019-10-26", id: uuid(), dueBy: "2019-11-10" },
      {
        text: "hoover the cat's bed",
        completed: false,
        date: "2019-10-28",
        id: uuid(),
        dueBy: "2019-09-30"
      }
    ]
  };

  // This function should update the state with a new task
  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice();

    const newTask = {
      text: taskText,
      completed: false,
      date: moment().format("YYYY-MM-DD"),
      id: uuid(),
      dueBy: dueByDate
    };

    tasksCopy.push(newTask)

    this.setState({
      tasks: tasksCopy
    });
  };

  deleteTask = id => {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.id !== id
    });

    this.setState({
      tasks: filteredTasks
    });
  }

  completeTask = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }

      return task;
    });

    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    });

    const incompleteTasks = this.state.tasks.filter(task => {
      return task.completed ? false : true;
    });

    return (
      <div className="container">
        <Header />
        <AddItem addNewTaskFunc={this.addNewTask} />
        <ItemCount count={this.state.tasks.length} />
        <h3>Tasks left to complete:</h3>
        {incompleteTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} completeTaskFunc={this.completeTask} date={task.date} dueBy={task.dueBy} />
          );
        })}

        <h3>Tasks already completed:</h3>
        {completedTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.id} deleteTaskFunc={this.deleteTask} id={task.id} date={task.date} dueBy={task.dueBy} />
          );
        })}
      </div>
    );
  }
}

export default App;
