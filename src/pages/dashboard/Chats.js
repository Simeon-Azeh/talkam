import React from 'react';
import { Box, Stack, Typography, IconButton, InputBase, Button, Divider, Avatar, Badge } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass, PushPin } from 'phosphor-react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { ChatList } from '../../data';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

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

const ChatElement = ({ id, name, img, msg, time, unread, online, pinned }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 1.5,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.default,
        position: 'relative',
      }}
      p={2}
    >
      {pinned && (
        <Box sx={{ position: 'absolute', top: 4, right: 10 }}>
          <PushPin size={16} color={theme.palette.primary.main} />
        </Box>
      )}
      <Stack direction="row" alignItems={"center"} spacing={2} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar />
            </StyledBadge>
          ) : (
            <Avatar />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2" fontWeight={800}>
              {name}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                maxWidth: '150px',
              }}
            >
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="caption" color="textSecondary">
            {time}
          </Typography>
          <Badge color='primary' badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function Chats() {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative', height: '100vh', width: 320, backgroundColor: theme.palette.mode === "light" ? '#f8faff' : theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
      <Stack p={2} spacing={2} sx={{ height: '100%' }}>
        <Stack direction='row' alignItems={"center"} justifyContent={"space-between"} borderBottom={1} borderColor={"#e0e0e0"}>
          <Typography variant="h5" fontWeight={800}>
            Chats
          </Typography>
          <IconButton>
            <CircleDashed size={24} />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }} paddingTop={2}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='#709ce6' />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1} paddingTop={1}>
            <ArchiveBox size={18} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <SimpleBar style={{ maxHeight: '100%' }}>
            <Stack spacing={1.2} marginBottom={2}>
              <Typography variant="subtitle2" fontWeight={800} sx={{ color: '#676767' }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => (
                <ChatElement key={el.id} {...el} pinned />
              ))}
            </Stack>
            <Stack spacing={1.2}>
              <Typography variant="subtitle2" fontWeight={800} sx={{ color: '#676767' }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => (
                <ChatElement key={el.id} {...el} />
              ))}
            </Stack>
          </SimpleBar>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chats;