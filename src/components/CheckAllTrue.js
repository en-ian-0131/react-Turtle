function CheckAllTrue({ v, optionAllCheck, setOptionAllCheck }) {
  return (
    <>
      <input
        type="checkbox"
        checked={optionAllCheck}
        onChange={() => {
          setOptionAllCheck(!optionAllCheck)
        }}
      />
      <span>{v.name}</span>
    </>
  )
}

export default CheckAllTrue
