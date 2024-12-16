import { Box, Stack, IconButton, TextField, InputAdornment, Fab, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { File, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User, Image } from 'phosphor-react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { keyframes } from '@emotion/react';

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  "& .MuiInputBase-input": {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));

const Actions = [
  {
    color: "#0162c4",
    icon: <Image size={24} />,
    y: 102, 
    title: "Media",
    action: () => document.getElementById('media-input').click(),
  },
  {
    color: "#0162c4",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Sticker",
    action: () => alert('Sticker button clicked!'),
  },
  {
    color: "#0162c4",
    icon: <File size={24} />,
    y: 242,
    title: "File",
    action: () => document.getElementById('file-input').click(),
  },
  {
    color: "#0162c4",
    icon: <LinkSimple size={24} />,
    y: 312,
    title: "Link",
    action: () => alert('Link button clicked!'),
  },
  {
    color: "#1b8cfe",
    icon: <User size={24} />,
    y: 382,
    title: "User",
    action: () => alert('User button clicked!'),
  },
];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
`;

const ChatInput = ({ onSmileyClick, onFabClick, openActions }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <StyledInput
      fullWidth
      placeholder='Type a message...'
      variant='filled'
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'max-content' }}>
            <Stack sx={{ position: "relative" }}>
              {Actions.map((el, index) => (
                <Tooltip
                  title={el.title}
                  key={el.title}
                  placement='right'
                  arrow
                  PopperProps={{
                    sx: {
                      "& .MuiTooltip-tooltip": {
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                      },
                      "& .MuiTooltip-arrow": {
                        color: theme.palette.primary.main,
                      },
                    },
                  }}
                >
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                      animation: `${openActions ? fadeInUp : fadeOutDown} 0.3s ease-out ${index * 0.1}s both`,
                      display: openActions ? 'block' : 'none',
                    }}
                    onClick={el.action}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton onClick={onFabClick}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={onSmileyClick}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: isDarkMode ? theme.palette.background.paper : "#fff",
        color: isDarkMode ? theme.palette.text.primary : "#000",
      }}
    />
  );
}

function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [showPicker, setShowPicker] = useState(false);
  const [openActions, setOpenActions] = useState(false);

  const handleSmileyClick = () => {
    setShowPicker(!showPicker);
  };

  const handleFabClick = () => {
    setOpenActions(!openActions);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: isDarkMode ? theme.palette.background.paper : "#f8faff", boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', position: 'relative' }}>
      <Stack direction={"row"} alignItems={"center"} p={2}>
        <Stack sx={{ flexGrow: 1 }}>
          {showPicker && (
            <Box sx={{ position: 'absolute', bottom: 81, right: 100, zIndex: 10 }}>
              <Picker data={data} theme={theme.palette.mode} onEmojiSelect={console.log} />
            </Box>
          )}
          <ChatInput onSmileyClick={handleSmileyClick} onFabClick={handleFabClick} openActions={openActions} />
        </Stack>
        {/* Chat Input */}
        <Box sx={{ height: 48, width: 68, borderRadius: 1.5, backgroundColor: theme.palette.primary.main, ml: 2 }}>
          <Stack sx={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <IconButton sx={{ color: "#fff" }}>
              <PaperPlaneTilt />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
      {/* Hidden file inputs for Media and File actions */}
      <input type="file" id="media-input" style={{ display: 'none' }} accept="image/*,video/*" onChange={(e) => console.log(e.target.files)} />
      <input type="file" id="file-input" style={{ display: 'none' }} onChange={(e) => console.log(e.target.files)} />
    </Box>
  )
}

export default Footer;