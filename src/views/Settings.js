import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CiMail } from "react-icons/ci";
import { PiFacebookLogoThin } from "react-icons/pi";
import { PiTwitterLogoThin } from "react-icons/pi";
import Avatar from '@mui/material/Avatar';
import StudentProfile from '../component/DashNav';
import SideNav from '../component/SideNav';
import { PiWhatsappLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 75,
  height: 100,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  
}));

export default function Settings() {
  return (
    <Box sx={{ flexGrow: 1, padding:'100px',background:'white'}}>



      <Grid container spacing={2}>
        <Grid item xs={3}>

          <Item>
           <StudentProfile/>
          </Item>
        </Grid>





        <Grid item xs={6} style={{paddingTop:'100px', }}>

          <Item>
      
          <div style={{fontFamily:'Papyrus'}}>


            <div style={{textAlign:'left',fontSize:'20px', paddingTop:'50px'}}>Theme Setting </div>



            <div style={{display:'flex', gap:'10px', justifyContent:'space-evenly',paddingTop:'50px'}}>

              <div style={{display:'inline'}}>

              <Box style={{ width:'150px', height:'100px'}}>


              
                  
                  
                  <div style={{display:'flex', gap:'0px'}}>                                    
                    <Box style={{border:'1px solid red', width:'75px', height:'100px'}}>
                    
                        <Button sx={{width:'75px', height:'100px'}}>
                        <CiLight style={{fontSize:'40px'}}/>
                        </Button>
                    </Box>
                    
                    <Box style={{border:'1px solid red', width:'75px', height:'100px', backgroundColor:'gray'}}>
                        <Button sx={{width:'75px', height:'100px'}}>
                        <CiDark style={{fontSize:'30px', color:'white'}}/>
                        </Button>
                    </Box>
                   
                    
                </div>
                

              </Box>
              <div style={{paddingTop:'20px',textAlign:'center', justifyContent:'center'}}>System <br/> Default</div>
              </div>
              

              <div style={{display:'inline'}}>

              <Box style={{border:'1px solid red', width:'150px', height:'100px', }}>
              <Button sx={{width:'150px', height:'100px'}}>
              <CiLight style={{fontSize:'40px', textAlign:'center', justifyContent:'center'}}/>
              </Button>
              </Box>
              <div style={{paddingTop:'20px',textAlign:'center', justifyContent:'center' }}>Light <br/> Mode</div>
              </div>




              <div style={{display:'inline'}}>
              <Box style={{border:'1px solid red', width:'150px', height:'100px', backgroundColor:'gray'}}>
              <Button sx={{width:'150px', height:'100px'}}>
              <CiDark style={{fontSize:'30px', color:'white'}}/>
              </Button>
              </Box>
              <div style={{paddingTop:'20px',textAlign:'center', justifyContent:'center'}}>Dark <br/>Mode</div>
              </div>

            </div>








        





  

    <hr style={{width:'80%' ,height:'1px',backgroundColor:'gray', marginTop:'30px'}}/>


    <div style={{fontSize:'20px', paddingTop:'30px', textAlign:'start'}}>
    Account Setting 
    </div>

    <div style={{fontSize:'15px',display:'flex', justifyContent:'center', paddingTop:'60px', }}>
      <div>Change Profile Picture</div>
        


        
<div style={{display:'inline', }}>
        <Avatar src="com.laknaidriapps.girlscartoon-75f60f39-19e6-4ebf-ab92-2e30a3e8797b.jpg"
         style={{width:'120px', height:'120px',marginLeft:'80px', marginTop:'-50px',border: '2px dashed lime'}}/>

          <div style={{display:'flex', gap:'10px', paddingLeft:'60px', paddingTop:'15px'}}>
            <Button style={{backgroundColor:'#D9D9D9',height:'30px'}}>Change</Button>
          <Button style={{backgroundColor:'#D9D9D9',height:'30px'}}>Cancle</Button> 
          </div> 
    </div>
    </div>

    

    

    <div style={{fontSize:'15px',display:'flex', justifyContent:'space-evenly', paddingTop:'60px', 
    alignItems:'center', }}>
      Change User Name
      
  
       <TextField id="name" style={{width:'250px', height:'60px'}}/>
       
    


    
        </div>

<div  style={{display:'flex', gap:'10px', paddingLeft:'364px', paddingTop:'15px'}}>
  
      <Button style={{backgroundColor:'#D9D9D9',height:'30px'}}>Change</Button>
      <Button style={{backgroundColor:'#D9D9D9',height:'30px'}} >Cancle</Button>
   
    </div>


    

    <Box
      height={200}
      width={200}
      mx={9}
      my={4}
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

          </div>
        
   
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
