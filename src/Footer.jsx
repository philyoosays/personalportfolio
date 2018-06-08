import React from 'react'

import './Footer.css'

export default function Footer(props) {
  const theFoot = props.nav === 'nothing' ?
    (<section className="footcontainer bufferfour">
      <hr />
      <p className="footer">Made with React.js by Phil Yoo 2018</p>
    </section>) :
    (<section className="footcontainer bufferthree">
      <hr />
      <p className="footer">Made with React.js by Phil Yoo 2018</p>
    </section>)
  return(
    <div>
      {theFoot}
    </div>
  )
}
