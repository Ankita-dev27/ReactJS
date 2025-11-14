
import Core from './Coreconcept.jsx'
import { CORE_CONCEPTS } from '../data';
import Section  from './Section.jsx';
function CoreConcepts(){
    return(
      


      <Section title="Core Concepts" id="core-concepts">
      <ul>
      <Core title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
      <Core title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} />
      <Core title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} />
      <Core title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} />
      </ul>    
      </Section>

    )
}
export default CoreConcepts;