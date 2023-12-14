import { Paper, Box, Grid, Typography, TextField,Button } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <Box sx={{ display: 'flex', minHeight:'100vh',minWidth:'100vw',justifyContent:'center',alignItems:'center', flexDirection: 'column' }}>
        <Paper elevation='10' sx={{minWidth:'30vw', padding:'30px 50px', borderRadius:'20px'}} >
            <Typography component='p'>welcom back!</Typography>
            <Typography variant='h3' my={3} color='#475569'>
                Sign in
            </Typography>
            <Box
                component="form"                
                autoComplete="off"
                sx={{display:'flex',flexDirection:'column',gap:'25px',
                }}
            >
                <TextField id="outlined-basic" label="Email" variant="outlined"  />
                <TextField id="outlined-password-input" type="password" label="Password" variant="outlined" />
                <Button  variant="contained" sx={{backgroundColor:'#FC6212', width:'fit-content',alignSelf:'center', borderRadius:'23px'}}
                endIcon={<LoginOutlinedIcon fontSize='small'/>}
                >Sign in</Button>
            </Box>
            <Typography my={3} textAlign='center'>I don’t have an account ? <Link to='#'><span style={{color:'#FC6212'}}>Sign up</span></Link></Typography>
        </Paper>
        </Box>
            );
}
 
export default Login;