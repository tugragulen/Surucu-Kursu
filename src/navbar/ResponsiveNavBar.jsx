import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {IconButton, Menu, MenuItem, MenuList} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Logo from '../img/kurs.png';
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu"
import {useNavigate} from "react-router-dom";

const pages = [
    {
        name: "Anasayfa",
        url: "/"
    },
    {
        name: "Hakkımızda",
        url: "/hakkimizda"
    },
    {
        name: "Blog",
        url: "/blog"
    },
    {
        name: "Eğitim",
        url: "/egitim"
    },
    {
        name: "Fotoğraflar",
        url: "/fotograflar"
    },
    {
        name: "Videolar",
        url: "/videolar"
    },
    {
        name: "İletişim",
        url: "/iletisim"
    }
]

const ResponsiveNavBar = () => {
    const navigate = useNavigate();
    const [anchorNav, setAnchorNav] = useState(null);

    const handleClickTab = (page) => {
        navigate(page.url);
        closeMenu();
    }
    const openMenu = (event) => {
        setAnchorNav(event.currentTarget);
    }
    const closeMenu = () => {
        setAnchorNav(null);
    }
    return (
        <AppBar position={"static"} sx={{backgroundColor: 'white'}}>
            <Toolbar>
                <Box display={'flex'} justifyContent={'space-between'} width={"97%"}>
                    <IconButton disableRipple={true} size={"large"} edge={"start"} color={"inherit"} aria-label={"logo"}
                                sx={{display: {xs: 'none', md: 'flex'}}}
                                onClick={() => {handleClickTab(pages[0])}}
                    >
                        <Box component={"img"}
                             sx={{height: 128}}
                             alt="Logo"
                             src={Logo}
                        />
                        <Typography variant={"h5"} component={"div"} fontStyle={"italic"} color={'red'}
                                    sx={{display: {xs: 'none', md: 'flex'}}}>
                            "Önce eğitim diyenlerin adresi"
                        </Typography>
                    </IconButton>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}} alignItems={"center"}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                name={page.name}
                                onClick={() => {
                                    handleClickTab(page)
                                }}
                                sx={{my: 2, mx: 1, color: 'red', display: 'block', textTransform:"none !important", height:"fit-content"}}
                            >
                                <Typography variant={"h6"}>{page.name}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton disableRipple size={"large"} edge={"start"} onClick={openMenu}>
                            <MenuIcon/>
                        </IconButton>
                        <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display: {xs: 'flex', md: 'none'}}}>
                            <MenuList>
                                {pages.map((page) => (
                                    <MenuItem
                                        onClick={() => {
                                            handleClickTab(page)
                                        }}
                                    >
                                        {page.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <IconButton disableRipple size={"large"} edge={"end"} color={"inherit"} aria-label={"logo"}
                                    sx={{display: {xs: 'flex', md: 'none'}}}
                                    onClick={() => {handleClickTab(pages[0])}}
                        >
                            <Box component={"img"}
                                 sx={{height: 128}}
                                 alt="Logo"
                                 src={Logo}
                            />
                            <Typography variant={"h6"} component={"div"} fontStyle={"italic"} color={'red'}
                                        sx={{display: {xs: 'flex', md: 'none'}}}>
                                "Önce eğitim diyenlerin adresi"
                            </Typography>
                        </IconButton>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default ResponsiveNavBar;