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

export default function LeaderBoard() {
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
          
      
      
        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center',alignItems:'center', height:'77px'}}>
            <div>Rank</div>
            <div>User</div>
            <div>Member <br/>Since</div>
            <div>Total <br/>Xp</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , backgroundColor:'#6EFDEC',alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , backgroundColor:'#AAB3B2',alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , backgroundColor:'#AAB3B2',alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , backgroundColor:'#AAB3B2',alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , backgroundColor:'#AAB3B2',alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly', textAlign:'center' , alignItems:'center', height:'77px'}}>
            <div style={{width:'25px', height:'25px', borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>1</div>
            <div>Nimasha</div>
            <div>March 14th <br/>2020</div>
            <div style={{width:'50px', height:'25px' , borderRadius:'20px', backgroundColor:'#D5DADA',alignContent:'center'}}>980</div>
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
