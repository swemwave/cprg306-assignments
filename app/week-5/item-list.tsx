"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

type ShoppingItem = {
  id: string;
  name: string;
  quantity: number;
  category: string;
};

export default function ItemList() {
  const items = itemsData as ShoppingItem[];
  const [sortBy, setSortBy] = useState("name"); // "name" | "category" | "grouped"

  const buttonBase =
    "border border-white/60 px-4 py-2 rounded-lg text-sm font-medium transition";
  const buttonInactive = "bg-transparent text-white hover:bg-white/10";
  const buttonActive = "bg-white text-slate-900";

  const buttons = (
    <div className="flex flex-wrap justify-center gap-2 py-3">
      <button
        type="button"
        onClick={() => setSortBy("name")}
        className={`${buttonBase} ${sortBy === "name" ? buttonActive : buttonInactive}`}
      >
        Sort by Name
      </button>

      <button
        type="button"
        onClick={() => setSortBy("category")}
        className={`${buttonBase} ${sortBy === "category" ? buttonActive : buttonInactive}`}
      >
        Sort by Category
      </button>

      <button
        type="button"
        onClick={() => setSortBy("grouped")}
        className={`${buttonBase} ${sortBy === "grouped" ? buttonActive : buttonInactive}`}
      >
        Grouped
      </button>
    </div>
  );

  let itemsToShow = [...items];

  if (sortBy === "name") {
    itemsToShow.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  if (sortBy === "category") {
    itemsToShow.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      // tie-breaker: name
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }

  if (sortBy === "grouped") {
    const grouped: { [key: string]: ShoppingItem[] } = {};

    for (const item of itemsToShow) {
      const cat = item.category;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    }

    const categories = Object.keys(grouped).sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    for (const cat of categories) {
      grouped[cat].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }

    return (
      <div className="space-y-4">
        {buttons}

        <div className="space-y-6">
          {categories.map((cat) => (
            <section key={cat} className="text-left">
              <h2 className="mb-2 text-lg font-bold capitalize">{cat}</h2>
              <ul className="space-y-2">
                {grouped[cat].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {buttons}

      <ul className="space-y-2 text-left">
        {itemsToShow.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
