import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Switch as ThemeSwitch
} from '@mui/material'
// import {Menu as MenuIcon} from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
    isDarkMode: boolean;
    isDrawerOpen: boolean;
}

export const AppBarComponent: React.FC<Props> = ({
    handleDrawerToggle,
    onThemeChange,
    isDarkMode,
    isDrawerOpen,
}): JSX.Element => {

    return (
            <div>
                <AppBar position="static" variant="elevation">
                    <Toolbar variant="dense">
                        <IconButton
                            color="inherit"
                            onClick={handleDrawerToggle}
                            edge="start"
                            sx={{mr:2, ...(isDrawerOpen && {display:"none"})}}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            sx={{flexGrow: 1}}
                            >
                            Stockmate 股伴 第四組
                        </Typography>
                        {isDarkMode?<DarkModeIcon/>:null}
                        {!isDarkMode?<LightModeIcon/>:null}
                        <ThemeSwitch
                            size='small'
                            onChange={onThemeChange}
                            color='default'
                            />
                    </Toolbar>
                </AppBar>

            </div>
        )
}