
import { Box, Button, Paper, Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";

const config = {
    width: (256 + 128),
    height: (256 + 128 + 32),
    size: (256 + 128),
    maxChips: 4
};

const chipColors = {
    "React": {
        textColor: "#fff",
        bgColor: "#61dafb"
      },
      "Node.js": {
        textColor: "#ffffff",
        bgColor: "#68a063"
      },
      "JavaScript": {
        textColor: "#000",
        bgColor: "#f7df1e"
      },
      "CSS": {
        textColor: "#ffffff",
        bgColor: "#1572b6"
      },
      "HTML": {
        textColor: "#ffffff",
        bgColor: "#e34c26"
      },
      "Qt" : {
        textColor : '#000',
        bgColor: '#41CD52'
      },
      "D3.js" : {
        textColor : '#fff',
        bgColor : '#F9A03F'
      },
      "Tensorflow" : {
        textColor : '#fff',
        bgColor : '#FF8E00'
      },
      "Python" : {
        textColor : '#fff',
        bgColor : '#3771A1'
      },
      "C++" : {
        textColor : '#fff',
        bgColor : '#007AFF'
      },
      "MUI" : {
        textColor : '#fff',
        bgColor : '#007FFF'
      },
      "TKinter" : {
        textColor : '#fff',
        bgColor : '#004400'
      },
      "Keras" : {
        textColor : '#fff',
        bgColor : '#D00000'
      }
}

const ProjectThumbnail = (props) => {

    const { project } = props;

    const imageName = project?.image ?? 'noProject';

    const image = require(`./${imageName}.png`);

    const tech = project?.tech ?? ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5', 'Cat6'];
    let newTech = tech;
    if (tech.length > 4) {
        let totalChipCount = tech.length;
        newTech = tech.slice(0, 4);
        newTech.push(`+${totalChipCount - 4} more...`)
    }

    const desc = project?.desc ?? 'Project description';

    const title = project?.title ?? 'Project Title';

    return (
        <div>
            <Paper elevation={4}>
                <Card
                    variant="outlined"
                    sx={{
                        minWidth: config.size,
                        maxWidth: config.size,
                        height: config.height,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <CardMedia sx={{ height: 198 }} image={image} title={project.name} />
                    <CardContent
                        sx={{
                            border: 0,
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Stack sx={{ flexGrow: 1, border: 0, alignItems: 'flex-start' }}>

                            <Typography variant="h6">{title}</Typography>
                            <Stack direction="row" spacing={1}>
                                {newTech.map((val, idx) => {
                                    const chipColor = chipColors[val];
                                    return <Chip
                                        label={val}
                                        sx={{
                                            color : chipColor?.textColor,
                                            backgroundColor : chipColor?.bgColor
                                        }}/>;
                                })}
                            </Stack>
                            <Box sx={{ border: 0, flexGrow: 1, alignItems: 'center', display: 'flex' }}>
                                <Typography variant="body2">{desc}</Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                    <CardActions disableSpacing sx={{ mt: 'auto' }}>
                        <Button size="small">See More</Button>
                    </CardActions>
                </Card>
            </Paper>
        </div>
    );

    /*
    return (
        <div>
            <Paper elevation={4}>
            <Card variant='outlined' sx={{
                minWidth : config.size,
                maxWidth : config.size,
                height : config.height,
                display : 'flex',
                flexDirection : 'column'
            }}>
                <CardMedia sx={{ height : 198 }} image={image} title={project.name}/>
                <CardContent sx={{
                    border: 1,
                    flexGrow : 1,
                    display : 'flex',
                    flexDirection : 'column'
                }}>
                    <Typography variant="h6">{title}</Typography>
                    <Stack sx={{ flexGrow : 1, border : 1 }}>
                        <Stack direction='row' spacing={1}>
                        {
                            newTech.map((val, idx) => {
                                return <Chip label={val}></Chip>
                            })
                        }
                        </Stack>

                        <Typography variant='body2'>{desc}</Typography>
                                               
                        
                    </Stack>

                </CardContent>

                <CardActions disableSpacing sx={{ mt : 'auto' }}>
                    <Button size='small'>See More</Button>
                </CardActions>
            </Card>
            </Paper>
        </div>
    )
    */

}

export default ProjectThumbnail;
