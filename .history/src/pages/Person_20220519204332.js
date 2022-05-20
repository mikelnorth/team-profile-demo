import React from 'react'

export default function Person() {

  const [person] = useState(getPerson());

  return (
    <div>Person</div>
  )
}
