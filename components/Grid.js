import { useState } from 'react'
import GridItem from './GridItem'
import { gridCellSize } from '../lib/gridUtils'
import styles from './Grid.module.css'

export default function Grid() {
  const [items, setItems] = useState([
    { id: 1, col: 1, row: 1, width: 3, height: 2, selected: false },
    { id: 2, col: 4, row: 1, width: 2, height: 3, selected: false },
  ])

  const updateItem = (id, changes) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, ...changes } : it)))
  }

  return (
    <div>
      <div className={styles.grid}
        style={{
          width: `${gridCellSize * 10}px`, }}>
        {items.map(item => (
          <GridItem
            key={item.id}
            item={item}
            updateItem={updateItem}
          />
        ))}
      </div>
      <small style={{ display: 'block', marginTop: 8 }}>
        Cell size: {gridCellSize}px — grid width: {gridCellSize * 10}px
      </small>
    </div>
  )
}
