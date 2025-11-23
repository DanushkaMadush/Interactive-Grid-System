import { gridCellSize } from "../lib/gridUtils";
import styles from "./GridItem.module.css";

export default function GridItem({ item, onSelect }) {
  const size = gridCellSize * item.width;

  return (
    <div
      className={`${styles.box} ${
        item.selected ? styles.selected : styles.unselected
      }`}
      onClick={onSelect}
      style={
        item.selected
          ? {
              width: `${item.pixelW}px`,
              height: `${item.pixelH}px`,
              top: `${item.pixelY}px`,
              left: `${item.pixelX}px`,
            }
          : {
              width: `${size}px`,
              height: `${size}px`,
            }
      }
    />
  );
}
