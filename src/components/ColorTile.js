import React from 'react'

function ColorTile({color, setColor, id}) {
  return (
    <div className='colorTile' id={id}  onClick={setColor} style={{'--tile-color': color  }}></div>
  )
}

export default ColorTile