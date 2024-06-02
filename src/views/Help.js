import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashNav from '../component/DashNav';
import SideNav from '../component/SideNav';
import { Button, TextField } from '@mui/material';
import { CiFacebook, CiInstagram, CiMail, CiTwitter } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import { PiFacebookLogoThin, PiInstagramLogoThin, PiTwitterLogoThin, PiWhatsappLogoThin } from 'react-icons/pi';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Help() {
  return (
    <Box sx={{ flexGrow: 1, padding:'100px',background:'white'}}>
      <Grid container spacing={2}>


        <Grid item xs={3}>
          <Item>
            <DashNav/>
          </Item>
        </Grid>






        <Grid item xs={6} style={{paddingTop:'100px'}}>

          <Item sx={{fontFamily:'Chalkboard'}}>
          
        
             <div style={{fontSize:'30px', display:'flex', justifyContent:'center'}}>Get help with 'Y N A P' Learning System...</div>
                <div style={{fontSize:'20px' , display:'flex', paddingTop:'20px'}}>Shere any problem,feedback you have</div>
                <div style={{fontSize:'20px', paddingTop:'20px', display:'flex'}}>Send us a massege</div>
            
             
      
      
      
<div style={{display:'flex',gap:'10px',  paddingTop:'50px', justifyContent:'space-evenly'}}>
     
      <TextField id="name"  label="Name" style={{width:'355px', height:'60px'}}/>
      <TextField id="Email" label="Email"  style={{width:'355px', height:'60px'}} />
      
</div>

<div style={{display:'flex', justifyContent:'center', paddingTop:'10px',}}>
      <TextField id="name" label="Subject" style={{width:'720px', height:'60px'}}/>
      
  </div>

  <div style={{display:'flex', justifyContent:'center', paddingTop:'10px',}}>
      <TextField id="name" label="Massage" style={{width:'720px', height:'60px'}}/>
      
  </div>


  <div style={{display:'flex', justifyContent:'end',paddingTop:'10px' }}>
                    <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#A9F7AE'}} >
                      <a href='/sign' style={{textDecoration:'none',}}>Submit</a> 
              
                    </Button>
                    </div>
  


  <Box
      height={200}
      width={200}
      my={4}
      mx={9}
      display="flex"
      p={2}
      sx={{ border: '2px solid grey',width:'484px',height:'280px',
      borderRadius:'10px',backgroundColor:'#D9D9D9'}}
    >
      <div style={{display:'inline'}}>

      <div style={{fontSize:'30px', justifyContent:'start'}}>Contact Information</div> 
      <div style={{fontSize:'20px',paddingTop:'20px'}}>You can contact the support and give<br/> feedback from the from on top.</div>

      
        <div style={{display:'flex', gap:'10px', alignContent:'center',paddingTop:'20px' }}><CiMail style={{fontSize:'30px'}}/> ynap@gmail.com</div>
      
      
      
      <div style={{color:'red',display:'flex',gap:'30px',marginTop:'10px',fontSize:'30px' ,justifyContent:'space-evenly', paddingLeft:'140px'}}>
         <PiFacebookLogoThin />
         <PiTwitterLogoThin  />
         <PiWhatsappLogoThin  />
         <PiInstagramLogoThin />
      </div>
      </div>

      
     
    </Box>
 
 
       

      
  
     
    
            
          </Item>
        </Grid>


        <Grid item xs={3} style={{paddingTop:'100px'}}>
          <Item>
            <SideNav/>
          </Item>
        </Grid>







      </Grid>
    </Box>
  );
}
