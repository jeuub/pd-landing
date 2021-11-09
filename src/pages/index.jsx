import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./main/main";
import NotFound from "./notFound/notFound";
import CustomCursor from "@components/cursor/cursor";

const Pages = () => {
  const [device, setDevice] = React.useState(null);
  React.useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setDevice("mobile");
    } else setDevice("pc");
  },[]);

  return (
    <>
      {device === "pc" ? <CustomCursor /> : null}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Pages;
