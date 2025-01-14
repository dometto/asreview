import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "App";
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { theme } from "constants/theme";
import { ScrollToTop } from "Components";

const queryClient = new QueryClient();

function ASReviewApp() {
  const muiTheme = createTheme({
    // cssVariables: true,
    ...theme,
  });

  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ASReviewApp />);
