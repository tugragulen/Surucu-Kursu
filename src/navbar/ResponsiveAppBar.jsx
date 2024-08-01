import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../img/kurs.png';
import Button from '@mui/material/Button';

const pages = ['ANASAYFA', 'HAKKIMIZDA', 'BLOG', 'EĞİTİM', 'FOTOĞRAFLAR', 'VİDEOLAR', 'İLETİŞİM'];

function ResponsiveAppBar() {


    const handleClickTab = (e) => {
        console.log(e.target.name, 'tıklandı')
    };

    return (
        <AppBar position="static" sx={{background: 'white'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo}/>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                name={page}
                                onClick={handleClickTab}
                                sx={{my: 2, mx: 1, color: 'red', display: 'block'}}
                            >
                                <Typography variant={"h5"}>{page}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
