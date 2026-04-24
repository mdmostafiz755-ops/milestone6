import './App.css';
import Counter from './components/Counter';
const App = () => {
  function handleClick(){
    alert('hi');
  }
  const addFive=(num)=>{
    const final=num+5;
    alert(`number:${final}`);
  }
  return (
    <>
    <h3>Hi</h3>
    <button onClick={handleClick}>Click me</button>
    <button onClick={()=>addFive(10)}>Add 5</button>
    <Counter></Counter>
    </>
  )
}

export default App