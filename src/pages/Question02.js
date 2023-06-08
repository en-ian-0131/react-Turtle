import { useState } from 'react'
import '../styles/Question02.css'

function Question02() {
  const [initValue, setInitValue] = useState([
    {
      name: '一獎',
      quantity: 1,
    },
    {
      name: '二獎',
      quantity: 1,
    },
    {
      name: '三獎',
      quantity: 3,
    },
    {
      name: '四獎',
      quantity: 5,
    },
    {
      name: '五獎',
      quantity: 9,
    },
  ])
  const [result, setResult] = useState('')

  const lottery = () => {
    const rand = Number(Math.floor(Math.random() * 1000))
    handleIfZero(rand, initValue)
  }

  //過濾被抽完的
  const ifZero = (initValue) => {
    const newInit = initValue.filter((v, i) => {
      return v.quantity !== 0
    })
    console.log('ifZero', newInit)
    if (newInit.length === 0) {
      setResult('抽完囉~')
      setInitValue(newInit)
    } else {
      setInitValue(newInit)
    }

    return newInit
  }

  //抽獎
  const range = (rand, initValue) => {
    if (rand > 591 || rand === 0) {
      setResult('可惜沒抽到~')
      return initValue
    } else {
      if (rand > 341 && rand < 591) {
        const newInit5 = initValue.map((v, i) => {
          if (v.name === '五獎') {
            setResult(`抽到${v.name}~`)
            return { ...v, quantity: v.quantity - 1 < 0 ? 0 : v.quantity - 1 }
          } else {
            return { ...v }
          }
        })
        return newInit5
      } else {
        if (rand > 161 && rand < 341) {
          const newInit4 = initValue.map((v, i) => {
            if (v.name === '四獎') {
              setResult(`抽到${v.name}~`)
              return {
                ...v,
                quantity: v.quantity - 1 < 0 ? 0 : v.quantity - 1,
              }
            } else {
              return { ...v }
            }
          })
          return newInit4
        } else {
          if (rand > 31 && rand < 161) {
            const newInit3 = initValue.map((v, i) => {
              if (v.name === '三獎') {
                setResult(`抽到${v.name}~`)
                return {
                  ...v,
                  quantity: v.quantity - 1 < 0 ? 0 : v.quantity - 1,
                }
              } else {
                return { ...v }
              }
            })
            return newInit3
          } else {
            if (rand > 1 && rand < 31) {
              const newInit2 = initValue.map((v, i) => {
                if (v.name === '二獎') {
                  setResult(`抽到${v.name}~`)
                  return {
                    ...v,
                    quantity: v.quantity - 1 < 0 ? 0 : v.quantity - 1,
                  }
                } else {
                  return { ...v }
                }
              })
              return newInit2
            } else {
              if (rand > 0 && rand <= 1) {
                const newInit1 = initValue.map((v, i) => {
                  if (v.name === '一獎') {
                    setResult(`抽到${v.name}~`)
                    return {
                      ...v,
                      quantity: v.quantity - 1 < 0 ? 0 : v.quantity - 1,
                    }
                  } else {
                    return { ...v }
                  }
                })
                return newInit1
              }
            }
          }
        }
      }
    }
  }

  const handleIfZero = (rand, initValue) => {
    ifZero(range(rand, initValue))
  }

  return (
    <div className="container">
      <button
        className="lotteryButton"
        onClick={() => {
          lottery()
        }}
      >
        抽獎
      </button>
      {initValue.map((v, i) => {
        return (
          <div key={i}>
            <span className="prize">{v.name}</span>
            <span className="last">剩{v.quantity}個</span>
          </div>
        )
      })}
      <p className="myResult">{result}</p>
    </div>
  )
}

export default Question02
