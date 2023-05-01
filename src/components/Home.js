
import hero from '../assets/hero.png';

import { Box, Stack, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const config = {
    subtitle : 'Enthusiastic candidate seeking software development opportunity in a dynamic, creative, and supportive environment where I can both continue to learn as well as expand my skills.',
    linkedIn : 'https://www.linkedin.com/in/jhhend/',
    github : 'https://github.com/jhhend',
    email : 'mailto:jhayhend@gmail.com'
}

const HomeIcons = () => {

    return (
        <Stack direction='row' alignItems='center' justifyContent='center'>
            <IconButton size='large' sx={{
                color : 'white'
            }} target='_blank' href={config.email}>
                <EmailIcon fontSize='inherit'/>
            </IconButton>

            <IconButton size='large' sx={{
                color : 'white'
            }} component='a' target='_blank' href={config.linkedIn} >
                <LinkedInIcon fontSize='inherit'/>
            </IconButton>

            <IconButton size='large' sx={{
                color : 'white'
            }} component='a' target='_blank' href={config.github}>
                <GitHubIcon fontSize='inherit'/>
            </IconButton>
        </Stack>
    );

}

const Home = () => {

    const title = "Hayden Henderson";

    return (
        <Box sx={{
            backgroundImage : `linear-gradient(to bottom, transparent 60%, white), url(${hero})`,//`url(${hero})`,
            backgroundSize : 'cover',
            backgroundPosition : 'center',
            width : '100%',
            height : '100%',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center'
        }}>
            <Box xs={{
                display : 'flex',
                flexDirection : 'column'
            }}>
                <Typography color='white' variant='h1' align='center' sx={{
                    textShadow : `2px 2px 4px rgba(0, 0, 0, 0.5)`
                }}>{title}</Typography>
                <Box sx={{
                    display : 'flex',
                    justifyContent : 'center',
                    width : '50%',
                    margin : 'auto'
                }}>
                    <Typography color='white' align='center' variant='h6' sx={{
                        textShadow : `2px 2px 4px rgba(0, 0, 0, 0.5)`
                    }}>{config.subtitle}</Typography>
                </Box>
                <HomeIcons/>
            </Box>
        </Box>
    );

}

export default Home;
