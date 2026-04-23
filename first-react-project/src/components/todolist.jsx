
const todolist = ({ task, isDone }) => {
  if (isDone === true) {
    return (
      <div>{task} is done</div>
    )
  }
  else{
    return (
      <div>{task} is undone</div>
    )
  }
}

export default todolist