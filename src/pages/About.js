/**
 * Created by suzanne on 5/19/18.
 */
import React, {Component} from 'react'
import { Container,  Header } from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      <Container text style={{marginTop: '7em'}}>
        <Header as='h1'>About</Header>
        <h2>EM Quick</h2>
        <p>This is a resource to quickly look up reference information for emergency medicine students, residents, attendings, PA-C &amp; NPs while working in the ER.</p>
        <p>The developers and contributors make no guarantees and take no responsibility for the accuracy of this information. References are provided for every resource, but there is always the possibiliyt of typos or database errors.</p>
        <p>This is for reference only. The practitioner is responsible for making sure the information they use to care for patients is accurate and up to date.</p>
        <h2>Inspiration</h2>
        <p>Browse the halls of any medical school or hospital floor and you'll see students and residents whose pockets are jam packed full of pocket-sized reference books. As training progresses they are lulled into thinking that they have key bits of knowledge committed to memory, yet medical recommendations are constantly changing.</p>
        <p>As an example the use of Vasopressin in cardiac arrest as gone in and out of favor with changes in the official Americal Heart Association guidelines every couple of years since the early 2000s. If you're actively training, you may have learned the most current recommendation, but if you've been out of training for awhile, it's possible the removal of vasopression may have slipped past you.</p>
        <p>Alternatively other information remains mostly static such as the number of teeth in the maxilla and mandible or the distribution of senosory and motor nerves.</p>
        <p>Finally, today's practitioner has to keep in mind a multitude of 'calculators' and scores such as PERC, HEART, NIH, Well's Criteria (for DVT &amp; for PE) and the list goes on and on. ABCD2, CHADS, Sepsis, etc etc. There are several excellent websites for calculator use such as MDCalc.com started by Graham Walker, MD when he was a medical student, however, EM Quick combines both common EM calculators as well as static and dynamically changing reference information for those actively caring for patients.</p>
        <p>I made this for my own use and wish to share it with others. I hope you find it helpful.</p>
        <h2>Contributions</h2>
        <p>Contributions to development of the app are warmly welcomed, as are contributions to the database of resources, which I"ll be adding to a little at a time.</p>
      </Container>
    )
  }
}

export default About