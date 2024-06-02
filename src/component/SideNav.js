import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Calendar from './Calender';


 

export default function SideNav() {
  return (
    <>
    <div >
    <Box
      height={310}
      width={300}
      paddingLeft={2}
      display="flex"
      sx={{ border: '2px solid grey' ,borderRadius:'10px'}}
    >
      <Calendar />
        
     
    </Box>
    

<Box
      height={180}
      width={300}
      marginTop={3}
      display="flex"
      gap={4}
      paddingLeft={2}
      sx={{ border: '2px solid grey', backgroundColor:'lime',borderRadius:'10px'}}
    >
      <div style={{display:'inline',paddingLeft:'210px',  paddingTop:'8px'}}>
        <Button style={{border:'2px solid red', width:'80px', height:'20px', borderRadius:'1px',}}>
      <div style={{fontSize:'10px'}}>Close</div>
    </Button>  
      </div>
    </Box> 
    
    <Box
      height={180}
      width={300}
      marginTop={3}
      display="flex"
      gap={4}
      paddingLeft={2}
      sx={{ border: '2px solid grey', backgroundColor:'orange',borderRadius:'10px'}}
    >
       <div style={{display:'inline',paddingLeft:'210px',  paddingTop:'8px'}}>
        <Button style={{border:'2px solid red', width:'80px', height:'20px', borderRadius:'1px',}}>
      <div style={{fontSize:'10px'}}>Close</div>
    </Button>  
      </div>
       
    </Box> 
    

    <Box
      height={200}
      width={300}
      marginTop={3}
      display="flex"
      alignItems="center"
      gap={4}
      paddingLeft={2}
      sx={{ border: '2px solid grey' ,borderRadius:'10px'}}
    >

      <div style={{display:'inline', paddingLeft:'80px'}}>


        <div  >
              <img src="logo.png" style={{width:'70px'}}/>
        </div>


        <div style={{ fontFamily:'Aclonica',fontSize:'32px', color:'lime'}}>    
             Y N A P 
        </div>


        <div style={{color:'red'}}>    
            Learning System
        </div>


      </div>
   </Box>

    </div>
    
    </> 
    
    );
}