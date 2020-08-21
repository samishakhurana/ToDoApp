import React from "react"
import "./index.css"
import { connect } from 'react-redux'

class Footer extends React.Component {
  render () {
    return (
      <div>
        So you are planning to do {this.props.numberOfItems} items today, huh!! Impressive *_*
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    'numberOfItems': state.items.length
  }
}


export default connect(mapStateToProps)(Footer);