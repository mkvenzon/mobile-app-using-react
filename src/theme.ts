import { createTheme } from "@mui/material";

export const theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 58,
    },
  },
});
