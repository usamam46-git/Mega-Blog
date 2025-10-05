import React from 'react'

function Logo({width = '80px'}) {
  return (
    <div className='rounded-full overflow-hidden'><img src="./mainlogo.jpg" alt="Logo" style={{ width }}  /></div>
  )
}

export default Logo