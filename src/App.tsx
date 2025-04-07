import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { AuthGoogleProvider } from "./context/AuthGoogleContext";
import { queryClient } from "./lib/react-query";
import { router } from "./routes";

import './i18n'
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - MyStore" />
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <AuthGoogleProvider>
          <RouterProvider router={router} />
        </AuthGoogleProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
