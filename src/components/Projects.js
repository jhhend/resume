
import { Chip, Stack, Typography, IconButton, Tooltip } from '@mui/material';
import { Fragment } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import ResumeSection from './ResumeSection';
import getKey from '../utils/getKey.js';

import RepoButton from './RepoButton';

const techTypes = new Map();
techTypes.set('JavaScript', 0);
techTypes.set('C++', 0);
techTypes.set('Python', 0);
techTypes.set('MySQL', 1);
techTypes.set('Qt', 2);
techTypes.set('React', 1);
techTypes.set('D3.js', 2);
techTypes.set('Tensorflow', 2);
techTypes.set('Axios', 2);
techTypes.set('MUI', 2);
techTypes.set('TKinter', 2);

const ProjectContent = (props) => {

    const { content } = props;
    const { name, tech, items, repo } = content;

    const sortTech = (a, b) => {
        let aType = techTypes.get(a);
        let bType = techTypes.get(b);

        // If tech is of the same type, compare a strings
        if (aType === bType) {
            return a.localeCompare(b);
        }

        // Otherwise compare by type
        if (aType < bType) {    
            return -1;
        }
        
        return 1;
    }

    return (
        <Stack spacing={1} sx={{ mb : 2 }}>
            <Typography variant='h4'>{name}</Typography>
            <Stack direction='row' spacing={2}>
                {
                    tech.sort(sortTech).map(item => <Chip key={getKey()} label={item}/>)
                }
            </Stack>
            <hr/>
            {
                items.map(item => <Typography key={getKey()}>• {item}</Typography>)
            }
            {repo !== undefined ? <RepoButton link={repo}/> : <Fragment></Fragment> }
        </Stack>
    );

}

const Projects = (props) => {

    const projects = props.projects;

    return (
        <ResumeSection name='projects' content={projects} component={ProjectContent}/>
    );

}

export default Projects;
