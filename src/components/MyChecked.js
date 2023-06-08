import { useState } from 'react'
import CheckAllTrue from './CheckAllTrue'
import CheckSelf from './CheckSelf'

function MyChecked({ vData }) {
  const newDistricts = { ...vData }.districts
  const [optionAllCheck, setOptionAllCheck] = useState(true)

  return (
    <>
      {/* 全部勾選 */}
      <div className="checkOption d-flex">
        <input
          type="checkbox"
          checked={optionAllCheck}
          onChange={() => {
            setOptionAllCheck(!optionAllCheck)
          }}
        />
        <span>全部勾選</span>
      </div>
      {/* 單獨勾選 */}
      {newDistricts.map((v, i) => {
        return (
          <div className="checkOption" key={i}>
            {optionAllCheck ? (
              <CheckAllTrue
                optionAllCheck={optionAllCheck}
                setOptionAllCheck={setOptionAllCheck}
                v={v}
              />
            ) : (
              <CheckSelf
                optionAllCheck={optionAllCheck}
                setOptionAllCheck={setOptionAllCheck}
                v={v}
              />
            )}
          </div>
        )
      })}
    </>
  )
}

export default MyChecked
