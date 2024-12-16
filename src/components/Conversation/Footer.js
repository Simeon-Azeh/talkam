import {  Box, Stack,  IconButton,  TextField, InputAdornment } from '@mui/material';
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {  LinkSimple,  PaperPlaneTilt,  Smiley} from 'phosphor-react';


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
function Footer() {
        const theme = useTheme();
          const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ width: "100%", backgroundColor: isDarkMode ? theme.palette.background.paper : "#f8faff", boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
        <Stack direction={"row"} alignItems={"center"} p={2}>
          <StyledInput
            fullWidth
            placeholder='Type a message...'
            variant='filled'
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment >
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment >
                  <IconButton>
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
          <Box sx={{ height: 48, width: 68, borderRadius: 1.5, backgroundColor: theme.palette.primary.main, ml: 2 }}>
            <Stack sx={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
              <IconButton sx={{ color: "#fff" }}>
                <PaperPlaneTilt />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
        
      </Box>
  )
}

export default Footer
