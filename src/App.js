import './App.css';

function App() {
  return (
    <>
      <div className="">
        <img src="/assets/1.svg"></img>
        <img src="/assets/2.svg"></img>
        <img src="/assets/3.svg"></img>
        <img src="/assets/4.svg"></img>
        <img src="/assets/5.svg"></img>
        <img src="/assets/6.svg"></img>
        <img src="/assets/7.svg"></img>
        <img src="/assets/8.svg"></img>
        <div className="inline-block relative">
          <img src="/assets/9.svg"></img>
          <input className="input absolute input-custom-position bg-white text-black font-semibold text-center"></input>
          <button className="btn absolute button-custom-position text-black bg-gray-400 font-bold hover:bg-slate-500">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default App;
