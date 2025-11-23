import { useState, useMemo } from "react";
import GridItem from "./GridItem";
import styles from "./Grid.module.css";

export default function Grid() {
  const cellSize = 70;

  const [items, setItems] = useState([
    { id: 1, col: 1, row: 1, width: 1, height: 1, selected: false },
    { id: 2, col: 2, row: 1, width: 1, height: 1, selected: false },
    { id: 3, col: 3, row: 1, width: 1, height: 1, selected: false },
    { id: 4, col: 4, row: 1, width: 1, height: 1, selected: false },
    { id: 5, col: 5, row: 1, width: 1, height: 1, selected: false },
    { id: 6, col: 6, row: 1, width: 1, height: 1, selected: false },
    { id: 7, col: 7, row: 1, width: 1, height: 1, selected: false },
    { id: 8, col: 8, row: 1, width: 1, height: 1, selected: false },
    { id: 9, col: 9, row: 1, width: 1, height: 1, selected: false },
    { id: 10, col: 10, row: 1, width: 1, height: 1, selected: false },
  ]);

  // Toggle selection
  const handleSelect = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : { ...item, selected: false }
      )
    );
  };

  // Update item properties (col, row, width, height)
  const updateItem = (id, changes) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...changes } : item))
    );
  };

  // Calculate grid height dynamically
  const gridHeight = useMemo(() => {
    const maxBottom = Math.max(...items.map((it) => it.row + it.height - 1));
    const h = maxBottom * cellSize;
    return maxBottom * cellSize;
  }, [items]);

  return (
    <div
      className={styles.grid}
      style={{ "--cell-size": `${cellSize}px`, height: `${gridHeight}px` }}
    >
      {items.map((item) => (
        <GridItem
          key={item.id}
          item={item}
          updateItem={updateItem}
          onSelect={() => handleSelect(item.id)}
        />
      ))}
    </div>
  );
}
