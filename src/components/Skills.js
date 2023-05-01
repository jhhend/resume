
import { Stack, Typography } from '@mui/material';
import ResumeSection from './ResumeSection';
import getKey from '../utils/getKey.js';

const SkillContent = (props) => {

    const { content } = props;
    const { name, items } = content;

    return (
        <Stack spacing={1} sx={{ mb : 2 }}>
            <Typography variant='h4'>{name}</Typography>
            <hr/>
            {
                items.map(item => <Typography key={getKey()}>• {item}</Typography>)
            }
        </Stack>
    );

}

const Skills = (props) => {

    const { skills } = props;

    return (
        <ResumeSection name='skills' content={skills} component={SkillContent}/>
    );
    
}

export default Skills;
