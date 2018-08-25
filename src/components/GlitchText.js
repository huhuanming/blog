import React from 'react'
import './glitch.css'

const GlitchText = ({ wrapperStyles = {}, textStyles = {} }) => {
  return (
    <div className="glitch-effect" data-text="Hu Huanming">
      Hu <span>Huanming</span>
    </div>
  )
}

export default GlitchText
