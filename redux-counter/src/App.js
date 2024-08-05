import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="mt-[50px]">
        <div className="text-[36px] font-[600] text-center">Counter App</div>
        <div className="text-center text-[24px] font-[600] pt-[20px]">Counter:</div>
        <div className="flex gap-[5px] pt-[20px]">
          <div className="text-[18px] px-[10px] py-[5px] bg-blue-500 text-center rounded-md">
            Increment
          </div>
          <div className="text-[18px] px-[10px] py-[5px] bg-red-500 text-center rounded-md">
            Decrement
          </div>
          <div className="text-[18px] px-[10px] py-[5px] bg-orange-500 text-center rounded-md">
            Increment By 5
          </div>
          <div className="text-[18px] px-[10px] py-[5px] bg-green-500 text-center rounded-md">
            Reset
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
