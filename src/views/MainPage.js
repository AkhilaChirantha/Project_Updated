import React from 'react'
import { Box, Button } from '@mui/material'
import ResponsiveAppBar from '../component/CustomeAppBar'


function MainPage() {


  
      
  return (
    <>
    <ResponsiveAppBar/>

    

            <div style={{display:'flex', justifyContent:'space-evenly'}}>
              
               
            
            <img src='ab.jpeg' style={{width:'400px', height:'400px', margin:'50px', border:'7px double blue'}}/>

               <div style={{ display:'flex',justifyContent:'space-evenly', alignItems:'center', gap:'30px' }}>
                   <img src="logo.png" style={{width:'170px', height:'170px', }}/>

                  <div style={{ display:'inline'}}>
                    <div style={{fontFamily:'Aclonica',color:'lime',  fontSize:'60px'}}>Y N A P</div>
                    <div style={{fontFamily:'Aclonica',color:'blue',  fontSize:'30px',}}>Learning System</div>
                </div>
                </div>
            </div>  

                       
            

   <Box sx={{width:'780px', height:'400px', border:'2px solid yellow', alignContent:'center', textAlign:'center'}}>
      <div style={{fontFamily:'Chalkboard', fontSize:'25px',}}>
          Our goal is to help parents find the right classes for their children and
          We want to make it easy for parents and students to choose classes that 
          fit their needs and interests.Our website will have easy-to-use features
          to help with this. We'll also have tests and assessments to track how well
          students are doing. Students will be able to choose their own teachers,
          making sure they feel comfortable and respected.
      </div>
      <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#DBF0F6',marginTop:'40px',}} >
                <a href='/sign' style={{textDecoration:'none', paddingTop:'4px'}}>Join with Us</a> 
            </Button>
    </Box>

            


                

    </>
  )
}

export default MainPage
