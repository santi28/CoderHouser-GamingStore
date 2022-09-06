import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function ItemCount({ label, stock = 1, initial, onAdd }) {
  const [counter, setCount] = useState(initial||0)

  const addHandler = () => {
    setCount(counter+1)
    onAdd(counter + 1)
  }

  return (
    <div>
      <span>{ label }</span>
      <div
        className="flex items-center justify-center w-40 overflow-hidden border-2 rounded-lg">
        <button
          className="px-2 py-2 bg-gray-200 disabled:opacity-30"
          disabled={counter <= 0}
          onClick={() => setCount(counter-1)}>
          <HiMinus/>
        </button>
        <span className="flex-1 text-center select-none">{counter}</span>
        <button
          className="px-2 py-2 bg-gray-200 disabled:opacity-30"
          disabled={counter >= stock}
          onClick={() => addHandler()}>
          <HiPlus/>
        </button>
      </div>
    </div>
  )
}

export default ItemCount;