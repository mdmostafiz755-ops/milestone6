import './App.css';
import  ToDo from './components/todolist'
import Bctor from './components/actor';
const App = () => {
  const T=true;
  const F=false;
  const Actor=['rahim','karim','asik','riaz'];
  return (
    <>
    {
      Actor.map(actor=> <Bctor actor={actor}></Bctor>)
    }
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Hero name='Sakib Khan'></Hero>
      <Hero name='Sarukh Khan'></Hero>
      <Player Name='mostafiz' runs='500'></Player>
      <Player Name='tamim' runs='5000'ammount='(50,0000bdt)'></Player>
      <ToDo task='Go to varsity' isDone={T}></ToDo>
      <ToDo task='Go to SKEI' isDone={F}></ToDo>
    </>
  )
}
{/*making a element like html*/ }
function Person() {
  const age = 17;
  return (
    <p className='text'>I am a person{age}</p>
  )
}
function Hero(props) {
  const age = 18;
  const heroStle = {
    color: 'red',
    border: '2px solid red',
    padding: '20px',
    textAlign: "center"
  }
  return (
    <p style={heroStle}>Hero is {props.name} and {age}</p>/*value setting using props*/
  )
}
function Player({Name,runs, ammount='(0bdt)'}) {
  const heroStle = {
    color: 'red',
    border: '2px solid green',
    padding: '20px',
    textAlign: "center",
    padding: '20px',
    marginBottom:'10px',
    borderRadius:"15px"
  }
  return (
    <div style={heroStle}>
      <h3>Name: {Name}</h3>
      <p>Runs: {runs} {ammount}</p>
    </div>
  )
}
export default App