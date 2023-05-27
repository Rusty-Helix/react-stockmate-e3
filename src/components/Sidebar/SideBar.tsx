import React from 'react'
import {
    Divider,
    Drawer,
    IconButton,
    Typography
} from '@mui/material'
import {styled} from "@mui/material/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@mui/material/styles';
// import { Divider } from ''

const DrawerHeader = styled("div")(({theme})=>({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}))
const LogoStyled = styled("div")(({theme})=>({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
}))


interface Props {
    isOpen: boolean;
    children: any;
    handleDrawerToggle: () => void;
}

const DRAWER_WIDTH = 240

export const SideBar: React.FC<Props> = ({
    isOpen,
    children,
    handleDrawerToggle,
}): JSX.Element => {
        const theme = useTheme()
    return (
            <>
                <Drawer
                    sx={{
                        width: DRAWER_WIDTH,
                        flexShring: 0,
                        "& .MUIDrawer-paper": {
                            width: DRAWER_WIDTH,
                            boxSizing: "border-box"
                        }
                    }}
                    variant="persistent"
                    anchor="left"
                    open={isOpen}
                >
                    <DrawerHeader>
                        <LogoStyled>
                            <Typography
                                variant="subtitle2"
                                component="div"
                                align="left"
                            >
                                Stockmate 股伴
                            </Typography>
                        </LogoStyled>
                        <IconButton onClick={handleDrawerToggle}>
                            {(theme.direction==="ltr")?(
                            <ChevronLeftIcon/>
                            ):(
                            <ChevronRightIcon/>)}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {children}
                </Drawer>
            </>
        )
}