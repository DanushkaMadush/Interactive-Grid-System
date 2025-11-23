import React from 'react'
import styles from './GridItem.module.css'

export default function GridItem({ item, onSelect }) {
  if (item.selected) {
    return (
      <div
        className={styles.box}
        style={{
          position: 'absolute',
          left: item.pixelX,
          top: item.pixelY,
          width: item.pixelW,
          height: item.pixelH,
          zIndex: 10,
        }}
        onMouseDown={onSelect}
      />
    )
  }

  const gridColumn = `${item.col} / span ${item.width}`
  const gridRow = `${item.row} / span ${item.height}`

  return (
    <div
      className={styles.box}
      style={{ gridColumn, gridRow }}
      onMouseDown={onSelect}
    />
  )
}
