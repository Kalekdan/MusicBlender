import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

export function ContinuousSlider({trackId, volume}) {
  const [value, setValue] = useState(volume);
  // let trackId = props.trackId;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let iframe = document.getElementById(trackId);
    let func = "setVolume";
    let args = [newValue];
    if (iframe.src.indexOf("youtube.com/embed") !== -1) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: func,
          args: args || [],
        }),
        "*"
      );
    }
  };

  return (
    <Box style={{ margin: "auto" }} sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
