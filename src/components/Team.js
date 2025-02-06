import React from 'react'
import TeamCard from './TeamCard'
import './Team.css'
import CoreCard from './CoreCard';
import Rathan from '../assets/Rathan.png'
import Hardhik from '../assets/HardhikGupta.png'
import Ramesh from '../assets/Ramesh.png'
import Bhavesh from '../assets/BhaveshGayakwaad.png'
import Preeti from '../assets/PreethiKambale.png'
import Amrit from '../assets/AmritPrakash.png'
import Hemesh from '../assets/HemeshSahu.png'
import Prashant from '../assets/Prashanth.png'
import Sumanth from '../assets/KummariSumanth.png'
import Abhudaya from '../assets/AbhudayaSIngh.png'
import Balaji from '../assets/Bajali.png'
import Kartheek from '../assets/AnnepuKartheek.png'
import Ankita from '../assets/Ankita.png'
import Madeen from '../assets/ShaikMadeenShah.png'

const cores_creatives=[{'Princy':'CSE'},{'Sathwik':'Mech'},{'Harsha Sri':'CSE'},{'Kavya':'Mech'},{'Naveen':'CSE'},{'Sai Chaturved':'Mining'},{'Sushant':'Elec'},{'Syam Susheel':'Mining'},{'Thrushank':'Elec'},{'KL Vignesh':'Mech'},{'Thalaji Prathap':'Mech'},{'K Dinesh':'ECE'},{'M Prithvi Naidu':'Chem'}]

const cores_em = [
  { "Segji Bhuvan": "Biotech" },
  { "Amarnath": "Civil" },
  { "K R Karthik": "Biotech" },
  { "Mohith": "Civil" },
  { "Hari Sai": "CSE" },
  { "Jaswanth": "CSE" },
  { "Dixita": "Chemical" },
  { "Lokesh": "CSE" },
  { "Rithwik": "ECE" },
  { "Santhosh Sagar": "CSE" },
  { "Deepasritha":"CSE"},
  { "Ritik Raj":"MME"},
  { "Pavan":"Mechanical"},
  { "Vikas":"MME"}
];
const cores_pr = [
  { "Dheerendra Singh": "Biomed" },
  { "Shruti Tembhre": "CSE" },
  { "Aman Agrawal": "Chemical" },
  { "Dev Narain Pandey": "Electrical" },
  { "Vaibhav Singh": "Civil" },
  { "Swatantra Mohanty": "Mechanical" }
];
const  cores_spons_doc=[
  {" Vipin Sahu":"BioMed"},
  {"Anshu Laurens":"Electrical"},
  {"Ashutosh Nirala":"Biotech"},
  {"Anay Tondar":"Mechanical"},
  {"Sushanth Singh":"Civil"},
  {"Rahul Kumar Singh":"Mining"},
  {"Hardhik Singh":"Civil"},
  {"Rahul Yadav":"MME"},
  {"Vaishnavi Mahale":"Civil"},
  {"Vivek Kumar":"MME"},
  {"Husita Patel":"Civil"},

]

