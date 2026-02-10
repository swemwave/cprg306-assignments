export default function Item({ name, quantity, category }: { name: string; quantity: number; category: string }) {
  return (
    <li className="border rounded p-3">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-gray-">
        Buy {quantity} {name} in {category}
      </div>
    </li>
  );
}
