import React from 'react'

export default function AuthRoute(children) {
  return (
    <Route>
      { () => {
        if(user.isAuth) {
          return children
        } else {
          return route to
        }

}}
    </Route>
  )
}