const exe_design = [
  {'Aman Verma': 'Biotech'},
  {'Shubham Kumar': 'Biotech'},
  {'Nirjala Jeeyalal': 'Chemical'},
  {'Pranay Rupavath' : 'MME'},
  
  ];

 
  const exe_em_doc_1 = [
    { 'Megavath Sreedhar': 'Biomed' },
    { 'Bharath': 'CSE' },
    { 'Shivam': 'Biomed' },
    { 'Durga Prasad': 'CSE' },
    { 'Mandal Mukund': 'Biotech' },
    { 'Hemant K Gupta': 'Biotech' },
    { 'Siva Priya': 'Biotech' },
    { 'Karthik': 'Biotech' },
    { 'Krishna': 'Chemical' },
    { 'Tejaswini': 'CSE' },
    { 'Ashish Patel': 'Civil' },
    { 'Deekshitha': 'CSE' },
    { 'Vamshi': 'Civil' },
    { 'Tejaswini': 'Civil' },

  ];
  const exe_em_doc_2=[
    { 'Vardhini': 'CSE' },
    { 'Madhuri': 'CSE' },
    { 'Karthik Teja': 'CSE' },
    { 'Vijay': 'ECE' },
    { 'Urvi Patel': 'Biomed' },
    { 'Hemanth Borugala': 'ECE' },
    { 'Gnana Sree': 'ECE' },
    { 'Krishneshwar': 'Electrical' },
    { 'Avinash': 'Electrical' },
    { 'Prabhas': 'Electrical' },
    { 'Sucharita': 'Electrical' },
    { 'Raghvendra Pratap': 'Electrical' },
    { 'Ramteja': 'Mining' },
    { 'Harika': 'IT' },
  ]
  const exe_em_doc_3=[
    { 'Bindu': 'IT' },
    { 'Bojanapalli Vyshnavi': 'IT' },
    { 'Sathvik': 'Mechanical' },
    { 'Surya Gowtham': 'Mechanical' },
    { 'Sahithi': 'Mechanical' },
    { 'Swarupa': 'Mechanical' },
    { 'Aman Soni': 'Mining' },
    { 'Krishna Mahawar': 'Mining' },
    { 'Inder': 'Mining' },
    { 'Bharadwaj': 'Mining' },
    { 'Siddharth Swaroop': 'MME' },
    { 'Nithin Naik': 'Mechanical' },
    { 'Abhisant': 'Mining' },
    { 'Chandrashekar' : 'MME'},
  ]

  const exe_pr=[
    { 'Umashankar Sahu': 'Biotech' },
    { 'Hasan Ashraf': 'CSE' },
    { 'Aman Agarwal': 'Chemical' },
    { 'Adithya': 'ECE' },
    { 'Kuldeep Sahu': 'Civil' },
    { 'Atul Chaudary': 'IT' },
    { 'Tanmay Gupta': 'Civil' },
    { 'Abinav Pandey': 'Mech' },
  ]
  

  const exe_creatives_1 = [
    { 'Mohit': 'Archi' },
    { 'Priya Vedha': 'Biomed' },
    { 'Radhika Rathod': 'Biomed' },
    { 'Aman Mishra': 'Biotech' },
    { 'Nirjala Jeeyalal': 'Chemical' },
    { 'Roshan': 'Chemical' },
    { 'Ritesh': 'Chemical' },
    { 'Samriddhi Soni': 'Civil' },
    { 'Anushka Shingote': 'Civil' },
    { 'Abhishek Verma': 'Mech' },
  ];
  
  const exe_creatives_2 = [
    { 'Nischel': 'CSE' },
    { 'Luthik': 'CSE' },
    { 'Rishika': 'CSE' },
    { 'Varshini': 'CSE' },
    { 'Koushik': 'ECE' },
    { 'Pavani': 'Electrical' },
    { 'Akshay': 'Electrical' },
    { 'Vagmin': 'IT' },
    { 'Harsha': 'IT' },
    { 'Aniket Singh': 'Mech' },
  ];

  const exe_creatives_3 = [
    { 'Lahitha': 'IT' },
    { 'Sushanth': 'IT' },
    { 'Chaitna': 'IT' },
    { 'Sai Ganesh': 'Mechanical' },
    { 'Sri Lakshman': 'Mechanical' },
    { 'Upendra': 'Mechanical' },
    { 'Rajiv': 'Mechanical' },
    { 'Deepti': 'Mining' },
    { 'Nagesh': 'Mining' },
    { 'Krishna Manhawar': 'Mining' },
  ];
  const exe_creatives_4 = [
    { 'Himanshu Singh': 'Mech' },
    { 'Parag Aggarwaal': 'Mining' },
    { 'Jitendra Kumar Sahu': 'Mech' },
    { 'Sadha Harshini': 'MME' },
    { 'Ayush Mishra': 'Meta' },
  ];
  const exe_spons = [
    { 'Akash Gupta': 'Biomed' },
    { 'Neeraj Verma': 'Chemical' },
    { 'Aryan Singh': 'Civil' },
    { 'Piyush Nigam': 'Civil' },
    { 'Arpit Mishra': 'Civil' },
    { 'Kuldeep Sahu': 'Civil' },
    { 'Asish Patel': 'Civil' },
    { 'Manish Agarwal': 'Mechanical' }
  ];
  
