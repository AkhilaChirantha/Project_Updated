import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MdOutlineExplore } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { GoListUnordered } from "react-icons/go";
import { TbBracketsAngle } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { CiLogout } from "react-icons/ci";



export default function DashNav() {
  return (
    <> 
    
    <Box >
      
    
<Grid container spacing={1} >
  <Grid item xs={10}> 

    
      <Grid >
    <Grid >
        
        <div  style={{ display:'flex',gap:'40px',justifyContent:'flex-end', paddingTop:'30px'}}>
              
                  <img src='logo.png' style={{width:'40px', height:'40px'}}/>
                  <div style={{fontFamily:'Aclonica', fontSize:'32px', color:'lime'}}>Y N A P </div>
        </div>



        <div>
          <div>
        <Avatar src="com.laknaidriapps.girlscartoon-75f60f39-19e6-4ebf-ab92-2e30a3e8797b.jpg" style={{width:'120px', height:'120px', 
       marginLeft:'100px', marginTop:'35px',border: '2px dashed lime'}}/>
            <div style={{paddingLeft:'60px', fontSize:'16PX' ,paddingTop:'10px'}}>Nimasha Nishadini</div>
            <div style={{paddingLeft:'55px',fontSize:'12px'}}>nimashanishadini@gmail.com</div>
        </div>
        </div>
        





        

        <div style={{ display:'flex',flexDirection:'column',color:'black', 
        textAlign:'left',paddingLeft:'40px',rowGap:'10px',fontSize:'15px', paddingTop:'100px', gap:'20px'}} >

            <div>Main Menu </div>
        
            <div style={{display:'inline'}}>

                <div > <LuLayoutDashboard style={{columnGap:'20px'}}/> Dahboard </div>
                <div><IoFolderOpenOutline />  My Cources  </div>
            </div>



            <div>Learn </div>
        
            <div style={{display:'inline'}}>

                <div > <MdOutlineExplore /> Explore </div>
                <div><IoBookOutline />  Learning Path  </div>
                <div><IoEyeOutline/>  AI Problem Solver </div>
            </div>

            <div>Grow </div>
        
            <div style={{display:'inline'}}>

                <div > <GoListUnordered /> Learder Board </div>
                <div><TbBracketsAngle  />  Practice Problem  </div>
            </div>

            <div>Preference</div>
        
            <div style={{display:'inline'}}>

                <div > <CiSettings />Setting </div>
                <div><IoIosHelpCircleOutline />  Help  </div>
            </div>




            <div style={{paddingTop:'70px', display:'inline', textAlign:'center'}}>


              <div style={{display:'flex', justifyContent:'center', }}>
                    <Button sx={{ fontFamily:'Papyrus', 
                    fontSize:'16px', backgroundColor:'#DBF0F6'}} startIcon={<CiLogout style={{width:'20px',color:'blue'}}/>} >

                      <a href='/sign' style={{textDecoration:'none', paddingTop:'4px'}}>Log Out</a> 
              
                    </Button>
                    </div>

                    <div style={{paddingBottom:'50px', paddingTop:'20px'}}>Something wrong...?</div>
                  
            </div>




     

        </div>

           


     
        

   
        </Grid>
        
       </Grid>
 


</Grid>
        
       </Grid>
       
       </Box>
      
    </>
  );
}