import React from 'react'
import '../style/About.css'

const Page404 = () => {
  return (
  <div className="page404">
     <h1>Page does not exist {window.location.pathname}</h1>
  </div>
  )
}
export default Page404;