export default function Team() {
  return (
    <div className="complete">
   <div className="main">
  <h1 className="animated-text">Our Team</h1>
</div>


    <div className="heads">
      <div className="title">
        <h1 className="animated-text">Head Coordinators</h1>
      </div>
    <div className="cardx-container">
      <TeamCard name="Rathan" 
      domain="Event Management" 
      branch="Computer Science and Engineering" 
      image={Rathan} 
      insta='https://www.instagram.com/rathan_07/' 
      ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />
      


      
      <TeamCard name="Hardhik Gupta"
       domain='Sponsorship'
        image={Hardhik}
        branch='Biotechnical Engineering'
        insta='https://www.instagram.com/hardikgupta___'
        ln='https://www.linkedin.com/in/hardik-gupta-54087521b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        />


      <TeamCard  name='Ramesh' 
      domain='Event Management'
      image={Ramesh}
      branch='Metallurgy and Materials Engineering'
      insta='https://www.instagram.com/ramesh_ram_036'
      ln='https://www.linkedin.com/in/bhukyaramesh036'
      />


      <TeamCard name ='Bhavesh'
       domain='Documentation'
       image ={Bhavesh}
       branch='Biomedical Engineering'
       insta='https://www.instagram.com'
       ln='https://www.linkedin.com/in/bhavesh-gayakwad-23a8b61a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
       />

      <TeamCard name='Preeti Kambale'
       domain='Event Management'
        image={Preeti}
        branch=''
        insta=''
        ln=''
        />
      <TeamCard  name='Amrith Prakash' 
      domain='Sponsorship' 
      image={Amrit}
      branch='Metallurgy and Materials Engineering'
      insta='https://www.instagram.com/iamrit_prakash?igsh=dzVxYnRtMGdsNndl'
      ln='https://www.linkedin.com/in/amrit-prakash-3b3410233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      />

      <TeamCard  name='Hemesh Sahu'
       domain='Design& Editing'
        image ={Hemesh}
        branch='Biotechnology'
        insta='https://www.instagram.com/hemesh.not.himesh?igsh=cmVuajMyMGF3dHh3'
        ln='https://www.linkedin.com/in/hemesh-sahu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        />


      <TeamCard name='Prashanth' 
      domain='Creatives'
      image={Prashant}
      branch=''
      insta=''
      ln=''
      />

      <TeamCard name='Kummari Sumanth'
       domain='Design& Video Editing'
        image={Sumanth}
        branch='Biomedical Engineering'
        insta='https://www.instagram.com/kummarisumanth_/'
        ln='https://www.linkedin.com/in/kummari-sumanth-3892a1232/'
        />


      <TeamCard name='Abhudaya Singh' 
      domain ='Public Relations'
      image={Abhudaya}
      branch=''
      insta=''
      ln=''
      />


      <TeamCard name ='Balaji'
       domain='Event Management'
       image={Balaji}
       branch='Mining Engineering'
       insta='https://www.instagram.com/call___me___balu?igsh=MWhlYndtczduMzZldQ=='
       ln='https://www.linkedin.com/in/balaji-gopavarapu-642bbb298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
       />
       


      <TeamCard name='Annepu Kartheek' 
       domain='Creatives' 
       image={Kartheek}
       branch='Biotechnology'
       insta='https://www.instagram.com/annepu.kartheek?igsh=MWU2eno5MGRkcm1kNQ%3D%3D&utm_source=qr'
       ln='https://www.linkedin.com/in/kartheek-annepu-340328228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
       />




      <TeamCard name='Ankita'
        domain='Public Relations'
        image={Ankita}
        branch='Master of Computer Applications (MCA)'
        insta='https://www.instagram.com/ankitaaww__?igsh=ZjZsa2RvMWxoMzg0'
        ln='https://www.linkedin.com/in/ankita-51b38432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        />




      <TeamCard name='Shaik Madeenshah'
       domain='Creatives'
        image={Madeen}
        branch=''
        insta=''
        ln=''
      />

    </div>
    </div>


    <div className="cores">
      <div className="title">
        <h1 className="animated-text">Core Coordinators</h1>
      </div>
    <div className="core-container">
      <CoreCard domain='Creatives & Design' cores={cores_creatives}/>
      <CoreCard domain='Event Management' cores={cores_em} />
      <CoreCard domain='Public Relations' cores={cores_pr}/>
      <CoreCard domain='Sponsorship & Doc' cores={cores_spons_doc}/>
    </div>
    </div>



<br></br>
<br></br>
<br></br>
    <div className="executives">
      <div className="title">
        <h1 className="animated-text">Executives</h1>
      </div>
      
    <div className="core-container">
    <CoreCard domain='Technical'
       cores={[{'Arshad':'IT'}]}
       />
    <CoreCard domain='Design and Editing' 
    cores={exe_design}/>
      <CoreCard  domain='Documentation and Event Management-I'  
      cores={exe_em_doc_1}/>
       <CoreCard  domain='Documentation and Event Management-II'  
      cores={exe_em_doc_2}/>
         <CoreCard  domain='Documentation and Event Management-III'  
      cores={exe_em_doc_3}/>
      <CoreCard domain='Public Relations' cores={exe_pr}/>
      <CoreCard domain='Creatives-I'
      cores={exe_creatives_1}
       />
        <CoreCard domain='Creatives-II'
        cores={exe_creatives_2}
       />
        <CoreCard domain='Creatives-III'
        cores={exe_creatives_3}
       />
        <CoreCard domain='Creatives-IV'
        cores={exe_creatives_4}
       />
       <CoreCard domain='Sponsorship'
       cores={exe_spons}
       />
       


    </div>

    </div>

    </div>
  )
}
