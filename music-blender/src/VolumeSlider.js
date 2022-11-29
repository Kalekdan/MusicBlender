import React, { useState } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export function ContinuousSlider(props) {
  const [value, setValue] = useState(50);
  const trackId = props.trackId;
  const handleChange = (event, newValue) => {
    setValue(newValue);
    let elem = document.getElementById(trackId);
    console.log(elem);
    // elem.pause();
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
