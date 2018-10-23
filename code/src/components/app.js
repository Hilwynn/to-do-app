import React from "react"
import TodoList from "./todoList"
import TodoForm from "./todoForm"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem("storedTodoList")) {
      this.fetchLocalStorage()
    }
  }

  fetchLocalStorage = () => {
    this.setState({
      todoItems: JSON.parse(localStorage.getItem("storedTodoList"))
    })
  }

  saveToLocalStorage = () => {
    const dataToStore = JSON.stringify(this.state.todoItems)
    localStorage.setItem("storedTodoList", dataToStore)
  }

  addItem = (todoItem) => {
    const { todoItems } = this.state
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    })
    this.setState({ todoItems }, this.saveToLocalStorage)
  }

  removeItem = (itemIndex) => {
    const { todoItems } = this.state
    todoItems.splice(itemIndex, 1)
    this.setState({ todoItems }, this.saveToLocalStorage)
  }

  markTodoDone = (itemIndex) => {
    const { todoItems } = this.state
    const todo = todoItems[itemIndex]
    todoItems.splice(itemIndex, 1)
    todo.done = !todo.done
    if (todo.done) {
      todoItems.push(todo)
    } else {
      todoItems.unshift(todo)
    }
    this.setState({ todoItems }, this.saveToLocalStorage)
  }

  render() {
    const { todoItems } = this.state

    return (
      <div className="page-wrapper">
        <TodoForm addItem={this.addItem} />
        {(!this.state.todoItems.length) && <div className="no-tasks-message"><p>Let&apos;s add some tasks!</p></div>}
        <TodoList
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
          todoItems={todoItems} />
      </div>
    )
  }

}

export default App
