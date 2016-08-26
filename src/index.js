import React from 'react'
import ReactDOM from 'react-dom'

const Mod = (props) => <p>{moment().calendar()}</p>

ReactDOM.render(<Mod />, document.getElementById('root'))
