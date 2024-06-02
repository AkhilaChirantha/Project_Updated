import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FaMessage } from "react-icons/fa6";
import BottomNavBar from '../component/BottomNavBar';
import ResponsiveAppBar from '../component/CustomeAppBar';






export default function HeroPage() {
  return (
    <>
    
    <ResponsiveAppBar/>
    
    
    <div style={{display:'auto'}}>

          <div  style={{display:'flex', justifyContent:'center',paddingTop:'80px'}}>

                <img  src="logo.png" style={{width:'120px'}}/>

                <div style={{display:'inline' ,paddingLeft:'50px', fontFamily:'Aclonica',alignContent:'center'}}>
                    <div style={{fontSize:'60px',color:'lime'}}> Y N A P </div>
                    <div style={{fontSize:'23px', color:'blue', paddingLeft:'80px'}}>Learning System</div>
                </div>
          </div>

         

        

<div style={{display:'flex', columnGap:'30px' ,justifyContent:'space-evenly', paddingTop:'80px', fontFamily:'Chalkboard'}}>


<Box sx={{  width:'300px', height:'320px', borderRadius:'20px', backgroundColor:'#DEDFE1'}}>
      <div>
                <div style={{textAlign:'center',paddingTop:'20px' , fontSize:'28px'}}>Tutoring
                <hr style={{height:'4px', backgroundColor:'white', width:'80%', border:'none'}}/>
                </div>

                <ul type = "circle" style={{fontSize:'20px',display:'flex', flexDirection:'column' ,gap:'20px',paddingTop:'35px', paddingLeft:'60px'}}>
                      <li>Math</li>
                      <li>Bialogy</li>
                      <li>Other</li>
                </ul>
              
              </div>
    </Box>

    <Box sx={{ width:'300px', height:'320px',borderRadius:'20px', backgroundColor:'#DEDFE1'}}>
      <div>
          <div style={{textAlign:'center',paddingTop:'20px' , fontSize:'28px'}}>Languages</div>
          <hr style={{height:'4px', backgroundColor:'white', width:'80%', border:'none'}}/>
          
          <ul type="circle" style={{fontSize:'20px',display:'flex', flexDirection:'column' ,gap:'20px',paddingTop:'35px', paddingLeft:'60px'}}>
              <li>Sinhala</li>
              <li>English</li>
              <li>Tamil</li>
          </ul>
          </div>
    </Box>

    <Box sx={{width:'300px', height:'320px',borderRadius:'20px', backgroundColor:'#DEDFE1'}}>
    <div>
          <div style={{textAlign:'center',paddingTop:'20px' , fontSize:'28px'}}>Target</div>
          <hr style={{height:'4px', backgroundColor:'white', width:'80%', border:'none'}}/>
          
          <ul type="circle" style={{fontSize:'20px',display:'flex', flexDirection:'column' ,gap:'20px',paddingTop:'35px', paddingLeft:'60px'}}>
              <li>G.C.E.O/L</li>
              <li>G.C.E.A/L</li>
              <li>Other</li>
          </ul>
          </div>
    </Box>

    <Box sx={{ width:'300px', height:'320px',borderRadius:'20px', backgroundColor:'#DEDFE1'}}>
          <div>
           <div style={{textAlign:'center',paddingTop:'20px' , fontSize:'28px'}}>Online </div>
           <hr style={{height:'4px', backgroundColor:'white', width:'80%', border:'none'}}/>
          
            <ul type="circle" style={{fontSize:'20px',display:'flex', flexDirection:'column' ,gap:'20px',paddingTop:'35px', paddingLeft:'60px'}}>
                <li>The Best Way of the Learning</li> 
            </ul>
          </div>
    </Box>
        </div>
  


    
      <div style={{fontFamily:'Papyrus', fontSize:'31px', textAlign:'center', paddingTop:'70px'}}>Number Of Population</div>

      <div style={{display:'flex',fontFamily:'Papyrus',fontSize:'31px',gap:'20px', justifyContent:'space-evenly',
        paddingTop:'80px',}}>
     <Box sx={{ width:'217px', height:'166px',textAlign:'center', alignContent:'flex-end'}}>
     <div style={{color:'red', fontWeight:'700'}}>- </div>Active <br/>Users
     </Box>

     <Box sx={{ width:'217px', height:'166px',textAlign:'center', alignContent:'flex-end', paddingTop:'40px'}}>
     <div style={{color:'lime', fontWeight:'700'}}>- </div> Satisfied  <br/>Clients
     </Box>

     <Box sx={{ width:'217px', height:'166px',textAlign:'center', alignContent:'flex-end'}}>
     <div style={{color:'red', fontWeight:'700'}}>-% </div>Successfully <br/>Pass
     </Box>
     
     </div>

        

    <div style={{paddingTop:'60px', display:'flex', justifyContent:'space-around'}}>

        <Box sx={{border:'3px solid lime', width:'690px', height:'520px', fontFamily:'Chalkboard', boxShadow:'red'}}>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'60px',gap:'160px'}}>
                  <Box>
                    <img src="nim.jpeg" style={{width:'150px', height:'150px'}}/>
                  </Box>
                  <div style={{display:'inline', }}>
                      <div style={{fontSize:'24px' ,color:'gray'}}>Nimasha Nishadini</div>
                      <div style={{fontSize:'18px', textAlign:'right'}}>Mathamatics tutour</div>
                  </div>
            </div>

            <div style={{fontSize:'14px',textAlign:'justify', padding:'20px'}}>
              Yasith has dedicated his entire life to pedagogical activities 
              as a high school mathematics teacher and an educational counselor. 
              For the second year, he has been offering his years of experience 
              in the school environment and personal life to the clients of ‘Y N A P’. 
              Not only does he like to teach, but he also motivates his students all 
              the time. Yasith prefers an individual and friendly approach, which is 
              why he has chosen the 'Y N A P'. Now he is very happy that he can let 
              the lesson flow and does not have to watch the school bell ring.
            </div>

            <Stack direction="row" spacing={10} justifyContent= {'center'} style={{paddingTop:'40px'}} >
                  <Button sx={{backgroundColor:'#DEDFE1',color:'black', fontSize:'14px' ,fontFamily:'Chalkboard' }}>Previous</Button>
                  <Button sx={{backgroundColor:'#DEDFE1',color:'black', fontSize:'14px' ,fontFamily:'Chalkboard' }}>All Tutors</Button>
                  <Button sx={{backgroundColor:'#DEDFE1',color:'black', fontSize:'14px' ,fontFamily:'Chalkboard' }}>Next</Button>
            </Stack>

        </Box>
      <div style={{display:'inline'}}>
        <div style={{display:'inline', textAlign:'right',fontFamily:'Chalkboard', fontSize:'24px', color:'gray'}}>
            
            <div style={{display:'flex', gap:'30px',paddingLeft:'100px'}}>
                <div>Messages from 
                <div >Tutors</div>
                </div>

                <div style={{paddingTop:'20px'}}>
                  <FaMessage />
                </div>

            </div>
            
        
        </div>

          <div style={{paddingTop:'120px' , textAlign:'center'}}>
          <img src="nim.jpeg" style={{width:'340px', height:'340px', 
          borderRadius:'30px',border:'3px dashed #0ECE89', }}/>
          </div>
        </div>
    </div>

    </div>



    
<div style={{paddingTop:'70px', textAlign:'center'}}>


  
 <Button sx={{color:'black', backgroundColor:'#A9F9AF', fontFamily:'Papyrus'}}>
  <a href='/main' style={{textDecoration:'none'}}> Start Your Journy</a> </Button>
 
 </div>



 

 <BottomNavBar/>


 </>

);
}