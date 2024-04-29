const TodoDetails = ({completed, total}) => {
  return (
    <div>
      <div className="">
        <h3>
          Total Todo:
        </h3>
        <span>
          {total}
        </span>
      </div>
      <div className="">
        <h3>
          Completed Todo:
        </h3>
        <span>
          {completed}
        </span>
      </div>
      <div className="">
        <h3>
          Pending Todo:
        </h3>
        <span>
          {total - completed}
        </span>
      </div>
    </div>
  )
}

export default TodoDetails