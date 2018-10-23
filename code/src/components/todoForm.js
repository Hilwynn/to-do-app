import React from "react"

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.itemName = React.createRef()
    this.form = React.createRef()
  }

  componentDidMount() {
    this.itemName.current.focus()
  }

  onSubmit = (event) => {
    event.preventDefault()
    const newItemValue = this.itemName.current.value

    if (newItemValue) {
      this.props.addItem({ newItemValue })
      this.form.current.reset()
    }
  }

  render() {
    return (
      <form
        className="todo-form"
        onSubmit={this.onSubmit}
        ref={this.form}>
        <label htmlFor="add-task" className="screen-reader-only">
          Add a new task to the list
        </label>
        <input
          className="form-input"
          id="add-task"
          ref={this.itemName}
          placeholder="New task..."
          type="text" />
        <button
          className="submit-button"
          type="submit">
          Add
        </button>
      </form>
    )
  }

}

export default TodoForm
