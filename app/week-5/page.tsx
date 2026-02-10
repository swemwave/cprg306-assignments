import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-slate-800/40 p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
