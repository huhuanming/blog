import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

class Template extends React.PureComponent {
  state = {
    height: undefined,
  }

  updatelayoutSize = () => {
    this.setState({
      height: window.innerHeight,
    })
  }

  componentDidMount() {
    this.updatelayoutSize()
    window.addEventListener('resize', this.updatelayoutSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatelayoutSize)
  }

  render() {
    return (
      <div
        style={{
          height: this.state.height,
          background: 'rgb(48, 63, 159)',
          padding: 30,
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'white',
          }}
        />{' '}
      </div>
    )
  }
}

export default Template
