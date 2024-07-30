import React from 'react';
import './App.css';

const App=()=> {
  const [temp, setTemp] = React.useState("");
  const [word, setWord] = React.useState("");
  const [size, setSize] = React.useState<string|number>(400);
  const [bgColor, setBgColor] = React.useState("ffffff");
  const [qrCode, setQrCode] = React.useState("");

  React.useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  const handleClick=()=> {
    setWord(temp);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-12 pt-10">
      <h1 className='text-4xl text-slate-600 underline underline-offset-8'>TextToQRCode Transformer</h1>
      <div className="mt-10">
        <div className='flex gap-8'>
          <input type="text"  className="p-2 h-12 w-72 font-medium border border-cyan-800 rounded-xl outline-none bg-slate-50" onChange={
            (e) => { setTemp(e.target.value) }}
            placeholder="Enter text to encode" />
          <button 
           className="p-2 h-12 w-28 font-medium border-2 rounded-xl text-white bg-neutral-600 cursor-pointer hover:bg-slate-500"
            onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="flex justify-between mt-14 gap-2.5">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="200" max="600"
            value={size} onChange={(e) => { setSize(e.target.value) }} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-4 gap-16">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button  className="p-2 h-12 w-28 font-medium border-2 rounded-xl text-white bg-neutral-600 cursor-pointer hover:bg-slate-500" type="button">Download</button>
        </a>
      </div>
      <footer className='absolute bottom-0'>
        <p className='text-slate-600 mb-3 text-xl'>Designed with <span className='text-red-500 text-xl'>&hearts;</span> by Afaaq Majeed</p>
      </footer>
    </div>
  );
}

export default App;
