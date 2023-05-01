

import hero from '../assets/hero.png';
import Toolbar from '../components/Toolbar.js';
import Home from '../components/Home.js';
import { Fragment, useState } from 'react';
import { Grid, Button, Chip, Stack, FormControl, OutlinedInput, InputLabel, Select, MenuItem, Box, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import Contact from '../components/Contact';
import RepoButton from '../components/RepoButton';

const config = {
    subtitle : 'Enthusiastic candidate seeking software development opportunity in a dynamic, creative, and supportive environment where I can both continue to learn as well as expand my skills.',
    linkedIn : 'https://www.linkedin.com/in/jhhend/',
    github : 'https://github.com/jhhend',
    email : 'mailto:jhayhend@gmail.com'
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ProjectFilters = (props) => {

    const { tech, filters, setFilters } = props;

    const handleChange = (event) => {
        setFilters(event.target.value);
    }

    return (
        <Fragment>
            <Box align='center' style={{ height : 80 }}>
                <FormControl sx={{ m : 1, width : 600 }}>
                    <InputLabel id='filter-label'>Filter</InputLabel>
                    <Select multiple
                    native={false}
                        displayEmpty
                        labelId = 'filter-label'
                        value={filters}
                        onChange={handleChange}
                        input={<OutlinedInput label='Chip'/>}
                        renderValue={(selected) => {
                            console.log('hello')
                        return (
                            <Box sx={{ display : 'flex', flexWrap : 'wrap', gap : 0.5 }}>
                                { selected.map(value => (<Chip key={value} label={value}/>)) }
                            </Box>
                            )
                        }}
                        MenuProps={MenuProps}>
                        { tech.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>) }
                    </Select>
                </FormControl>
            </Box>
        </Fragment>
    );

}

const ProjectCard = (props) => {

    const { project } = props;
    const { name, repo, tech } = project;

    return (
        <Card sx={{ maxWidth: 512, height : '100%', display: "flex", flexDirection: "column" }}>
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={require('../assets/hero.png')}/>
            <CardContent sx={{ flexGrow : 1 }}>
            <Typography gutterBottom align='left' variant="h6" component="div">
                {name}
            </Typography>
            <hr style={{ borderColor : '#60B381' }}/>
            <Stack direction='row' spacing={1} sx={{ mb : 1 }}>
            {
                tech.map(t => <Chip label={t}/>)
            }
            </Stack>
            <Typography align='left' variant="body2" color="text.secondary">
                {project.desc ?? 'Flavortext'}
            </Typography>
            </CardContent>
            <CardActions sx={{ display : 'flex', justifyContent : 'flex-start' }}>
                <Box sx={{ width : '100%' }}>
                <Stack direction='row' sx={{ display : 'flex' }}>
                    <Box sx={{ display : 'flex', width : '100%', justifyContent : 'left' }}>
                        <Button style={{ color : '#60B381' }} size="contianed">Read More</Button>
                    </Box>
                    {
                        repo !== undefined ? 
                        <Box sx={{ display : 'flex', width : '100%', justifyContent : 'right'}}>
                            <RepoButton link={repo}/>
                        </Box> :
                        <Fragment></Fragment>
                    }

                </Stack>
                </Box>

            </CardActions>
        </Card>
        );


}

const ProjectHome = (props) => {


    const title = 'Projects';

    return (
        <Box sx={{
            backgroundImage : `linear-gradient(to bottom, white, transparent 60%, white), url(${hero})`,
            backgroundSize : 'cover',
            backgroundPosition : 'center',
            width : '100%',
            height : '75%',
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
            </Box>
        </Box>
    );
}

const ProjectPage = (props) => {

    const [ filters, setFilters ] = useState([ ]);

    const { allProjects } = props;

    const allTech = Array.from(new Set(allProjects.map(project => project.tech).flat())).sort((a, b) => {
        return a.localeCompare(b, 'en');
    });

    return (
        <Fragment>
            <ProjectHome/>
            <ProjectFilters tech={allTech} filters={filters} setFilters={setFilters}/>
            <Grid container columns={3} spacing={2} align='center' sx={{ width : '100%', mb : '5%'}}>
            {
                allProjects.sort((a, b) => a.name.localeCompare(b.name)).filter(project => {

                    // Render everything if no filters are applied
                    if (filters.length === 0) {
                        return true;
                    }
                    
                    // Otherwise, only render the project if it has a matching filter
                    for (let tech of project.tech) {
                        if (new Set(filters).has(tech)) {
                            return true;
                        }
                    }
                    return false;

                }).map(project => {
                    return (
                        <Grid item xs={1}>
                            <ProjectCard project={project}></ProjectCard>
                        </Grid>
                    )
                })
            }
            </Grid>
        </Fragment>
    )

}

export default ProjectPage;
