import React, {useState} from 'react'
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material"
import {
  AppBarComponent,
} from './components/Appbar/AppBarComponent'
import {
  SideBar
} from './components/Sidebar/SideBar'
import {
  Menu
} from './components/Menu/Menu'
// import './App.css';
import {ROUTES} from './routes/index'

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false)

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = React.useCallback(() => {
    setSideBarToggle(!sideBarToggle);
  }, [sideBarToggle])

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode==="dark"?"light":"dark")
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode==='dark'}
        isDrawerOpen={sideBarToggle}
      />
      <SideBar
        isOpen={sideBarToggle}
        handleDrawerToggle={handleDrawerToggle}
        children={<Menu links={ROUTES}/>}
      />
    </ThemeProvider>
  );
}

export default App;