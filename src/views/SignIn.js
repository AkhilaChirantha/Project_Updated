import * as React from 'react';
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa"; 
import { Box, Button, TextField } from '@mui/material';




export default function Sign() {
  return (
    <>
    <div style={{display:'flex', justifyContent:'space-evenly',backgroundColor:'gray'}}>
      

      <Box sx={{width:'500px', height:'720px', border:'2px solid ',marginTop:'70px', marginBottom:'75px', backgroundColor:'white', borderRadius:'15px'}}>

      <div style={{ fontFamily:'Aclonica',fontSize:'20px', color:'lime', padding:'20px'}}> Y N A P</div>

      <div style={{display:'flex', fontFamily:'Papyrus', fontSize:'20px'}}><hr style={{height:'0.1px', width:'154px',backgroundColor:'green'}}/>Sign In 
      <hr style={{height:'0.1px',width:'154px',backgroundColor:'green'}}/></div>

<div style={{justifyContent:'center', textAlign:'center'}}>
      <div style={{display:'flex', justifyContent:'center', paddingTop:'60px'}}>
      <TextField id="name" label="Email" style={{width:'360px', height:'60px',}}/>
      </div> 
      <div style={{display:'flex',gap:'10px', justifyContent:'center', }}>
      <TextField id="name" label="Password" style={{width:'360px', height:'60px'}}/>
      </div> 

      <div style={{fontFamily:'Papyrus', fontSize:'14px', marginLeft:'250px', marginTop:'5px'}}><a href='/google' style={{textDecoration:'none', color:'black'}}>Forgot Password </a></div>

      <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#DBF0F6',marginTop:'40px',
        justifyContent:'center', width:'360px', height:'40px'
      }} >
          <a href='/select01' style={{textDecoration:'none', paddingTop:'4px'}}>Login</a> 
      </Button>
</div>

<div style={{display:'flex', fontFamily:'Papyrus', fontSize:'20px', paddingTop:'50px'}}><hr style={{height:'0.1px', width:'154px',backgroundColor:'green',}}/>OR 
      <hr style={{height:'0.1px',width:'154px',backgroundColor:'green'}}/></div>

<div style={{textAlign:'center', paddingTop:'50px'}}>
      <div>Sign In with
        <div style={{ textDecoration:'none', display:'flex', gap:'20px', textAlign:'center', justifyContent:'center', paddingTop:'20px'}}>
            <a href="www.apple.com"> <FaApple style={{width:'35px',height:'35px',color:'black'}}/></a>
            <a href="www.google.com"> <FcGoogle style={{width:'70px',width:'35px',height:'35px'}}/></a>
            <a href="www.facebook.com"> <FaFacebookF style={{width:'70px',width:'35px',height:'35px', color:'blue'}}/></a>
        </div>
      </div>

      <div style={{paddingTop:'30px'}}>Are you New to this? <a href='register' style={{textDecoration:'none', color:'red'}}>Create an Account</a></div>


      </div>

      </Box>


      <div style={{display:'inline', alignContent:'center', textAlign:'center', }}>


          <div  >
                <img src="logo.png" style={{width:'100px'}}/>
          </div>


          <div style={{fontFamily:'Chalkboard', fontSize:'30px',}}>
          Welcome back <br/>
            ‘ Y N A P ’ learning system  
          </div>


          <div style={{paddingTop:'250px'}}>

                <div style={{ fontFamily:'Aclonica',fontSize:'60px', color:'lime'}}>    
                    Y N A P 
                </div>


                <div style={{color:'black', fontSize:'30px', paddingLeft:'150px'}}>    
                    Learning System
                </div>

          </div>

      </div>
    </div>
    </>
  );
}

