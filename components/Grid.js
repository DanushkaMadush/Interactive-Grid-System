import GridItem from "./GridItem";
import styles from "./Grid.module.css";
import { useState } from "react";

export default function Grid() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
    console.log('selected id is' , id);
    
  };

  return (
    <div className={styles.grid} style={{ "--cell-size": "70px" }}>
      <GridItem selected={selectedId === 1} onClick={() => handleSelect(1)} />
      <GridItem selected={selectedId === 2} onClick={() => handleSelect(2)} />
      <GridItem selected={selectedId === 3} onClick={() => handleSelect(3)} />
      <GridItem selected={selectedId === 4} onClick={() => handleSelect(4)} />
      <GridItem selected={selectedId === 5} onClick={() => handleSelect(5)} />
      <GridItem selected={selectedId === 6} onClick={() => handleSelect(6)} />
      <GridItem selected={selectedId === 7} onClick={() => handleSelect(7)} />
      <GridItem selected={selectedId === 8} onClick={() => handleSelect(8)} />
      <GridItem selected={selectedId === 9} onClick={() => handleSelect(9)} />
      <GridItem selected={selectedId === 10} onClick={() => handleSelect(10)} />
      <GridItem selected={selectedId === 11} onClick={() => handleSelect(11)} />
      <GridItem selected={selectedId === 12} onClick={() => handleSelect(12)} />
      <GridItem selected={selectedId === 13} onClick={() => handleSelect(13)} />
      <GridItem selected={selectedId === 14} onClick={() => handleSelect(14)} />
      <GridItem selected={selectedId === 15} onClick={() => handleSelect(15)} />
      <GridItem selected={selectedId === 16} onClick={() => handleSelect(16)} />
      <GridItem selected={selectedId === 17} onClick={() => handleSelect(17)} />
      <GridItem selected={selectedId === 18} onClick={() => handleSelect(18)} />
      <GridItem selected={selectedId === 19} onClick={() => handleSelect(19)} />
      <GridItem selected={selectedId === 20} onClick={() => handleSelect(20)} />
    </div>
  );
}
