
import { Fragment, useState, useEffect } from "react";
import { AppBar, Button, Toolbar as ToolbarMUI, useScrollTrigger} from '@mui/material';

import getKey from '../utils/getKey.js';

const config = {
    buttons : [ 'home', 'resume', 'contact' ],
    buttonOffsets : {
        resume : -124
    }
}

const Toolbar = () => {

    const [ isTransparent, setIsTransparent ] = useState(true);

    const trigger = useScrollTrigger({
        disableHysteresis : true,
        threshold : 100
    })

    const handleScroll = () => {
        setIsTransparent(!trigger);
    }

    return (
        <Fragment>
            <AppBar position='fixed' elevation={isTransparent ? 0 : 2} sx={{
                backgroundColor : isTransparent ? 'transparent' : '#2B2314',
                transition : 'background-color 0.2s ease, box-shadow 0.2s ease',
                color : 'black'
            }}>
                <ToolbarMUI sx={{
                    justifyContent : 'center',
                    gap : '16px',
                    onScroll : {handleScroll},
                    position : 'relative'
                }}>
                    {
                        config.buttons.map(button => {
                            return <Button key={getKey()} variant='text' sx={{ color : 'white' }}
                                onClick={() => {
                                    const element = document.getElementById(button);
                                    if (element) {
                                        window.scrollTo({
                                            top : element.getBoundingClientRect().top + window.pageYOffset + (config.buttonOffsets[button] ?? 0),
                                            behavior : 'smooth'
                                        });
                                    }
                                }}>{button}</Button>
                        })
                    }
                </ToolbarMUI>
            </AppBar>
        </Fragment>
    );
}

export default Toolbar;
