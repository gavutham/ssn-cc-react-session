const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-200">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2 form-checkbox rounded border-gray-400"
        />
        <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
      </label>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-600 font-semibold hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
