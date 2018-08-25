import React from 'react'
import './glitch.css'

const GlitchText = ({ wrapperStyles = {}, textStyles = {} }) => {
  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <div className="glitch-effect" data-text="Hu Huanming">
        <span>Hu Huanming</span>
      </div>
    </div>
  )
}

export default GlitchText
