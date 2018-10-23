import React from "react"
import TodoItem from "./todoItem"

class TodoList extends React.Component {

  render() {
    const tasks = this.props.todoItems.map((item, index) => {
      return (
        <TodoItem
          done={item.done}
          index={index}
          key={item.index}
          markTodoDone={this.props.markTodoDone}
          removeItem={this.props.removeItem}
          value={item.value} />
      )
    })
    return (
      <ul className="list-group">{tasks}</ul>
    )
  }

}

export default TodoList
