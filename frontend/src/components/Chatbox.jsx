import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../context/ChatProvider";
import { useBreakpointValue } from "@chakra-ui/react";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  const display = useBreakpointValue({ base: selectedChat ? "flex" : "none", md: "flex" });

  return (
    <Box
      style={{ alignItems:"center", flexDirection:"column", display: display, }}
      p={3}
      bg="#2A4558"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;