import React from 'react'
import '../style/Page404.css'

const Page404 = () => {
  return (
    <div className="page404">
      <div className="container">
        <h1>🤔Page does not exist {window.location.pathname}</h1>
      </div>
  </div>
  )
}
export default Page404;