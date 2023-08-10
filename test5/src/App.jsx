import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button';

function App() {

  // const [name, setName] = useState("김수동")
  // const [count, setCount] = useState(0);
  // const changeName = () => {
  //   if(name==="김수동") setName("김정수")
  //   else setName("김수동")
  // }
  // let a = 1;
  // const changeCount = (data)=>{
  //   setCount((prev)=> 
  //   { 
  //     a++;
  //     console.log({prev, data, count, a})
  //     return prev + data
  //   })
  // }
  // const [id, setId] = useState("");
  // const onChangeHandler = (e) => {
  //   setId(e.target.value)
  // }
  // const [state, setState] = useState({
  //   id1: "",
  //   name1: "김수동",
  //   count1: 0
  // });
  // const {id1, name1, count1} = state
  // const onChangeHandler1 = (name, value) => {
  //   setState((prev)=>({...prev,[name]:value}))
  // }
  const [result, setResult] = useState(0);
  const [target, setTarget] = useState(0);
  const changeTarget = (e) => setTarget(Number(e.target.value))

  const add = () => {
    setResult((prev) => {
      addLog(`${prev} + ${target} = ${prev + target}`)
      return prev + target
    })
  }
  const diff = () => setResult((prev) => {
    addLog(`${prev} - ${target} = ${prev - target}`)
    return prev - target
  })
  const mul = () => setResult((prev) => {
    addLog(`${prev} * ${target} = ${prev * target}`)
    return prev * target
  })
  const div = () => setResult((prev) => {
    addLog(`${prev} / ${target} = ${prev / target}`)
    return prev / target
  })

  const addLog = (log) => {
    setLogs(prev => [...prev, log])
  }
  const [logs, setLogs] = useState([]);
  const buttons = [
    { action: add, name: "+" },
    { action: diff, name: "-" },
    { action: mul, name: "*" },
    { action: div, name: "/" },
  ]
  return (
    <div className="App">
      <header className="App-header">

        <input type='number' onChange={changeTarget}></input>
        {buttons.map(el => <Button el={el} />)}
        <button onClick={() => addLog('2 + 2 = 4')}>test</button>
        <h1>{result}</h1>
        {logs.map(el => <p>{el}</p>)}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name1}
        </p>
        <button onClick={changeName}>+</button>
        <br></br>
        <h2>{count1}</h2>
        <button onClick={()=> onChangeHandler1("count1", count1+1)}>+</button>
        <button onClick={()=> onChangeHandler1("count1", count1-1)}>-</button>
        <input 
        name="id" 
        value={id1} 
        onChange={onChangeHandler}></input> */}
      </header>
    </div>
  );
}

export default App;
