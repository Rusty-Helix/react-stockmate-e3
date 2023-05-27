import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
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
import {Dashboard} from './pages/dashboard/Dashboard'
import {Blotter} from './pages/blotter/Blotter'
import {TradeTicket} from './pages/tradeticket/TradeTicket'

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
          <Routes>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Blotter />} path="/blotter" />
            <Route element={<TradeTicket />} path="/trade-ticket" />

            <Route element={<Navigate to="/dashboard"/>} path="*"/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;