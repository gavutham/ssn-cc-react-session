const TodoDetails = ({ completed, total }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-blue-600">Total Todo:</h3>
        <span className="text-lg font-semibold">{total}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-green-600">Completed Todo:</h3>
        <span className="text-lg font-semibold">{completed}</span>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-red-600">Pending Todo:</h3>
        <span className="text-lg font-semibold">{total - completed}</span>
      </div>
    </div>
  );
};

export default TodoDetails;
