export default function Item(
  { name, quantity, category }: { name: string; quantity: number; category: string }
) {
  return (
    <li className="relative rounded-xl border border-white/10 bg-white/5 p-4 pr-14">
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-2 text-sm font-bold text-slate-900">
        {quantity}
      </div>

      <div className="font-semibold">{name}</div>

      <div className="mt-2">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold capitalize text-white/90">
          {category}
        </span>
      </div>
    </li>
  );
}
