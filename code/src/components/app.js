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

  addItem = (todoItem) => {
    const { todoItems } = this.state
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    })
    this.setState({ todoItems })
  }

  removeItem = (itemIndex) => {
    const { todoItems } = this.state
    todoItems.splice(itemIndex, 1)
    this.setState({ todoItems })
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
    this.setState({ todoItems })
  }

  render() {
    const { todoItems } = this.state

    return (
      <div className="page-wrapper">
        <TodoForm addItem={this.addItem} />
        <TodoList
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
          todoItems={todoItems} />
      </div>
    )
  }

}

export default App
