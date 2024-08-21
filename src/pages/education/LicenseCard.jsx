import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ExpandMore as ExpandMoreIcon} from "@mui/icons-material";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const LicenseCard = ({licenseType}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardHeader
                title={licenseType.title}
                subheader={licenseType.subheader}
            />
            <CardMedia
                component="img"
                height="250"
                image={licenseType.image}
                alt={licenseType.title}
                sx={{objectFit: "contain"}}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {licenseType.secondaryText}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {licenseType.contentText.map((text, index) => (
                        <Typography paragraph key={`${licenseType.title}-text-paragraph-${index + 1}`}>
                            {text}
                        </Typography>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default LicenseCard;