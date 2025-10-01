import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div><img src="/mylogo.png" alt="Logo" style={{ width }} /></div>
  )
}

export default Logo