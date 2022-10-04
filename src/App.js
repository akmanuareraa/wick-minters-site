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
          <div className="absolute flex flex-row space-x-6 social-custom-position">
            <a href="https://twitter.com/WickMinters" className="">
              <img src="/assets/twitter.svg" className="w-32 h-32"></img>
            </a>
            <a href="https://t.me/Wickminters" className="">
              <img src="/assets/telegram.svg" className="w-32 h-32"></img>
            </a>
            <a href="https://discord.gg/kpfaETZTKx" className="">
              <img src="/assets/discord.svg" className="w-32 h-32"></img>
            </a>
            <a href="#" className="">
              <img src="/assets/medium.svg" className="w-32 h-32"></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
