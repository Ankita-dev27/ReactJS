
import Core from './Coreconcept.jsx'
import { CORE_CONCEPTS } from '../data';
function CoreConcepts(){
    return(
      <section id="core-concept">
        <h2>Core Concept</h2>
        <ul>
      <Core title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
      <Core title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} />
      <Core title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} />
      <Core title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} />
      </ul>    
      </section>

    )
}
export default CoreConcepts;