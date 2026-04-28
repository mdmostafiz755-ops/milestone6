import { Suspense } from 'react'
import './App.css'
import Flags from './components/Flags'
function App() {
  const flags = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())
  return (
    <>
      <Suspense fallback={<h4>Countries are loading...</h4>}>
        <Flags flags={flags}></Flags>
      </Suspense>

    </>
  )
}

export default App