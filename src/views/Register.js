import * as React from 'react';
import { FaApple } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa"; 
import { FaFacebookF } from "react-icons/fa"; 
import { Box, Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';




export default function Register() {


    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


  return (
    <>
    <div style={{display:'flex', justifyContent:'space-evenly',backgroundColor:'gray'}}>
      

      <Box sx={{width:'500px', height:'720px', border:'2px solid ',marginTop:'70px', marginBottom:'75px', 
      backgroundColor:'white', borderRadius:'15px'}}>

      <div style={{ fontFamily:'Aclonica',fontSize:'20px', color:'lime', padding:'20px'}}> Y N A P</div>

      <div style={{display:'flex', fontFamily:'Papyrus', fontSize:'20px'}}>
        <hr style={{height:'0.1px', width:'154px',backgroundColor:'green'}}/>Register 
        <hr style={{height:'0.1px',width:'154px',backgroundColor:'green'}}/></div>



    <div style={{fontFamily:'Papyrus', fontSize:'16px', paddingTop:'30px', paddingLeft:'60px'}}>-Use your social profile to register </div>



     <div style={{display:'flex', justifyContent:'center', gap:'5px'}}>

            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#DBF0F6',marginTop:'40px',
            justifyContent:'center', width:'190px', height:'40px'}} >
            <a href='/sign' style={{textDecoration:'none', paddingTop:'4px'}}>Google</a> 
            </Button>

            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#DBF0F6',marginTop:'40px',
            justifyContent:'center', width:'190px', height:'40px'}} >
            <a href='/sign' style={{textDecoration:'none', paddingTop:'4px'}}>Facebook</a> 
            </Button>

      </div>

      <div style={{display:'flex',paddingTop:'5px', justifyContent:'center'}}>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#DBF0F6',
                justifyContent:'center', width:'190px', height:'40px'}} >
                <a href='/sign' style={{textDecoration:'none', paddingTop:'4px'}}>Apple</a> 
            </Button>
      </div>


      <div style={{display:'flex', fontFamily:'Papyrus', fontSize:'20px', paddingTop:'20px'}}>
        <hr style={{height:'0.1px', width:'154px',backgroundColor:'green',}}/>OR 
        <hr style={{height:'0.1px',width:'154px',backgroundColor:'green'}}/></div>



        <div style={{display:'flex',gap:'10px', justifyContent:'center', }}>
      <TextField id="name" label="First Name" style={{width:'190px', height:'40px'}}/>
      <TextField id="name" label="Last Name" style={{width:'190px', height:'40px'}}/>
      </div> 

      <div style={{display:'flex',paddingTop:'25px', justifyContent:'center'  }}>
      <TextField id="name" label="Email" style={{width:'384px', height:'40px'}}/>
      </div> 

      <div style={{display:'flex',paddingTop:'25px', justifyContent:'center'  }}>
      <TextField id="name" label="Password" style={{width:'384px', height:'40px'}}/>
      </div> 

      <div style={{paddingTop:'24px', paddingLeft:'50px'}}>
         <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    I agree to the Terms and Conditions.
      </div>


        <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#DBF0F6',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/sign' style={{textDecoration:'none', paddingTop:'4px'}}>Register</a> 
            </Button>
        </div>

        <div style={{textAlign:'center', paddingTop:'30px'}}>Already have an account?  
        <a href='sign' style={{color:'red', textDecoration:'none'}}> Login Here</a></div>
      


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

