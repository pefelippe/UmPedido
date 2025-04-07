import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { AuthGoogleProvider } from "./context/AuthGoogleContext";
import { queryClient } from "./lib/react-query";
import { router } from "./routes";

import "./index.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <HelmetProvider>
        <Helmet titleTemplate="%s - MyStore" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <AuthGoogleProvider>
            <RouterProvider router={router} />
          </AuthGoogleProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </I18nextProvider>
  );
}

export default App;
