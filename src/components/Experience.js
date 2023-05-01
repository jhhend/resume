
import { Grid, Stack, Typography } from '@mui/material';

import ResumeSection from './ResumeSection';

import getKey from '../utils/getKey.js';

const ExperienceContnet = (props) => {

    const { content } = props;
    const { name, title, duration, items } = content;

    return (
        <Stack spacing={1} sx={{ mb : 2 }}>
            <Typography variant='h4'>{name}</Typography>
            <Grid container columns={2} sx={{ width : '100%' }}>
                <Grid item xs={1}>
                    <Typography fontStyle='italic' variant='h6' align='left'>{title}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography fontStyle='italic' variant='h6' align='right'>{duration}</Typography>
                </Grid>
            </Grid>
            <hr/>
            {
                items.map(item => <Typography key={getKey()}>• {item}</Typography>)
            }
        </Stack>
    );

}

const Experience = (props) => {

    const { experience } = props;

    return (
        <ResumeSection name='work experience' content={experience} component={ExperienceContnet}/>
    );

}

export default Experience;
