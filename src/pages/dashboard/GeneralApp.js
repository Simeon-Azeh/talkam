import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";

import { useTheme } from "@mui/material/styles";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100vw", height: "100vh", }}>
      {/* Chats */}
      <Chats />

      {/* Conversations */}
      <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,  }}>
        {/* Add your conversation content here */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;