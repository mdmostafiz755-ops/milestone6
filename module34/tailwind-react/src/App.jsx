
import './App.css'
import NavBar from './components/NavBar'
import MyNav from './components/MyNav'
import Pricing from './components/Pricing'
import { Suspense } from 'react'
import Charts from './components/Charts'
import axios from 'axios'
import MarksCharts from './components/MarksCharts'
function App() {

const fetchedData=fetch('/data/pricing.json')
.then(res=>res.json());

const marksPromise=axios.get('/data/marksData.json');

  return (
    <>
    <MyNav></MyNav>
      <NavBar></NavBar>
      <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
        <Pricing fetchedData={fetchedData}></Pricing>
      </Suspense>
      <Charts></Charts>
      <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
            <MarksCharts marksPromise={marksPromise}></MarksCharts>
      </Suspense>
    </>
  )
}

export default App
