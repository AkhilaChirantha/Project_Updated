import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashNav from '../component/DashNav';
import SideNav from '../component/SideNav';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MyCource() {
  return (
    <Box sx={{ flexGrow: 1, padding:'100px',background:'white'}}>
      <Grid container spacing={2}>


        <Grid item xs={3}>
          <Item>
            <DashNav/>
          </Item>
        </Grid>






        <Grid item xs={6} style={{paddingTop:'100px'}}>
          <Item>
           <div style={{fontSize:'25px'}}> My Cources</div>

           <div style={{display:'inline',fontSize:'20px' }}>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'40px'}}>
              <div>Sinhala</div>
              <a href='/'style={{color:'red'}}>Sinhala.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>Maths</div>
              <a href='/'style={{color:'red'}}>Maths.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>English</div>
              <a href='/'style={{color:'red'}}>English.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>Science</div>
              <a href='/'style={{color:'red'}}>Science.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>Buddhism </div>
              <a href='/'style={{color:'red'}}>Buddhism.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>History</div>
              <a href='/'style={{color:'red'}}>History.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>ICT</div>
              <a href='/'style={{color:'red'}}>ICT.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>Commerce</div>
              <a href='/'style={{color:'red'}}>Commerce.pdf</a>
              <div>20%</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'10px'}}>
              <div>Dancing</div>
              <a href='/'style={{color:'red'}}>Dancing.pdf</a>
              <div>20%</div>
            </div>

            

            


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
