export const gridCellSize = 70 // px

// Convert grid coordinates → pixel coordinates
export function gridToPixels(item) {
  return {
    pixelX: (item.col - 1) * gridCellSize,
    pixelY: (item.row - 1) * gridCellSize,
    pixelW: item.width * gridCellSize,
    pixelH: item.height * gridCellSize
  }
}
