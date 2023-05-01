
import { Stack, Typography } from '@mui/material';

import ResumeSection from './ResumeSection';
import getKey from '../utils/getKey.js';

const EducationContent = (props) => {

    const { content } = props;
    const { name, degree, items } = content;

    return (
        <Stack spacing={1} sx={{ mb : 2 }}>
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='h6' fontStyle='italic' >{degree}</Typography>
            <hr/>
            {
                items.map(item => <Typography key={getKey()}>• {item}</Typography>)
            }
        </Stack>
    );

}

const Education = (props) => {

    const education = props.education;

    return (
        <ResumeSection name='education' content={education} component={EducationContent}/>
    );

}

export default Education;
