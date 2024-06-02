import React from 'react'
import MainAppBar from '../component/MainAppBar'
import BottomNavBar from '../component/BottomNavBar'
import { Button } from '@mui/material'



function SelfStudySelection() {
  return (
    <>
    <MainAppBar/>

   
    <div style={{display:'flex', justifyContent:'center', marginTop:'30px', gap:'30px'}}>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#C1F5A7',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/dashboard' style={{textDecoration:'none', paddingTop:'4px'}}>Odanary Level</a> 
            </Button>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#C1F5A7',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/dashboard' style={{textDecoration:'none', paddingTop:'4px'}}>Advance Level</a> 
            </Button>
            <Button sx={{ fontFamily:'Papyrus',fontSize:'16px', backgroundColor:'#C1F5A7',
                justifyContent:'center', width:'360px', height:'40px'}} >
                <a href='/dashboard' style={{textDecoration:'none', paddingTop:'4px'}}>After Advance Level</a> 
            </Button>
        </div>




    <BottomNavBar/>
      
    </>
  )
}

export default SelfStudySelection
