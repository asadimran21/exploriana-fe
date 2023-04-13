import React from 'react'
import '../style.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from "../Navbar"



const Valleys = ({setLoginUser}) =>  {
    
  return (
    <div>
      <Navbar setLoginUser={setLoginUser} />
    <div className="valleys" id="home">
    <section className="home" id="home">
        <div className="box" style= {{backgroundImage: "url('images/gallery-img-4.jpg')" }} >
        {/* style="background: url(images/home-bg-1.jpg) no-repeat;" */}
            <div className="content">
                <span style={{color:"Black"}}>Valleys you want to</span>
                <h3> explore</h3>
                
            </div>
        </div>
      </section>
      
    <div style={{marginTop: "40px"}}>
      <section className="blogs" id="blogs">
      <div>
      <h1 className="heading"> Know About your favourite Valleys </h1>
      <Grid container spacing={7}>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/kaghan.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-1.jpg" alt=""> */}
                  <h3>Kaghan Valley (Urdu: وادی کاغان)</h3>
                  <p>The Kaghan Valley (Urdu: وادی کاغان) is an alpine valley located in the Mansehra District of Khyber Pakhtunkhwa, Pakistan.The valley covers a distance of 155 kilometres (96 mi) across northern Pakistan, rising from its lowest elevation of 650 m (2,134 ft)to its highest point at the Babusar Pass around 4,170 m (13,690 ft). Landslides triggered by the devastating 2005 Kashmir earthquake destroyed many passes leading into the valley, though roads have since been largely rebuilt. The Kaghan is a highly popular tourist attraction.</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper><div className="slide">
                <img src={require('../images/Hunza.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-2.jpg" alt=""> */}
                  <h3>Hunza Valley ہنزو</h3>
                  <p>The Hunza Valley is a mountainous valley in the northern part of the Gilgit-Baltistan region of Pakistan, formed by the Hunza River, bordering Ishkoman to the northwest, Shigar to the southeast, Afghanistan's Wakhan Corridor to the north, and the Xinjiang region of China to the northeast.The Hunza Valley floor is at an elevation of 2,438 meters (7,999 feet). Geographically, the Hunza Valley consists of three regions: Upper Hunza (Gojal),Central Hunza and Lower Hunza (Shinaki).</p>
                 
            </div></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Naltar.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-3.jpg" alt=""> */}
                  <h3>Naltar Valley  وادی نلتر</h3>
                  <p>The Naltar Valley is a valley situated near the city of Gilgit in Gilgit−Baltistan, Pakistan.Naltar is about 34 kilometres (21 miles) from Gilgit. Naltar Bala (upper) and Naltar Paain (lower) are two villages of Naltar valley. Naltar Paain is at a distance of 34 kilometres (21 miles) and Naltar Bala at 40 kilometres (25 miles) from Gilgit. Naltar Expressway connects Naltar with Gilgit City via Nomal and Faizabad. There is a town known as Nomal between Naltar valley and Gilgit. A road from Nomal goes to 'The Silk Route' to China.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/Gojal.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-4.jpg" alt=""> */}
                  <h3>Gojal گوجال</h3>
                  <p>Gojal (Wakhi: گوجال, Kyrgyz: گۉجال), also called Upper Hunza, is situated in the north western part of Pakistan.It borders China at the Khunjerab Pass, and Afghanistan at the Chapursan valley. In 2019, Gojal Valley became the second Sub-Division within the Hunza District. It is geographically the largest subdivision of the Gilgit-Baltistan.Gojal or Upper Hunza is composed of a number of large and small valleys sharing borders with Central Hunza in the South, China in the north-east, and Afghanistanin the north-west. Aeenabad is the first village of Gojal, Upper Hunza. Except for the Shimshal, Misgar, and Chipursan valleys, all the villages of Gojal, Upper Hunza can be seen from the Karakoram Highway (KKH), which crosses Gojal, entering China at the Khunjerab Pass. The Gojal region has 20,000 Ismaili residents.</p>
                  
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className="slide">
                <img src={require('../images/taobut.jpg')} style={{height:"600px"}}/> 
                  {/* <img src="images/img-5.jpg" alt=""> */}
                  <h3>Neelum  نیلم</h3>
                  <p>The district of Neelum نیلم is the northernmost of 10 districts located within the Pakistani-administered territory of Azad Kashmir.Taking up the larger part of the Neelam Valley, the district has a population of around 191,000 people (as of 2017).[2] It was among the worst-hit areas of Pakistan during the 2005 Kashmir earthquake.The Neelum Valley was known before the partition as Kishanganga and was subsequently renamed for the village of Neelam. It flows from the Gurez Valley in Indian-administered Jammu and Kashmir and roughly follows first a western and then a south-western course until it joins the Jhelum River at Muzaffarabad. The valley is a thickly wooded[citation needed] region with an elevation ranging between 4,000 feet (1,200 m) and 7,500 feet (2,300 m), with mountain peaks on either side reaching 17,000 feet (5,200 m).The Neelum Valley is 144 kilometres (89 mi) long.[6] The Line of Control runs through the valley, either across the mountains to the south-east or in places right along the river, with several villages on the left bank falling on the Indian side of the border</p>
                  
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

export default Valleys