import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function ItemCount({ label, stock = 1, initial, onAdd, className }) {
  const [counter, setCount] = useState(initial||0)

  const addAndRemoveHandler = (qunatity) => {
    setCount(counter + qunatity)
    onAdd(counter + qunatity)
  }

  return (
    <>
      { label !== undefined ? <span>{ label }</span> : null }
      <div
        className={`flex items-center justify-center overflow-hidden border-2 rounded-lg ${className.split(" ")}`}>
        <button
          className="px-2 py-2 bg-gray-200 disabled:opacity-30"
          disabled={counter <= 0}
          onClick={() => addAndRemoveHandler(-1)}>
          <HiMinus/>
        </button>
        <span className="flex-1 text-center select-none">{counter}</span>
        <button
          className="px-2 py-2 bg-gray-200 disabled:opacity-30"
          disabled={counter >= stock}
          onClick={() => addAndRemoveHandler(1)}>
          <HiPlus/>
        </button>
      </div>
    </>
  )
}

export default ItemCount;