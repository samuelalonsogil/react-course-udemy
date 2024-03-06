import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data'; 
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import {useState} from 'react';
//import {EXAMPLES} from './data'

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent= <p>Please select a topic</p>;
  if( selectedTopic ){ 
    tabContent= <div id='tab-content'>
    <h3> {EXAMPLES[selectedTopic].title} </h3>
    <p> {EXAMPLES[selectedTopic].description} </p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>;
   }

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
          { CORE_CONCEPTS.map( (item)=> (<CoreConcept key={item.title} {...item} /> ) ) } 
           { /* <CoreConcept 
            image={CORE_CONCEPTS[0].image} 
            title= { CORE_CONCEPTS[0].title }
            description= { CORE_CONCEPTS[0].description } />

          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept  {...CORE_CONCEPTS[3]} /> */ } 
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton 
            isSelected={ selectedTopic === 'components' } onClick={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={ selectedTopic === 'jsx' } onClick={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={ selectedTopic === 'props' } onClick={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={ selectedTopic === 'state' } onClick={()=>handleSelect('state')}>State</TabButton>
        </menu>

        {tabContent}

        { /* { !selectedTopic ? <p>Please select a topic</p> : ( <div id='tab-content'>
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div> ) } */ }

      { /* { !selectedTopic && <p>Please select a topic</p> }
      { selectedTopic && ( <div id='tab-content'>
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div> ) } */ }

      </section>
    </main>
    </>
  )
}

export default App
