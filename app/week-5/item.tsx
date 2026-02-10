export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="border rounded p-3">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-400">
        Buy {quantity} {name} in {category}
      </div>
    </li>
  );
}
