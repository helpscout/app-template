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

  return (
    <div className="App" ref={appRef}>
      <DefaultStyle />
      <Heading level="h1">Hi, {userEmail}</Heading>
      <br />
      <Button size="sm" onClick={onClick}>
        Click me
      </Button>
    </div>
  );
}

export default App;
