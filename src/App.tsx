import { LandingPage } from "@/components/landing-page";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  return <><LandingPage />
  <Analytics />
  </>;
}

export default App;