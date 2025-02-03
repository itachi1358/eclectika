import React from 'react'
import Card from './Card'
import './Megaevents.css'
import idolImage from '../assets/eclectika_idol.png';
import avirbhan from '../assets/avirbhan.png';
import allure from '../assets/allure.png';
import goonj from '../assets/goonj.png';
import kalopsia from '../assets/kalopsia.png';
import tafree from '../assets/tafree.png';
import clashofchoreos from '../assets/clashofchoreos.png';


export default function Megaevents() {
  return (
    <div className='Mega'>
        <div className="title-container">
        <h1 className='title'>Mega Events</h1>
        </div>  
        <div className="container">


        <Card name="Eclectika Idol" link='https://forms.gle/fEDvRzLHwQ1Y8NF6A'   date='Feb 8th' content="Talented voices weave a symphony of passion and skill. Witness a vocal battleground, where every note is a step closer to musical greatness" image={idolImage}/>



        <Card name="Clash Of Choreos" link='https://docs.google.com/forms/d/e/1FAIpQLSedCXjZeCP2oKEk1ovRnwaEerdSRk0idV3aPRqcK36B8uROYA/viewform' date='Feb 9th' content="Experience a dance spectacle like never before, where beats collide and movements become a language of their own."  image={clashofchoreos} />



        <Card name="Tafree" date='Feb 7th'  link ='https://forms.gle/DDAsLZs3vLodmyHv8'content="Our stand-up maestros are geared up ot unleash a storm of hilarity, ensuring a show packed with wit, humor, and unstoppable laughs." image={tafree}/>


        <Card name="Goonj" date='Feb 8th' link='https://forms.gle/yr1v343sqHmeyn3D6' content="Participants wield colors like magic, turning the human canvas into a living masterpiece, unveiling a mesmerizing fusion of creativity." image={goonj}/>


        <Card name="Allure" date='Feb 9th' link='https://forms.gle/EdqFR3ruJW1mHMFH6'content="Gear up for a runway extravaganza where participants flaunt their stunning attires, exhibiting a dazzling showcase of elegance." image={allure}/>


        <Card name="Avirbhav" date='Feb 7th' link='https://forms.gle/TH6Xh3Qf5TMv9xi5A' content="Musical prowess meets passion, turning the stage into a mesmerizing landscape of guitar riffs, drum beats and pure instrumental magic."  image={avirbhan}/>


        <Card name="Kalopsia" date='Feb 7th' link='https://forms.gle/s59RFMALgsQh2odb8' content="Musical prowess meets passion, turning the stage into a mesmerizing landscape of guitar riffs, drum beats and pure instrumental magic."  image={kalopsia}/>

        
        </div>
    </div>
  )
}
