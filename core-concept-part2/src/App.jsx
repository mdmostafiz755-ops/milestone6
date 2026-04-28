import { Suspense } from "react"
import Hooks from "./components/Hooks"
import Friend from "./components/Friend"
// const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())

const friend=async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}
const App = () => {
  const fdata=friend();
  return (
    <>
    {/* <Suspense fallback={<h3>Loading...</h3>}>
      <Hooks fetchUser={fetchUser}></Hooks>
    </Suspense> */}
    <Suspense fallback={<h4>Friends are coming...</h4>}>
      <Friend friend={fdata}></Friend>
    </Suspense>
    </>
    
  )
}

export default App