import { useState } from 'react'

function CheckSelf({ v, setOptionAllCheck }) {
  const [myselfChecked, setMyselfChecked] = useState(false)
  return (
    <>
      <input
        type="checkbox"
        checked={myselfChecked}
        onChange={() => {
          setOptionAllCheck(false)
          setMyselfChecked(!myselfChecked)
        }}
      />
      <span>{v.name}</span>
    </>
  )
}

export default CheckSelf
