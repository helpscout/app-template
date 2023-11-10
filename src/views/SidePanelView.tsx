import { useEffect, useState } from 'react';

import HelpScout, { NOTIFICATION_TYPES } from '@helpscout/javascript-sdk';
import {
  SidePanel,
  Text,
  useHelpScoutContext,
  Heading,
} from '@helpscout/ui-kit';

function SidePanelView() {
  const [userEmail, setUserEmail] = useState<string | undefined>(
    'unknown user'
  );

  const [status, setStatus] = useState<string | undefined>('unknown status');

  const { user, conversation } = useHelpScoutContext();

  useEffect(() => {
    setUserEmail(user?.email);
    setStatus(conversation?.status);
  }, [user, conversation]);

  function onClick() {
    HelpScout.showNotification(
      NOTIFICATION_TYPES.SUCCESS,
      'Hello from the side panel! 👋'
    );
  }

  return (
    <SidePanel>
      <SidePanel.Header
        title="Side Panel"
        subtitle="Subtitle"
        titleLink="https://developer.helpscout.com/"
        icon="large-single-arrow-left"
      />
      <SidePanel.Content>
        <Heading level="h1">Hi, {userEmail}</Heading>
        <Text>The conversation is {status}</Text>
        <hr />
        <Text>
          This is some more text. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Quisque tincidunt, mauris ut varius cursus, est dui
          fermentum risus, id sollicitudin lacus dolor a metus. Praesent ut
          fermentum mi, at pellentesque nisl.
        </Text>
      </SidePanel.Content>
      <SidePanel.Footer
        buttonLabel="Click Me!"
        buttonTheme="blue"
        onButtonClick={onClick}
      />
    </SidePanel>
  );
}

export default SidePanelView;
