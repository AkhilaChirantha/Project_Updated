import React from 'react'
import ResponsiveAppBar from '../component/CustomeAppBar'
import BottomNavBar from '../component/BottomNavBar'
import { Box } from '@mui/material'

function Blog() {
  return (
    <>
    <ResponsiveAppBar/>

    <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'80px'}}>

    <Box sx={{width:'650px' , height:'418px', fontFamily:'Chalkboard', borderRadius:'30px', textAlign:'center'}}>
        <div style={{fontFamily:'', fontSize:'24px', paddingTop:'30px',}}>
        Our goal is to help parents find the right classes <br/>
        for their children and  We want to make it easy for <br/>
        parents and students to choose classes that fit their <br/>
        needs and interests.<br/><br/>
 
        Our website will have easy-to-use features to help <br/>
        with this. 
        <br/><br/>
              We'll also have tests and assessments to track how <br/>
        well students are doing. Students will be able to <br/>
        choose their own teachers, making sure they feel <br/>
        comfortable and respected. 
        </div>
        </Box>

        
          <img src='aa.jpg' style={{width:'500px' , height:'418px'}}/>
     
        
    </div>


    <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'100px'}}>

    <img src='aa.jpg' style={{width:'500px' , height:'418px'}}/>

    <Box sx={{width:'650px' , height:'418px', fontFamily:'Chalkboard', textAlign:'center'}}>

      <div style={{fontFamily:'Chalkboard', fontSize:'40px',paddingTop:'80px'}}>Our Tutors</div>
        <div style={{fontFamily:'', fontSize:'24px', paddingTop:'30px',}}>
        Everyone in the team plays an important part<br/>
         tutoring coordinators, Graduate Lecturers,<br/>
         qualified teachers.  Our common goal is to<br/>
          create a pleasant environment for tutoring in<br/>
           which everyone achieves excellent results.<br/>
        </div>
        </Box>   
    </div>


    <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'100px'}}>



<Box sx={{width:'650px' , height:'418px', fontFamily:'Chalkboard', textAlign:'center'}}>

  <div style={{fontFamily:'Chalkboard', fontSize:'40px',paddingTop:'80px'}}>Our Traget Audience</div>
    <div style={{fontFamily:'', fontSize:'24px', paddingTop:'30px',}}>
    The target audience for this innovative <br/>
application includes parents who are <br/>
seeking supplemental tuition services <br/>
for their children and students <br/>
who require additional academic support<br/>
 to excel in competitive educational <br/>
environments.
    </div>
    </Box>   
    <img src='aa.jpg' style={{width:'500px' , height:'418px'}}/>
</div>
    
    <BottomNavBar/>
      
    </>
  )
}

export default Blog
