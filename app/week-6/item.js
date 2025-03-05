export default function Item({ name, quantity, category }) {
    return (
      <li className="p-2 border-b">
        <strong>{name}</strong> - {quantity} ({category})
      </li>
    );
  }
  