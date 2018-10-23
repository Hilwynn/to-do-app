import React from "react"

class TodoItem extends React.Component {

  onClickClose = () => {
    const { index } = this.props
    this.props.removeItem(index)
  }
  onClickDone = () => {
    const { index } = this.props
    this.props.markTodoDone(index)
  }

  render() {
    const { done, value } = this.props

    return (
      <li className="list-group-item">
        <div className={done ? "done" : "not-done"}>
          <div
            aria-checked={done}
            className="item-check"
            name="check-item"
            onClick={this.onClickDone}
            onKeyPress={this.onClickDone}
            role="checkbox">
            <span className="checkbox" tabIndex="0" />
            <p className="item-name">{value}</p>
          </div>
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    )
  }

}

export default TodoItem
