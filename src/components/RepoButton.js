
import { IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const RepoButton = (props) => {

    const { link } = props;

    return (
        <Tooltip title='View on GitHub' placement='left'>
            <IconButton 
                size='large'
                component='a'
                target='_blank'
                href={link}
                sx={{ width : 32, height : 32 }}>
                <GitHubIcon/>
            </IconButton>
        </Tooltip>
    );

}

export default RepoButton;
