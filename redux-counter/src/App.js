import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByFive } from "./redux/slice";

function App() {
  const count = useSelector((state) => state?.counter?.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (count < 0) {
      dispatch(reset());
    }
  }, [count, dispatch]);

  return (
    <div className="flex justify-center">
      <div className="mt-[50px]">
        <div className="text-[36px] font-[600] text-center">Counter App</div>
        <div className="text-center text-[24px] font-[600] pt-[20px]">
          Counter: {count}
        </div>
        <div className="flex gap-[5px] pt-[20px]">
          <div
            className="text-[18px] px-[10px] py-[5px] bg-blue-500 text-center rounded-md"
            onClick={() => dispatch(increment())}
          >
            Increment
          </div>
          <div
            className="text-[18px] px-[10px] py-[5px] bg-red-500 text-center rounded-md"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </div>
          <div
            className="text-[18px] px-[10px] py-[5px] bg-orange-500 text-center rounded-md"
            onClick={() => dispatch(incrementByFive(5))}
          >
            Increment By 5
          </div>
          <div
            className="text-[18px] px-[10px] py-[5px] bg-green-500 text-center rounded-md"
            onClick={() => dispatch(reset())}
          >
            Reset
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
