"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || name.trim().length < 2) {
      setNameTouched(true);
      alert("Name must be at least 2 characters.");
      return;
    }

    const item = {
      name: name.trim(),
      quantity,
      category,
    };

    console.log(item);
    alert(`Name: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  }

  const showError = nameTouched && name.trim().length < 2;
  const disableButton = name.trim().length < 2;

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          className={`w-full border p-2 ${showError ? "border-red-500" : "border-gray-300"}`}
        />
        {showError && <p className="text-red-500">Name must be at least 2 characters.</p>}
      </div>

      <div>
        <label className="block">Quantity</label>
        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border border-gray-300 p-2"
        />
      </div>

      <div>
        <label className="block">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 p-2 text-black bg-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={disableButton}
        className="border px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add Item
      </button>
    </form>
  );
}
