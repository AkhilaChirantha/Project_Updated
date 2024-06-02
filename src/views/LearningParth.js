import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashNav from '../component/DashNav';
import SideNav from '../component/SideNav';
import { FaArrowRight } from 'react-icons/fa6';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function LearningParth() {
  return (
    <Box sx={{ flexGrow: 1, padding:'100px',background:'white'}}>
      <Grid container spacing={2}>


        <Grid item xs={3}>
          <Item>
            <DashNav/>
          </Item>
        </Grid>






        <Grid item xs={6} style={{paddingTop:'100px', }}>
          <Item style={{fontFamily:'Chalkboard', }}>
        
      <div style={{display:'flex',fontSize:'20px'}}>All Learning Path </div>



      <div style={{display:'inline', }}>

                    <Grid container spacing={3} columns={15} sx={{display:'flex', gap:'20px', paddingLeft:'40px', paddingTop:'40px' ,justifyContent:'center'}}>
                         <Box style={{width:'12px', height:'100px', backgroundColor:'#B7F5F2', borderRadius:'12px'}}></Box>
                          <Box style={{width:'400px', height:'100px',backgroundColor:'#B7F5F2', borderRadius:'25px'}}>

                            <div style={{display:'flex', paddingLeft:'40px', paddingTop:'10px', fontSize:'20px'}}>O/L</div> 
                            <div style={{display:'flex', justifyContent:'end', paddingTop:'30px', paddingRight:'10px'}}><a href='/dashboard' style={{textDecoration:'none'}}>Start Learn<FaArrowRight/></a></div>                
                          </Box>
                    </Grid>

                    <Grid container spacing={3} columns={15} sx={{display:'flex', gap:'20px', paddingLeft:'40px',paddingTop:'40px',justifyContent:'center' }}>
                         <Box style={{width:'12px', height:'100px', backgroundColor:'#B7F5F2', borderRadius:'12px'}}></Box>
                          <Box style={{width:'400px', height:'100px',backgroundColor:'#B7F5F2', borderRadius:'25px'}}>

                            <div style={{display:'flex', paddingLeft:'40px', paddingTop:'10px', fontSize:'20px'}}>O/L</div> 
                            <div style={{display:'flex', justifyContent:'end', paddingTop:'30px', paddingRight:'10px'}}><a href='/dashboard' style={{textDecoration:'none'}}>Start Learn<FaArrowRight/></a></div>                
                          </Box>
                    </Grid>

                    <Grid container spacing={3} columns={15} sx={{display:'flex', gap:'20px', paddingLeft:'40px',paddingTop:'40px',justifyContent:'center' }}>
                         <Box style={{width:'12px', height:'100px', backgroundColor:'#B7F5F2', borderRadius:'12px'}}></Box>
                          <Box style={{width:'400px', height:'100px',backgroundColor:'#B7F5F2', borderRadius:'25px'}}>

                            <div style={{display:'flex', paddingLeft:'40px', paddingTop:'10px', fontSize:'20px'}}>O/L</div> 
                            <div style={{display:'flex', justifyContent:'end', paddingTop:'30px', paddingRight:'10px'}}><a href='/dashboard' style={{textDecoration:'none'}}>Start Learn<FaArrowRight/></a></div>                
                          </Box>
                    </Grid>
                   

   
                   
                
            </div>

                   <div style={{fontSize:'20px', display:'flex', paddingTop:'30px'}}>
                         Frequently Asked Questions
                    </div>

                    <hr style={{width:'600px' ,height:'1px', boxShadow:'drop-shadow', display:'flex'}}/>



                    <div>


                    <div style={{fontSize:'18px', display:'flex', paddingTop:'20px'}}> What is a Learning Path?</div>

                        <div style={{fontSize:'16px', display:'flex', textAlign:'justify', }}> 
                        A learning path is a planned sequence of learning activities designed to help you reach specific goal or learn certain skills step-by-step.
                        </div>

                        <hr style={{width:'90%' ,height:'1px', boxShadow:'drop-shadow', marginTop:'20px'}}/>
                    <div style={{fontSize:'18px', display:'flex', paddingTop:'20px'}}> Why should I use a learning path?</div>

                    <div style={{fontSize:'16px', display:'flex', textAlign:'justify',}}> 
                    A learning path gives you clear steps and structure, helping you efficiently achieve your learning goals or gain new skills.
                        </div>
                    
                    

                    <hr style={{width:'90%' ,height:'1px', boxShadow:'drop-shadow',marginTop:'20px' }}/>
                    <div style={{fontSize:'18px', display:'flex',paddingTop:'20px'}}>Are leaning path free?</div>
                    <div style={{fontSize:'16px', display:'flex', textAlign:'justify'}}>Learning paths can be either free or require payment. The cost depends on the platform and the type of content provided.</div>

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
