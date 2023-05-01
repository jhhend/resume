
import { Box, Stack, Typography } from '@mui/material';
import getKey from '../utils/getKey.js';

const config = {
    margin : {
        edge : '10%'
    }
}

const ResumeSectionContnet = (props) => {

    const { content } = props;
    const { name, subtitle, items } = content;

    return (
        <Stack spacing={1} sx={{ mb : 2 }}>
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='h6' fontStyle='italic' >{subtitle}</Typography>
            <hr/>
            {
                items.map(item => <Typography key={getKey()}>• {item}</Typography>)
            }
        </Stack>
    );    

}

const ResumeSectionHeader = (props) => {

    const { name } = props;

    return (
        <Box sx={{ width : '25%'  }}>
            <Typography align='center' fontWeight='bold'>{name.toUpperCase()}</Typography>
            <hr style={{ borderColor : '#60B381' }}/>
        </Box>
    )

}

const ResumeSection = (props) => {

    const name = props.name ?? 'section title';
    const content = props.content ?? [ { name : 'Example content', subtitle : 'Subtitle', items : [ 'Example 1', 'Example 2' ] } ];
    const ContentComponent = props.component ?? ResumeSectionContnet;

    return (
        <Stack direction='row' sx={{
            ml : config.margin.edge,
            mr : config.margin.edge,
            mt : '5%',
            mb : '5%'
        }}>
            <ResumeSectionHeader name={name}/>
            <Box sx={{ width : '75%' }}>
                <Stack sx={{
                    ml : config.margin.edge,
                    mr : config.margin.edge
                }}>
                    {
                        content.map(item => {
                            return (
                                <ContentComponent key={getKey()} content={item}/>
                            )
                        })
                    }
                </Stack>
            </Box>
        </Stack>
    );

}

export default ResumeSection;
