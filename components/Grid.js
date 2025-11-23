import { useState } from 'react'
import GridItem from './GridItem'
import { gridCellSize } from '../lib/gridUtils'
import styles from './Grid.module.css'
import { gridToPixels } from '@/lib/gridUtils'

export default function Grid() {
  const [items, setItems] = useState([
    { id: 1 , col: 1 , row: 1, width: 2, height: 2, selected: false },
    { id: 2 , col: 3 , row: 1, width: 2, height: 2, selected: false },
    { id: 3 , col: 5 , row: 1, width: 2, height: 2, selected: false },
    { id: 4 , col: 7 , row: 1, width: 2, height: 2, selected: false },
    { id: 5 , col: 9 , row: 1, width: 2, height: 2, selected: false },
    { id: 6 , col: 11, row: 1, width: 2, height: 2, selected: false },
    { id: 7 , col: 13, row: 1, width: 2, height: 2, selected: false },
    { id: 8 , col: 15, row: 1, width: 2, height: 2, selected: false },
    { id: 9 , col: 17, row: 1, width: 2, height: 2, selected: false },
    { id: 10, col: 19, row: 1, width: 2, height: 2, selected: false },    
  ])

  const updateItem = (id, changes) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, ...changes } : it)))
  }

  const handleSelect = (id) => {
    setItems(prev => prev.map(it => {
        if (it.id !== id) return { ...it , selected: false}

        const pixels = gridToPixels(it)

        return {
            ...it, selected: true, ...pixels
        }
    }))
  }

  return (
    <div>
      <div className={styles.grid}
         style={{ '--cell-size': `${gridCellSize}px` }}
         >
        {items.map(item => (
          <GridItem
            key={item.id}
            item={item}
            onSelect={ () => handleSelect(item.id) } />
        ))}
      </div>
    </div>
  )
}
