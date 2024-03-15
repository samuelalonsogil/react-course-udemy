import './ExamplesData.css';

import { EXAMPLES } from '../../data';
import TabButton from '../TabButton/TabButton';
import {useState} from 'react';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

export default function ExamplesData(){
const [ selectedTopic, setSelectedTopic ] = useState();

  let tabContent= <p>Please select a topic</p>;
  
  if( selectedTopic ){ 
    tabContent= 
    <div id='tab-content'>
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
  }


    return ( <> 
    <Section title='Examples'  id='examples'>
        <Tabs
          buttonsContainer='menu'
          buttons={ 
          <>
            <TabButton 
              isSelected={ selectedTopic === 'components' } onClick={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={ selectedTopic === 'jsx' } onClick={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={ selectedTopic === 'props' } onClick={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={ selectedTopic === 'state' } onClick={()=>handleSelect('state')}>State</TabButton>
          </>
         }>
        {tabContent}
        </Tabs>

        

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

      </Section>
     </> )
}