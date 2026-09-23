import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'saved-homes', label: 'Saved Homes' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

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
              key={item.id}
              href={`#${item.id}`}
              variant="contained"
              disableElevation
              onClick={() => setActive(item.id)}
              sx={{
                bgcolor: '#000',
                color: '#fff',
                textTransform: 'none',
                '&:hover': { bgcolor: '#333' },
                ...(active === item.id && {
                  boxShadow: '0 0 0 2px #fff, 0 0 0 4px #000',
                }),
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
