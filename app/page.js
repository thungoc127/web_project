import { AuthContextProvider } from "./_utils/auth-context";
import LandingPage from "./landing/page";

export default function Page() {
  return (
    <AuthContextProvider>
      <LandingPage />
    </AuthContextProvider>
  );
}
