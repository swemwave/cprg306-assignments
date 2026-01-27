interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="space-y-2 w-150 border-2 p-2 rounded">
      <p>{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}

