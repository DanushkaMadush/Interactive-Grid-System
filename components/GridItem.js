import React from 'react'
import styles from './GridItem.module.css'

export default function GridItem({ item }) {
  const gridColumn = `${item.col} / span ${item.width}`
  const gridRow = `${item.row} / span ${item.height}`

  return (
    <div
      className={styles.box}
      style={{
        gridColumn,
        gridRow,
      }}
    >
      <div className={styles.header}>
        Box {item.id}
      </div>
      <div className={styles.body}>
        {item.width}×{item.height}
      </div>
    </div>
  )
}
