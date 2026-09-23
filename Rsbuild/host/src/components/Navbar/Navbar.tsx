import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router';

const navItems = [
  { to: '/', label: 'Listings' },
  { to: '/saved-homes', label: 'Saved Homes' },
];

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: '#fff', borderBottom: '1px solid #e5e7eb' }}
    >
      <Toolbar>
        <Stack direction="row" spacing={1}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              end
              variant="contained"
              disableElevation
              sx={{
                bgcolor: '#000',
                color: '#fff',
                textTransform: 'none',
                '&:hover': { bgcolor: '#333' },
                '&.active': {
                  boxShadow: '0 0 0 2px #fff, 0 0 0 4px #000',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
