export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-3 border-b border-gray-400 flex justify-between items-center bg-gray-800 rounded-md text-white cursor-pointer hover:bg-gray-700 transition"
      onClick={() => onSelect(name)}
    >
      <span className="font-semibold">{name}</span>
      <span className="text-gray-300">x{quantity}</span>
      <span className="px-2 py-1 bg-blue-600 text-xs rounded-md">{category}</span>
    </li>
  );
}
