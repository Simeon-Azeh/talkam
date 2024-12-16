import React from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Chat_History } from '../../data';
import { MediaMessage, Timeline, TextMessage, ReplyMessage, LinkMessage } from './MsgTypes';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Message = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box width={"100%"} sx={{ flexGrow: 1, overflow: 'hidden', backgroundColor: isDarkMode ? theme.palette.background.default : "#fff" }}>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <Stack spacing={3} p={2}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                return <Timeline key={el.id} el={el} />;
              case "msg":
                switch (el.subtype) {
                  case "img":
                    return <MediaMessage key={el.id} el={el} />;
                  case "doc":
                    // doc message
                    break;
                  case "text":
                    return <TextMessage key={el.id} el={el} />;
                  case "video":
                    // video message
                    break;
                  case "audio":
                    // audio message
                    break;
                  case "link":
                    return <LinkMessage key={el.id} el={el} />;
                    break;
                  case "reply":
                    return <ReplyMessage key={el.id} el={el} />;
                
                  case "sticker":
                    // sticker message
                    break;
                  case "file":
                    // file message
                    break;
                  default:
                    return <TextMessage key={el.id} el={el} />;
                }
                break;
              default:
                return <></>;
            }
          })}
        </Stack>
      </SimpleBar>
    </Box>
  );
};

export default Message;