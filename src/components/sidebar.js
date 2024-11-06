

/*import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ExploreIcon from '@mui/icons-material/Explore';
import AnimationIcon from '@mui/icons-material/Animation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HorrorIcon from '@mui/icons-material/RemoveRedEye';
import DramaIcon from '@mui/icons-material/Theaters';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import { FormLabel } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -`${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  position: 'relative',
  backgroundColor: '#b71c1c', // Reddish background color added
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
}));

const BoldButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
}));

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search…"
            sx={{ backgroundColor: 'background.paper' }}
          />
          <NetflixTypography variant="h6" noWrap component="div">
            NETFLIX-4.0
          </NetflixTypography>
          <BoldButton color="inherit" onClick={handleLoginOpen}>
            Login Page
          </BoldButton>
        </ToolbarStyled>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#b71c1c', // Reddish background color added
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Home' ? <HomeIcon /> :
                  text === 'Popular' ? <TrendingUpIcon /> :
                   text === 'Top Rated' ? <StarIcon /> :
                   text === 'Upcoming' ? <NewReleasesIcon /> :
                  null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Action', 'Adventure', 'Animation', 'Comedy', 'Favourites', 'Horror', 'Drama'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Action' ? <SportsMotorsportsIcon /> :
                   text === 'Adventure' ? <ExploreIcon /> :
                   text === 'Animation' ? <AnimationIcon /> :
                   text === 'Comedy' ? <EmojiEmotionsIcon /> : 
                   text === 'Favourites' ? <FavoriteIcon sx={{ color: 'black' }} /> :
                   text === 'Horror' ? <HorrorIcon /> :
                   text === 'Drama' ? <DramaIcon /> :
                   null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {accessGranted && (
          <Typography variant="h6">Welcome, Admin!</Typography>
        )}
        {/* Add logic to display movies based on the selected category *//*}
      </Main>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormHelperText>Enter your username/Email id</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>Enter your password</FormHelperText>
          </FormControl>
          <Button onClick={handleForgotPassword} color="secondary">
            Forgot Password?
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountOpen} color="primary">
            Create Account
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>First Name</InputLabel>
            <Input />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Last Name</InputLabel>
            <Input />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Email ID</InputLabel>
            <Input />
            <FormHelperText>Enter your Email ID</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Create Password</InputLabel>
            <Input type="password" />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Confirm Password</InputLabel>
            <Input type="password" />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}*/


import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ExploreIcon from '@mui/icons-material/Explore';
import AnimationIcon from '@mui/icons-material/Animation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HorrorIcon from '@mui/icons-material/RemoveRedEye';
import DramaIcon from '@mui/icons-material/Theaters';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import { FormLabel } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -`${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  position: 'relative',
  backgroundColor: '#b71c1c', // Reddish background color added
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
}));

const BoldButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
}));

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category); // Call the callback to notify App.js
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search…"
            sx={{ backgroundColor: 'background.paper' }}
          />
          <NetflixTypography variant="h6" noWrap component="div">
            NETFLIX-4.0
          </NetflixTypography>
          <BoldButton color="inherit" onClick={handleLoginOpen}>
            Login Page
          </BoldButton>
        </ToolbarStyled>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#b71c1c', // Reddish background color added
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Home' ? <HomeIcon /> :
                  text === 'Popular' ? <TrendingUpIcon /> :
                   text === 'Top Rated' ? <StarIcon /> :
                   text === 'Upcoming' ? <NewReleasesIcon /> :
                  null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Action', 'Adventure', 'Animation', 'Comedy', 'Favourites', 'Horror', 'Drama'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Action' ? <SportsMotorsportsIcon /> :
                   text === 'Adventure' ? <ExploreIcon /> :
                   text === 'Animation' ? <AnimationIcon /> :
                   text === 'Comedy' ? <EmojiEmotionsIcon /> : 
                   text === 'Favourites' ? <FavoriteIcon sx={{ color: 'black' }} /> :
                   text === 'Horror' ? <HorrorIcon /> :
                   text === 'Drama' ? <DramaIcon /> :
                   null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* Main content goes here */}
      </Main>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormHelperText>Enter your username/Email id</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>Enter your password</FormHelperText>
          </FormControl>
          <Button onClick={handleForgotPassword} color="secondary">
            Forgot Password?
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountOpen} color="primary">
            Create Account
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>First Name</InputLabel>
            <Input />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Last Name</InputLabel>
            <Input />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Email ID</InputLabel>
            <Input />
            <FormHelperText>Enter your Email ID</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Create Password</InputLabel>
            <Input type="password" />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Confirm Password</InputLabel>
            <Input type="password" />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Create Account
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


///dupl



