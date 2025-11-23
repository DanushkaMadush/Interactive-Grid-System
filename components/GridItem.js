import { Rnd } from "react-rnd";
import styles from "./GridItem.module.css";

export default function GridItem({ item, onSelect, updateItem }) {
  const cellSize = 70;

  return (
    <Rnd
      size={{ width: item.width * cellSize, height: item.height * cellSize, }}
      position={{ x: (item.col - 1) * cellSize, y: (item.row - 1) * cellSize, }}
      onClick={onSelect}
      enableResizing={item.selected}
      disableDragging={!item.selected}
      onDrag={(e, d) => {
        updateItem(item.id, {
          col: Math.max(1, Math.round(d.x / cellSize) + 1),
          row: Math.max(1, Math.round(d.y / cellSize) + 1),
        });
      }}
      onDragStop={(e, d) => {
        updateItem(item.id, {
          col: Math.max(1, Math.round(d.x / cellSize) + 1),
          row: Math.max(1, Math.round(d.y / cellSize) + 1),
        });
      }}
      onResize={(e, direction, ref, delta, position) => {
        updateItem(item.id, {
          width: Math.max(1, Math.round(ref.offsetWidth / cellSize)),
          height: Math.max(1, Math.round(ref.offsetHeight / cellSize)),
          col: Math.max(1, Math.round(position.x / cellSize) + 1),
          row: Math.max(1, Math.round(position.y / cellSize) + 1),
        });
      }}
      className={`${styles.box} ${item.selected ? styles.selected : ""}`}
    />
  );
}
