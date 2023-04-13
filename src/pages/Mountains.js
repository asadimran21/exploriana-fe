import React from 'react'
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from "../Navbar"



const Mountains = ({setLoginUser}) =>  {
    
  return (
    <div>
      <Navbar setLoginUser={setLoginUser} />
    <div className="mountains" id="home">
    <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/footer-bg.jpg')" }}>
        {/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
            <div className="content">
                <span style={{color:"white"}}>Mountains you want to</span>
                <h3> explore</h3>
                
            </div>
        </div>
      </section>
      
    <div style={{marginTop: "40px"}}>
      <section className="blogs" id="blogs">
      <div>
      <h1 className="heading"> Know About your favourite Mountains </h1>
      <Grid container spacing={7}>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Chogori.jpg')} style={{height:"700px"}}/> 
                  {/* <img src="images/img-1.jpg" alt=""> */}
                  <h3 style={{marginTop:"15px"}}>K2 from Broad Peak Base Camp.</h3>
                  <p>K2, at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest (at 8,849 metres (29,032 ft)). It lies in the Karakoram range, partially in the Gilgit-Baltistan region of Pakistan.K2 is the only 8,000+ metre peak that has never been climbed from its eastern face.Ascents have almost always been made in July and August, which are typically the warmest times of the year; K2's more northern location makes it more susceptible to inclement and colder weather.The peak has now been climbed by almost all of its ridges. Although the summit of Everest is at a higher altitude, K2 is a more difficult and dangerous climb, due in part to its more inclement weather.As of February 2021, only 377 people have completed the ascent to its summit.There have been 91 deaths during attempted climbs, according to the list maintained on the list of deaths on eight-thousanders.</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper><div className="slide">
                <img src={require('../images/Nanga_Parbat.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-2.jpg" alt=""> */}
                  <h3>Nanga Parbat, view from Fairy Meadows.</h3>
                  <p>Nanga Parbat (Urdu: نَنگا پربت), known locally as Diamer (دیامر) which means “king of the mountains”, is the ninth-highest mountain on Earth, its summit at 8,126 m (26,660 ft) above sea level.As a result of its accessibility, attempts to reach the summit of Nanga Parbat began very soon after it was discovered by Europeans.[10] In 1895, Albert F. Mummery led an expedition to the peak, accompanied by Geoffrey Hastings, and reached almost 6,100 m (20,000 ft) on the Diamir (West) Face,[12] but Mummery and two Gurkha companions later died reconnoitering the Rakhiot Face.
                    </p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Rakaposhi.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-3.jpg" alt=""> */}
                  <h3>Rakaposhi (Urdu: راکاپوشی / رَکی پُوشِہ)</h3>
                  <p>Rakaposhi is a mountain in the Karakoram mountain range in the Gilgit-Baltistan territory of Pakistan,about 100 km (62 mi) north of the city of Gilgit. It is ranked 27th-highest in the world.  Rakaposhi rises over the Bagrot, Nagar, and Danyor.Rakaposhi is notable for its exceptional rise over local terrain.  On the north, it rises 5,900 metres (19,357 ft) in only an 11.2 km (7 mi) horizontal distance from the Hunza River.There are views of Rakaposhi from the Karakoram Highway on the route through Nagar. A tourist spot in the town of Gilgit (located in the bagrote valley ) called "Zero Point of Rakaposhi" is the closest view point of the mountain.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/kutwal.jpg')} style={{height:"800px"}}/> 
                  {/* <img src="images/img-4.jpg" alt=""> */}
                  <h3>Heramosh Peak ہراموش چوٹی</h3>
                  <p>Haramosh Peak (also known as Haramosh or Peak 58) is a mountain located in the Karakoram range of the Gilgit-Baltistan of Pakistan. The Total population of haramosh Vellay at least 8000 people.according to researchers. Its height is also often given as 7,409m. Haramosh lies about 65 kilometres (40 mi) east of Gilgit, in the south-central region of the Rakaposhi-Haramosh Mountains, a subrange of the Karakoram range. It rises steeply above the north bank of the Indus River, a little ways  upstream of its confluence with the Gilgit River. The massif has two summits, Haramosh Peak and Haramosh Kutwal Laila Peak.  The peak was first scaled in 1958 by an Austrian team consisting of Heini Roiss, Stephan Pauer, and Dr. Franz Mandl.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/passu.jpg')} style={{height:"800px"}}/> 
                  {/* <img src="images/img-5.jpg" alt=""> */}
                  <h3>Passu Sar پسو سر</h3>
                  <p>Passu Sar (Urdu: پسو سر; or Passu Sar, Passu I) is a mountain peak in the Batura Muztagh, a sub-range of the Karakoram mountain range, in the Hunza District of Gilgit-Baltistan, Pakistan. It is the high point of the Passu massif, which also includes Passu Diar (or "Passu East", "Pasu II"). The peak lies on the main ridge of the Batura Muztagh, about 7 km (4 mi) east of Batura Sar. The date of the first successful ascent of Passu Sar is disputed. It has been reported as first climbed on 7 August 1994 by the German team of Max Wallner, Dirk Naumann, Ralf Lehmann, and Volker Wurnig. Another report claims it was climbed in 1978 by a Japanese-Pakistani team.</p>
                  
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </section>
</div>
      </div>
      </div>
  )
}

export default Mountains