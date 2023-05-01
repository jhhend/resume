import { Fragment } from "react";
import { Box, Stack, IconButton, Typography } from '@mui/material';

import hero from '../assets/hero.png';
import me from '../assets/me.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const config = {
    subtitle : 'Enthusiastic candidate seeking software development opportunity in a dynamic, creative, and supportive environment where I can both continue to learn as well as expand my skills.',
    linkedIn : 'https://www.linkedin.com/in/jhhend/',
    github : 'https://github.com/jhhend',
    email : 'mailto:jhayhend@gmail.com'
}

const Contact = () => {

    return (
        <Box sx={{
            backgroundImage : `linear-gradient(to bottom, white, transparent 60%), url(${hero})`,
            backgroundSize : 'cover',
            backgroundPosition : 'center',
            width : '100%',
            height : '100%',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <Box sx={{
                width : '50%',
            }}>
                <Box sx={{
                    backgroundImage : `url(${me})`,
                    backgroundPosition : 'center',
                    backgroundSize : 'cover',
                    width : '512px',
                    height : '512px',
                    borderRadius : '50%',
                    margin: 'auto 0 0 auto'
                }}>

                </Box>
            </Box>               
            <Box sx={{
                width : '50%',
                ml : '10%'
            }}>
                <Typography color='white' variant='h1' align='left' sx={{ textShadow : `2px 2px 4px rgba(0, 0, 0, 0.5)`}}>
                    Contact Me
                </Typography>
                <Stack direction='column'>
                    <Stack direction='row' alignItems='center'>
                        <IconButton size='large' sx={{
                            color : 'white'
                        }} target='_blank' href={config.email}>
                            <EmailIcon fontSize='inherit'/>
                        </IconButton>
                        <Typography color='white' align='center' variant='h6' sx={{
                            textShadow : `2px 2px 4px rgba(0, 0, 0, 0.5)`
                        }}>jhayhend@gmail.com</Typography>
                    </Stack>

                    <Stack direction='row' alignItems='center'>
                        <IconButton size='large' sx={{
                            color : 'white'
                        }} component='a' target='_blank' href={config.linkedIn} >
                            <LinkedInIcon fontSize='inherit'/>
                        </IconButton>
                        <Typography color='white' align='center' variant='h6' sx={{
                            textShadow : `2px 2px 4px rgba(0, 0, 0, 0.5)`
                        }}>https://www.linkedin.com/in/jhhend/</Typography>
                    </Stack>

                    <Stack direction='row' alignItems='center'>
                        <IconButton size='large' sx={{
                            color : 'white'
                        }} component='a' target='_blank' href={config.github}>
                            <GitHubIcon fontSize='inherit'/>
                        </IconButton>
                        <Typography color='white' align='center' variant='h6' sx={{
                            textShadow : `2px 2px 4px rgba(0, 0, 0, 0.5)`
                        }}>https://github.com/jhhend</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );

}

export default Contact;
