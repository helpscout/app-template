import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
import {
  Button,
  DefaultStyle,
  Heading,
  useSetAppHeight,
} from "@helpscout/ui-kit";
import { useEffect, useState } from "react";

function App() {
  const appRef = useSetAppHeight();

  const urlSearchParams = new URLSearchParams(window.location.search);

  const [userEmail, setUserEmail] = useState<string | undefined>(
    "unknown user"
  );

  useEffect(() => {
    HelpScout.getApplicationContext().then(({ user }) =>
      setUserEmail(user?.email)
    );
  }, []);

  function onClick() {
    HelpScout.showNotification(
      NOTIFICATION_TYPES.SUCCESS,
      "Hello from the sidebar app"
    );
  }

  function openSidePanel() {
    HelpScout.openSidePanel(window.location.href + "?view=sidepanel");
  }

  // Borrowed 'routing' from Rikki so we can open the sidepanel
  const renderScreen = () => {
    switch (urlSearchParams.get("view")) {
      case "sidepanel":
        return <h1>This is the side panel 🚀</h1>;
      default:
        return (
          <>
            <Heading level="h1">Hi, {userEmail}</Heading>
            <br />
            <Button size="sm" onClick={onClick}>
              Click me
            </Button>
            <h1 />
            <Button size="sm" onClick={openSidePanel}>
              Open side panel
            </Button>
          </>
        );
    }
  };

  return (
    <div className="App" ref={appRef}>
      <DefaultStyle />
      {renderScreen()}
    </div>
  );
}

export default App;
