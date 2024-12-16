import {  Box, Stack } from '@mui/material';
import React from 'react';
import {  useTheme } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';
import Message from './Message';





export default function Conversation() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
        <Header />

     
      {/* Chat messages */}
      <Message />
      {/* Chat input */}
      <Footer />
     
    </Stack>
  );
}