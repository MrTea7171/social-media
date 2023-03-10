import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import MyPostWidget from "../widgets/MyPostWidget";
import UserWidget from "../widgets/UserWidget";

const HomePage = () => {
  const isNonMobileScreens=useMediaQuery("(min-width:1000px");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box 
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens?"flex":"block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens?"26%":undefined}>
          <UserWidget userId={_id} picturePath={picturePath}/>
        </Box>
        <Box 
          flexBasis={isNonMobileScreens?"42%":undefined}
          mt={!isNonMobileScreens?"2rem":undefined}
        >
          <MyPostWidget picturePath={picturePath}/>
        </Box>
        <Box 
          flexBasis={isNonMobileScreens?"32%":undefined}
          mt={!isNonMobileScreens?"2rem":undefined}
        >
          <UserWidget userId={_id} picturePath={picturePath}/>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
