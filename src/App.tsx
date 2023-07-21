import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
import {
  Button,
  DefaultStyle,
  Heading,
  useSetAppHeight,
  Text,
  useHelpScoutContext,
} from "@helpscout/ui-kit";
import { useEffect, useState } from "react";

function App() {
  const appRef = useSetAppHeight();

  const [userEmail, setUserEmail] = useState<string | undefined>(
    "unknown user"
  );

  const [status, setStatus] = useState<string | undefined>("unknown status");

  const {user, conversation} = useHelpScoutContext()
  useEffect(() => {
    setUserEmail(user?.email)
    setStatus(conversation?.status)
  }, [user, conversation]);

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
      <Text>The conversation is {status}</Text>
      <br />
      <Button size="sm" onClick={onClick}>
        Click me
      </Button>
    </div>
  );
}

export default App;
