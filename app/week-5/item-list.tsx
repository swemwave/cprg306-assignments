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
  const [sortBy, setSortBy] = useState("name");

  const buttons = (
    <div className="space-x-2 py-3">
      <button className="border border-white px-3 py-1 rounded" onClick={() => setSortBy("name")}>Sort by Name <br /></button>{" "}
      <button className="border border-white px-3 py-1 rounded"onClick={() => setSortBy("category")}>Sort by Category <br /></button>{" "}
      <button className="border border-white px-3 py-1 rounded" onClick={() => setSortBy("grouped")}>Grouped <br /></button>
    </div>
  );

  let itemsToShow = [...items];

  if (sortBy === "name") {
    itemsToShow.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  }

  if (sortBy === "category") {
    itemsToShow.sort((a, b) =>
      a.category < b.category ? -1 : a.category > b.category ? 1 : 0
    );
  }

  if (sortBy === "grouped") {
    const grouped: { [key: string]: ShoppingItem[] } = {};

    for (const item of itemsToShow) {
      const cat = item.category;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    }

    const categories = Object.keys(grouped).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    for (const cat of categories) {
      grouped[cat].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
    }

    return (
      <div>
        {buttons}
        {categories.map((cat) => (
          <div key={cat}>
            <h2 className="capitalize">{cat}</h2>
            <ul>
              {grouped[cat].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {buttons}
      <ul>
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
