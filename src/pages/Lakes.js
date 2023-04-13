import React from 'react'
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from "../Navbar"



const Lakes = ({setLoginUser}) =>  {
    
  return (
    <div>
      <Navbar setLoginUser={setLoginUser} />
    <div className="Lakes" id="home">
    <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/Ratti-Gali.jpg')" }} >
        {/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
            <div className="content">
                <span style={{color:"white"}}>Lakes you want to</span>
                <h3> explore</h3>
                
            </div>
        </div>
      </section>
      
    <div style={{marginTop: "40px"}}>
      <section className="blogs" id="blogs">
      <div>
      <h1 className="heading"> Know About your favourite Lakes </h1>
      <Grid container spacing={7}>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Attabad.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-1.jpg" alt=""> */}
                  <h3>Attabad Lake عطا آباد جھیل</h3>
                  <p>Attabad Lake is located in the Hunza Valley, in the province of Gilgit−Baltistan, Pakistan. 
                    The lake is roughly 21 kilometers long, and has a depth of more than 100 meters, meaning the total volume is roughly 410,000,000 cubic meters.
                     The lake is also considered juvenile, as it has only been in existence since 2010. Attabad Lake was created in 2010, but it is not a synthetic lake or reservoir. 
                     Instead, it is a naturally occurring lake created by chance due to the occurrence of a natural disaster. A river runs through the Hunza Valley, which itself is at the base of the Karakoram Mountain Range. 
                     In January of 2010, a landslide hit the range, causing rock and mud to rush down the mountainside. This falling debris had a catastrophic effect on the villages below, burying several towns and reshaping the landscape of the region.</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper><div className="slide">
                <img src={require('../images/Saiful.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-2.jpg" alt=""> */}
                  <h3>Saiful Muluk  جھیل سیف الملوک</h3>
                  <p>Saiful Muluk جھیل سیف الملوک is a mountainous lake located at the northern end 
                    of the Kaghan Valley, near the town of Naran in the Saiful Muluk National Park. 
                    At an elevation of 3,224 m (10,578 feet) above sea level, the lake is located above the tree line, 
                    and is one of the highest lakes in Pakistan.About 9 kilometres (5.6 mi) north of Naran,in the northern 
                    part of Kaghan Valley. Malika Parbat, the highest peak in the valley is near the lake.
                    The lake is accessible from the nearby town of Naran during the summer season but access during winter is 
                    limited, as heavy snowfall and landslides threaten to cutoff the lake from other regions.</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Gali.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-3.jpg" alt=""> */}
                  <h3>Ratti Gali Lake</h3>
                  <p>The Ratti Gali lake is alpine glacial lake in Neelum Valley Azad Kashmir, 
                    Pakistan at a height of 3700m ( 12130 feet). It is surrounded by glaciers 
                    almost all the year and these glaciers are the source of water in the lake.
                    The road to its base camp is open usually from 1st week of August to mid 
                    October at the most. You have to stay either at Keran or Dewarin on Neelum 
                    road and have to hire a 4X4 vehicle to get there Or can stay at the base camp also.
                    There are camps available on rent at base camp and one can use his/her own camp
                    also as there is camping sites available. The bikers can also go up to base camp.
                    The reasonable food and water is available at the base camp.The wash rooms are
                    also available but not very clean . There are no wash rooms uphill after the base camp.
                    From base camp to reach the lake, there are two options i:e either to go on horses or hike.
                    The ride is about 25 minutes and the hike is about one hour on average. 
                    The traveling time from Keran to base camp is about 2.5 hours.
                    There are hawkers on the lake providing tea, kashmiri qahwa and cold drinks and
                   are very vigilant on cleanliness of the area. The beauty of lake is mesmerizing 
                    especially when there are wild flowers all around. There are no other activities
                    except sight seeing . One must spent at least one hour there and enjoy the calmness of the area. 
                    There is hiking tract from Ratti gali towards Kaghan / Naran valley which touches at Browai on that side.
                     There are about 5 lakes on this tract.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Upper.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-4.jpg" alt=""> */}
                  <h3>Upper Kachura Lakes  کچورہ جھیل </h3>
                  <p>It has been twice that i visited this place and everytime it gave an 
                    unforgettable experience.A beautiful lake, preserved its natural beauty as it is,
                     gives one of the most scenic views that one may have experienced.Boating is one 
                     of the main activities. Complete boat can be booked for 2000 rupees (around $15).
                     A place called Nazara Hotel is just a small hike away from lake. Its peaceful place
                      which serves the trout fish. Fish and view of the lake is the prize of this hotel 
                      that is worth every penny.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/chitta.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-6.jpg" alt=""> */}
                  <h3>Chitta Katha Lake</h3>
                  <p>Chitta Katha Lake is an alpine lake located in Shounter Valley, Azad Kashmir, Pakistan. 
                    It is located at the elevation of 13,500 feet (4,100 m).
                    This lake is sacred for Hindus, as they consider this lake an abode of Shiva</p>
                  
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

export default Lakes