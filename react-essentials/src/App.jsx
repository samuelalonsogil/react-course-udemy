import './App.css'
import { CORE_CONCEPTS } from './data'; 
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import {useState} from 'react';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  //let tabContent='Please click a button';

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <>
    <Header />

    <main>
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            image={CORE_CONCEPTS[0].image} 
            title= { CORE_CONCEPTS[0].title }
            description= { CORE_CONCEPTS[0].description } />

          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept  {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton onClick={()=>handleSelect('components')}>Components</TabButton>
          <TabButton onClick={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton onClick={()=>handleSelect('props')}>Props</TabButton>
          <TabButton onClick={()=>handleSelect('state')}>State</TabButton>
        </menu>

        {selectedTopic}

      </section>
    </main>
    </>
  )
}

export default App
