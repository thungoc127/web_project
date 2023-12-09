import { AuthContextProvider } from "./_utils/auth-context";
import LandingPage from "./LandingPage/page";

export default function Page() {
  return (
    <AuthContextProvider>
      <LandingPage />
    </AuthContextProvider>
  );
}
