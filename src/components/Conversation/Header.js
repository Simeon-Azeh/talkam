import { Avatar, Box, Stack, Badge, Typography, IconButton, Divider } from '@mui/material';
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function Header() {

     const theme = useTheme();
      const isDarkMode = theme.palette.mode === 'dark';
    
  return (
    <Box p={2} sx={{ width: "100%", backgroundColor: isDarkMode ? theme.palette.background.paper : "#f8faff", boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
    <Stack alignItems='center' direction={"row"} justifyContent={"space-between"} sx={{ width: '100%', height: '100%' }}>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot">
            <Avatar />
          </StyledBadge>
        </Box>
        <Stack spacing={0.2}>
          <Typography variant={"subtitle2"}>John Doe</Typography>
          <Typography variant={"caption"}>Online</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <IconButton >
          <VideoCamera />
        </IconButton>
        <IconButton >
          <Phone />
        </IconButton>
        <IconButton >
          <MagnifyingGlass />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton >
          <CaretDown />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
  )
}

export default Header
