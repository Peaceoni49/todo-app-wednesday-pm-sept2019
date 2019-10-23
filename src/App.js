import React, { Component } from "react";
import uuid from "uuid/v4";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { text: "do the dishes", completed: true, date: "2019-10-21", id: uuid() },
      { text: "walk the cat", completed: false, date: "2019-10-23", id: uuid() },
      { text: "buy oat milk", completed: false, date: "2019-10-25", id: uuid() },
      { text: "print pictures", completed: true, date: "2019-10-26", id: uuid() },
      {
        text: "hoover the cat's bed",
        completed: false,
        date: "2019-10-28",
        id: uuid()
      }
    ]
  };

  // This function should update the state with a new task
  addNewTask = taskText => {
    const tasksCopy = this.state.tasks.slice();

    const newTask = {
      text: taskText,
      completed: false,
      date: "2019-10-23",
      id: uuid()
    };

    tasksCopy.push(newTask)

    this.setState({
      tasks: tasksCopy
    });
  };

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
            <Item text={task.text} completed={task.completed} key={task.id} />
          );
        })}

        <h3>Tasks already completed:</h3>
        {completedTasks.map(task => {
          return (
            <Item text={task.text} completed={task.completed} key={task.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
