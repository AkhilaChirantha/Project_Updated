import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CiMail } from "react-icons/ci";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import ButtonGroup from "@mui/material/ButtonGroup";
import { MdNavigateNext } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Flex, Rate } from 'antd';





const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));


const customIcons = {
  1: <FrownOutlined  />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};








function BottomNavBar() {


  
  return (
    <>
        
        <hr style={{height:'5px',width:'80%', backgroundColor:'rgb(163,155,254)', marginTop:'100px' }}/>

<div style={{fontFamily:'Papyrus',textAlign:'center', paddingTop:'40px'}}>
        <div style={{color:'black',fontSize:'31px'}}> Non-Buiding Contact Form </div>
        <div style={{fontSize:'14px'}}> Based on the completed contact form, we will 
        contact you, answer all your questions, and introduce you to the services of the 'Y N A P' platform.
        <br/>+94 763 765 412 </div>

</div>


<ButtonGroup sx={{ paddingTop:'60px', display:'flex', gap:'30px', justifyContent:'space-evenly',
height:'160px',marginTop:'40px', margin:'50px', backgroundColor:'#F5F4F4'}}>

      <div style={{width:'200px', height:'100px', border:'none', fontFamily:'Chalkboard', fontSize:'22px',
        color:'black', textAlign:'center', cursor:'pointer'
      }}>
      
        <div style={{display:'inline'}}>
          <div>Contact <br/>Information</div>
          <div style={{paddingTop:'20px'}}><IoMailUnreadOutline  size={'30px'} /> </div>
        </div>
        
      </div>
      <Divider orientation="vertical" style={{backgroundColor:'#EAEAEA', width:'1px', height:'100px', justifyContent:'center'}}  />
      

      <div style={{width:'200px', height:'100px', border:'none', fontFamily:'Chalkboard', fontSize:'22px',
         color:'black',textAlign:'center', cursor:'pointer'
      }}>
        
        <div style={{display:'inline'}}>
          <div>Tutoring <br/>Information</div>
          <div style={{paddingTop:'20px'}}><CiViewList  size={'30px'} /> </div>
        </div>
        
      </div>
     
      <Divider orientation="vertical" style={{backgroundColor:'#EAEAEA', width:'1px', height:'100px', justifyContent:'center'}} />
     
      

      <div style={{width:'200px', height:'100px', border:'none', fontFamily:'Chalkboard', fontSize:'22px',
         color:'black',textAlign:'center', cursor:'pointer'}}>
        <div style={{display:'inline'}}>
          <div>Addittional <br/>Information</div>
          <div style={{paddingTop:'20px'}}><IoIosInformationCircleOutline size={'30px'} /> </div>
        </div>
      </div>

    </ButtonGroup>
     


     <div  style={{fontFamily:'Chalkboard', paddingLeft:'50px'}}>
       Who is tutoring for ? 
       <FormControl  >
      <RadioGroup >

        <div style={{paddingLeft:'40px' }}>
          <div >
          <FormControlLabel value="Formyself" control={<Radio />} label="For myself"  />
          <FormControlLabel value="Guradin" control={<Radio />} label="Guardin" />
          </div>

          <div >
          <FormControlLabel value="parents" control={<Radio />} label="Parents" />
          <FormControlLabel value="other" control={<Radio />} label="Other" style={{paddingLeft:'20px'}}/>
          </div>
       </div>
       
     </RadioGroup>
   </FormControl>
   </div>
   
   


     
  <div style={{display:'flex',gap:'10px', justifyContent:'center', paddingTop:'60px'}}>
      <TextField id="name" label="First Name" style={{width:'360px', height:'60px'}}/>
      <TextField id="sname" label="Last Name" style={{width:'360px', height:'60px'}} />
  </div>  

  <div style={{display:'flex', gap:'10px', rowGap:'40px', paddingTop:'10px', justifyContent:'center'}}>
      <TextField id="phone" label="Phone Number" style={{width:'360px', height:'60px'}}/>
      <TextField id="email" label="Email" style={{width:'360px', height:'60px'}}/>
  </div>  
  <div style={{display:'flex', paddingTop:'10px', paddingLeft:'430px', fontFamily:'Chalkboard', fontSize:'20px'}}>
    Rate Us
      
  </div> 

  


  <Flex gap="middle" vertical >
    <Rate defaultValue={0} character={({ index = 0 }) => customIcons[index + 1]}  
    style={{color:'lime', textAlign:'justify', display:'', fontSize:'50px', }}/>
  </Flex>



  




     

  
  <Stack style={{paddingTop:'20px'}}>
  <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
      <Button startIcon={<DeleteIcon />}  sx={{ width:'180px',backgroundColor:'#EAEAEA',color:'black',
       height:'60px', justifyContent:'center'}} >
        Delete
      </Button>

      <Button  endIcon={<SendIcon />} sx={{ width:'180px',backgroundColor:'#EAEAEA',color:'black',
       height:'60px', justifyContent:'center'}}>
        Send
      </Button>
      </div>
  </Stack>




<div style={{backgroundColor:'#bcbcbc',color:'white',marginTop:'40px'}}>
<div style={{ display:'flex', justifyContent:'space-evenly',paddingTop:'40px'}}>

<div style={{display:'inline',}}>
    <div style={{fontSize:'20px'}}>Contact Us</div>

      <div style={{display:'flex', gap:'3px',paddingTop:'20px',}}>
          <div style={{width:'20px', height:'20px'}}><CiMobile3/></div>
          <div style={{fontSize:'14px'}}><a href='phone' style={{textDecoration:'none' , color:'white'}}>+94 763765412</a></div>
      </div>
      <div style={{display:'flex', gap:'3px',paddingTop:'8px'}}>
          <div style={{width:'20px', height:'20px'}}><CiMail /></div>
          <div style={{fontSize:'14px'}}><a href='mail' style={{textDecoration:'none', color:'white'}}>ynapcap@gmail.com</a></div>
      </div>

</div>


<div style={{display:'inline',}}>
    <div style={{fontSize:'20px'}}>How to start</div>

      <div style={{display:'flex', gap:'3px',paddingTop:'20px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext/></div>
          <div style={{fontSize:'14px'}}><a href='service' style={{textDecoration:'none', color:'white'}}>Show Services</a></div>
      </div>
      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext /></div>
          <div style={{fontSize:'14px'}}><a href='find' style={{textDecoration:'none', color:'white'}}>Find Tutors</a></div>
      </div>
      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext /></div>
          <div style={{fontSize:'14px'}}><a href='contact' style={{textDecoration:'none', color:'white'}}>Contact Us</a></div>
      </div>

</div>

<div style={{display:'inline',}}>
    <div style={{fontSize:'20px'}}>For Parents & Student</div>

      <div style={{display:'flex', gap:'3px',paddingTop:'20px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext /></div>
          <div style={{fontSize:'14px'}}><a href='service' style={{textDecoration:'none', color:'white'}}>Find Tutors </a></div>
      </div>

      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext /></div>
          <div style={{fontSize:'14px'}}><a href='find' style={{textDecoration:'none', color:'white'}}>Complaint</a></div>
      </div>

      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext /></div>
          <div style={{fontSize:'14px'}}><a href='contact' style={{textDecoration:'none', color:'white'}}>Guidlines</a></div>
      </div>

</div>

<div style={{display:'inline',}}>
    <div style={{fontSize:'20px'}}>About Us</div>

      <div style={{display:'flex', gap:'3px',paddingTop:'20px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext/></div>
          <div style={{fontSize:'14px'}}><a href='/' style={{textDecoration:'none', color:'white'}}>Y N A P</a></div>
      </div>
      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><MdNavigateNext /></div>
          <div style={{fontSize:'14px'}}><a href='find' style={{textDecoration:'none', color:'white'}}>Terms and Policies</a></div>
      </div>
      

</div>
</div>


<div style={{ display:'flex', justifyContent:'space-evenly',paddingTop:'40px',paddingBottom:'40px'}}>
<div style={{display:'inline',}}>
    <div style={{fontSize:'20px'}}>Follow Us</div>

      <div style={{display:'flex', gap:'3px',paddingTop:'20px',}}>
          <div style={{width:'20px', height:'20px'}}>< FaInstagramSquare/></div>
          <div style={{fontSize:'14px'}}><a href='service' style={{textDecoration:'none', color:'white'}}>Instagram</a></div>
      </div>
      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><FaFacebook/></div>
          <div style={{fontSize:'14px'}}><a href='https://web.facebook.com/?_rdc=1&_rdr' style={{textDecoration:'none', color:'white'}}>Facebook </a></div>
      </div>
      <div style={{display:'flex', gap:'3px',paddingTop:'8px',}}>
          <div style={{width:'20px', height:'20px'}}><FaTwitterSquare/> </div>
          <div style={{fontSize:'14px'}}><a href='https://x.com/home' style={{textDecoration:'none', color:'white'}}>Twitter</a></div>
      </div>

      </div>
      


</div>
</div>

























    



   
      
    </>
  )
}

export default BottomNavBar
