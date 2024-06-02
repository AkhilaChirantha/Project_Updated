import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from '../component/CustomeAppBar';
import BottomNavBar from '../component/BottomNavBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#CECECE',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function AboutUS() {
  return (
    <>
    <ResponsiveAppBar/>


      
      <div style={{fontSize:'25px',fontFamily:'Chalkboard',paddingTop:'60px', textAlign:'center'}}>
        Our goal is to help parents find the right classes for their children and  We want to make it easy for<br/>
parents and students to choose classes that fit their needs and interests.<br/>
Our website will have easy-to-use features to help with this. We'll also have tests and assessments to<br/>
track how well students are doing. Students will be able to <br/>
choose their own teachers, making sure they feel comfortable and respected.</div>
      

     
        <div style={{fontSize:'40px',paddingTop:'60px', textAlign:'center'}}>Our Tutors</div>
   
        <div style={{fontSize:'25px',fontFamily:'Chalkboard',paddingTop:'60px', textAlign:'center'}}>
          Everyone in the team plays an important part tutoring coordinators, Graduate <br/>
        Lecturers,qualified teachers.
            Our common goal is to 
        create a pleasant <br/> environment for tutoring in which everyone achieves excellent results.</div>
     

      
        <div style={{fontSize:'40px',fontFamily:'',paddingTop:'60px', textAlign:'center'}}>Target Audience</div>
        <div style={{fontSize:'25px',fontFamily:'Chalkboard',paddingTop:'60px', textAlign:'center'}}>
          The target audience for this innovative application includes parents who are<br/>
seeking supplemental tuition services for their children and students <br/>
who require additional academic support to excel in competitive educational<br/>
environments.</div>
      
     



 
 
   

    
    <BottomNavBar/>
    </>
  )
}

export default AboutUS