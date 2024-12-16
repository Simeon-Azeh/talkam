import { Divider, Stack, Typography, Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {  DownloadSimple, Image } from 'phosphor-react';
import React from 'react';



const DocMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
    <Box
      p={1.5}
      sx={{
        backgroundColor: el.incoming
          ? theme.palette.mode === 'light'
            ? '#f8faff'
            : theme.palette.background.paper
          : '#0162c4',
        borderRadius: el.incoming ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
        boxShadow: el.incoming ? "1px 1px 4px rgba(0, 0, 0, 0.1)" : "2px 2px 6px rgba(0, 98, 196, 0.3)",
        color: el.incoming ? theme.palette.text.primary : "#fff",
      }}
      width={"max-content"}
    >
      <Stack spacing={1}>
        <Stack p={2} direction={"row"} alignItems={"center"} spacing={1} sx={{
          backgroundColor: el.incoming
            ? theme.palette.mode === 'light'
              ? '#e0f7fa' // Slightly different color for document container
              : theme.palette.background.default
            : '#0162c4',
          borderRadius: "16px",
          boxShadow: el.incoming && theme.palette.mode === 'light' ? "1px 1px 4px rgba(0, 0, 0, 0.1)" : el.incoming ? "none" : "2px 2px 6px rgba(0, 98, 196, 0.3)",
          color: el.incoming ? theme.palette.text.primary : "#fff"
        }}>
          <Image size={48} />
          <Typography variant="caption" color={el.incoming ? theme.palette.text.primary : "#fff"}>
            Abstract.png
          </Typography>
          <IconButton>
            <DownloadSimple />
          </IconButton>
        </Stack>
        <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
          {el.message}
        </Typography>
      </Stack>
    </Box>
  </Stack>
  );
};


const LinkMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        
     
        width={"max-content"}
      >
        <Stack spacing={1} >
          <Stack spacing={0.5} p={2} alignItems={"center"} direction={"column"} sx={{backgroundColor: el.incoming ? theme.palette.mode === 'light' ? '#f8faff' : theme.palette.background.paper : '#0162c4', borderRadius: "16px", boxShadow: el.incoming ? "1px 1px 4px rgba(0, 0, 0, 0.1)" : "2px 2px 6px rgba(0, 98, 196, 0.3", color: el.incoming ? theme.palette.text.primary : "#fff", borderRadius: el.incoming ? "16px 16px 16px 4px" : "16px 16px 4px 16px"}}>
        <img src={el.preview} alt={el.message} style={{maxHeight:210, borderRadius: '10px'}} />
        <Stack spacing={0.5}>
            <Typography variant="subtitle2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
              Creating a chatapp 
            </Typography>
            <Typography variant="subtitle2" component={"a"} color={el.incoming ? theme.palette.primary.main : "#fff"} href={"https://www.chatapp.com"} target="_blank">
              www.chatapp.com
            </Typography>
        </Stack>
        <Typography variant="body2" color={el.incoming ? theme.palette.text.secondary : "#fff"}>
          {el.message}
        </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

const ReplyMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.mode === 'light'
              ? '#f8faff'
              : theme.palette.background.paper
            : '#0162c4',
          borderRadius: el.incoming ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
          boxShadow: el.incoming ? "1px 1px 4px rgba(0, 0, 0, 0.1)" : "2px 2px 6px rgba(0, 98, 196, 0.3)",
          color: el.incoming ? theme.palette.text.primary : "#fff",
        }}
        width={"max-content"}
      >
        <Box
          p={1}
          sx={{
            backgroundColor: el.incoming
              ? theme.palette.mode === 'light'
                ? '#e0f7fa'
                : theme.palette.background.default
              : '#0288d1',
            borderRadius: "12px",
          }}
        >
          <Typography variant="caption" color={el.incoming ? theme.palette.text.secondary : "#fff"}>
          {el.message}
          </Typography>
        </Box>
        <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"} mt={1}>
       {el.reply}
        </Typography>
      </Box>
    </Stack>
  );
};

const MediaMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.mode === 'light'
              ? '#f8faff'
              : theme.palette.background.paper
            : '#0162c4',
          borderRadius: "16px",
          boxShadow: el.incoming ? "1px 1px 4px rgba(0, 0, 0, 0.1)" : "2px 2px 6px rgba(0, 98, 196, 0.3)",
          color: el.incoming ? theme.palette.text.primary : "#fff",
        }}
        width={"max-content"}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{
              borderRadius: "12px",
              maxHeight: 210,
              maxWidth: 280,
              objectFit: "cover",
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const TextMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={el.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.mode === 'light'
              ? '#f8faff'
              : theme.palette.background.paper
            : '#0162c4',
          borderRadius: el.incoming ? "20px 20px 20px 8px" : "20px 20px 8px 20px",
          color: el.incoming ? theme.palette.text.primary : "#fff",
          boxShadow: el.incoming ? "1px 1px 4px rgba(0, 0, 0, 0.1)" : "2px 2px 6px rgba(0, 98, 196, 0.3)",
        }}
        width={"max-content"}
      >
        <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
          {el.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent={"space-between"}
      pt={2}
      px={2}
    >
      <Divider
        width={"46%"}
        sx={{
          borderColor: theme.palette.mode === 'light' ? '#ddd' : '#555',
        }}
      />
      <Typography
        variant="caption"
        sx={{
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.mode === 'light' ? '#f3f4f6' : '#333',
          padding: "2px 8px",
          borderRadius: 10,
        }}
      >
        {el.text}
      </Typography>
      <Divider
        width={"46%"}
        sx={{
          borderColor: theme.palette.mode === 'light' ? '#ddd' : '#555',
        }}
      />
    </Stack>
  );
};

export { Timeline, TextMessage, MediaMessage, ReplyMessage, LinkMessage, DocMessage };