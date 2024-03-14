import './App.css'
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcept/CoreConcepts';
import ExamplesData from './components/ExamplesData/ExamplesData';

function App() {
  

  return (
    <>
    <Header />

    <main>
      <CoreConcepts></CoreConcepts>
      <ExamplesData></ExamplesData>
    </main>
    </>
  )
}

export default App
