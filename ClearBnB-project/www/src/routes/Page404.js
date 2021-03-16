import React from 'react'
import '../style/Page404.css'

const Page404 = () => {
  return (
    <div className="page404">
      <div className="container">
        <h1>🤔Page does not exist {window.location.pathname}</h1>
        <img src="https://images.homedepot-static.com/productImages/23e773bd-fe78-4ee8-90b7-820c6c2c5767/svn/allures-illusions-coffee-cups-mugs-giant-coffee-64_1000.jpg" alt="" />
      </div>
    </div>
  )
}
export default Page404;