import React from 'react'
import MainAppBar from '../component/MainAppBar'
import BottomNavBar from '../component/BottomNavBar'
import { Button } from '@mui/material'

function MainSelectOne() {


  return (
    <>

    <MainAppBar/>

    

                

                <div style={{ fontSize:'40px', fontFamily:'Papyrus', textAlign:'center', paddingTop:'100px'}}>
                A good education can change anyone.<br/>
                A good teacher can change everything.
                </div>

                <div  style={{display:'flex', justifyContent:'center',paddingTop:'80px'}}>

                        <img  src="logo.png" style={{width:'120px'}}/>

                        <div style={{display:'inline' ,paddingLeft:'50px', fontFamily:'Aclonica',alignContent:'center'}}>
                            <div style={{fontSize:'60px',color:'lime'}}> Y N A P </div>
                            <div style={{fontSize:'23px', color:'blue', paddingLeft:'80px'}}>Learning System</div>
                        </div>
                </div>



                <div style={{ fontSize:'40px', fontFamily:'Papyrus', textAlign:'center', paddingTop:'100px'}}>
                Welcome Back to Y N A P Learning System
                </div>


                <div style={{display:'flex', justifyContent:'center', marginTop:'30px', gap:'30px'}}>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#C1F5A7',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/selectTutors' style={{textDecoration:'none', paddingTop:'4px'}}>Find Tutors</a> 
            </Button>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#C1F5A7',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/selfstudy' style={{textDecoration:'none', paddingTop:'4px'}}>Self Study</a> 
            </Button>
        </div>


                





      

    <BottomNavBar/>
      
    </>
  )
}

export default MainSelectOne
