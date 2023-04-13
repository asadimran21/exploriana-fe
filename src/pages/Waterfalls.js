import React from 'react'
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from "../Navbar"



const Waterfalls = ({setLoginUser}) =>  {
    
  return (
    <div>
      <Navbar setLoginUser={setLoginUser} />
    <div className="waterfalls" id="home">
    <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/water.jpg')" }} >
        {/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
            <div className="content">
                <span style={{color:"white"}}>Waterfalls you want to</span>
                <h3> explore</h3>
                
            </div>
        </div>
      </section>
      
    <div style={{marginTop: "40px"}}>
      <section className="blogs" id="blogs">
      <div>
      <h1 className="heading"> Know About your favourite Waterfalls </h1>
      <Grid container spacing={7}>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/mantoka.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-1.jpg" alt=""> */}
                  <h3>Manthokha Waterfall منٹھق چھوپھیار</h3>
                  <p>Manthokha Waterfall is a waterfall located in Kharmang Valley, Skardu, Gilgit-Baltistan,the extreme northern region of Pakistan. This waterfall is approx 180 feet high from ground, and located almost 80 kilometres (50 mi) away from downtown Skardu.The waterfall is a mystic place featuring lush green pastures,fresh gurgling streams, towering rocky mountains of Karakorum and indigenously designed restaurants and much more. The main highlight of the restaurant is the local trout fish, apart from the waterfall another worthy feat is the fish farm where trout fishes are kept for the sightseers. if you are planning to visit the beautiful waterfall learn more about it at</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper><div className="slide">
                <img src={require('../images/jamgar.png')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-2.jpg" alt=""> */}
                  <h3>Jamgar Waterfall(Neelum Valley)</h3>
                  <p>Jamgar Falls is a beautiful and refreshing waterfall of Pakistan located in Neelam Valley. The surroundings make the waterfall even more appealing. It falls in a form of stepping from the height of soaring hills. You can enjoy looking at Jamgar waterfall from the beautiful valley of  Azad Kashmir .The surroundings make the waterfall even more appealing. It falls in a form of stepping from the height of soaring hills. You can enjoy looking at Jamgar waterfall from the beautiful valley of Azad Kashmir which spreads on an area of 200 kilometers.</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/noori.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-3.jpg" alt=""> */}
                  <h3>Noori Waterfall</h3>
                  <p>Noori Waterfall is a waterfall located in Tial village, Haripur District of Khyber Pakhtunkhwa province of Pakistan. It is located about 85 kilometres (53 mi) away from city of Islamabad. The waterfall is approximately 10 feet in height. The waterfall is located in an open cove like formation on the side of a hill. The waterfall is small in height and has a clear blue water stream. The cove is filled with waist deep water with a sandy floor which is deeper on the edges. The fall gained popularity after a YouTube video of it went viral in the summer of 2020. The waterfall claimed the life of an 18 year old boy when he dived into the waterfall and  got stuck under deeper part of the waterfall.[1] The locals have also set up a parking for the tourists to encourage business. Life jackets are available for rent on spot by the locals. The waterfall is located 15 minutes hike from the parking spot. Only a single way road passes though the village which can create issue if traffic comes both ways.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/umbrella-.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-4.jpg" alt=""> */}
                  <h3>Umbrella Waterfall </h3>
                  <p>Umbrella Waterfall is a waterfall located in the Sajikot area of Abbottabad District. It has recently emerged as a new tourist attraction in the KPK province of Pakistan. The waterfall is located 27 Kilometers from Havelian. To reach the waterfall,  you have to hike down about 30 to 45 minutes from the village of Poona. The Umbrella Waterfall is on the same road where the famous Sajikot Waterfall is located. Umbrella Waterfall became a tourist attraction when a youtube channel, 'Shams Shaukat films' posted a vlog of umbrella waterfalls as world's most beautiful waterfall and it went viral on the internet.After that video went viral, many other YouTubers of Pakistan visited the place and covered the waterfall.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Kiwai.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-5.jpg" alt=""> */}
                  <h3>Kiwai Waterfall: A Beautiful Place To Visit</h3>
                  <p>The beautiful village of Kiwai is part of the Mansehra District of Khyber Pakhtunkhwa province in Pakistan. It is located on the way to Kaghan Valley and can be accessed by passing through Shogran.Most travelers choose this route because this has many attraction points to visit. It’s one of the first stops when you go to naran and kaghan. Most people love to take half-hour rest in Kiwai. In this blog, we try to cover some points that you need to know about Kiwai waterfall.Let’s start the route from Islamabad, most of the tour guide and traveler groups start their journey from here.Starting from motorway via Abbotabbad and Mansehra you can reach balakot and the next stop will be kiwai. Usually people start their tour at midnight, it takes about 4 hours to reach Kewai, so they reached to Kiwai waterfall at 6-7 am and have breakfast at the beautiful location, where you can sit with your family in a peaceful environment.There are a lot of hotels and restaurants here which offer delicious food but their charges are higher. Like this one of the most famous spots, some people went for a hangout for one day they choose Kiwai.</p>
                  
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

export default Waterfalls