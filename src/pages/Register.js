import { Paper, TextField,Box, Button, Typography } from '@mui/material'
import {useRouter} from 'next/router'
import React from 'react'

const style= {
linkStyle: {
    cursor:"pointer",
    color:"#0818a6"
},
};

 function Register() {
    const router = useRouter();
    const gotoSignIn = ()=>{
    router.push("/Signin")
}
  return (
    <Box 
    sx={{width: '250vh', height:'80vh',
    display:'flex', flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'}}>
         <Typography variant='h4' fontFamily='Arial'>Please Sign In</Typography>
        <Paper elevation={3}
        sx={{padding: '24px', display:'flex', 
        flexDirection:'column',marginTop: '12px'
        }}>
            <TextField label="Email Address" type="email"  sx={{marginTop: '12px'}}/>
            <TextField label="Password" type="password" sx={{marginTop: '12px'}}/>
            <TextField label="Confirm Password" type="password" sx={{marginTop: '12px'}}/>
            <Button variant="contained" sx={{marginTop:'12px'}}>Register</Button>
           <Box sx={{diplay:'flex', justifyContent:'center', marginTop:"9px"}}>
               <Typography variant='subtitle2' onClick={gotoSignIn} sx={style.linkStyle}>
             Do you have account? Sign In
           </Typography>
           </Box>
        </Paper>
    </Box>
  )
} export default Register