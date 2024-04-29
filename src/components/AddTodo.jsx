import React, {useState} from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
