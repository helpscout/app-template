import HelpScout, { NOTIFICATION_TYPES } from '@helpscout/javascript-sdk';
import { Button, Heading } from '@helpscout/ui-kit';

import { Divider } from '../components/';

function SidePanel() {
  function onClick() {
    HelpScout.showNotification(
      NOTIFICATION_TYPES.SUCCESS,
      'Hello from the side panel! 👋'
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Heading level="h1">This is the side panel content 🚀</Heading>
      <Divider />
      <Button size="sm" onClick={() => onClick()}>
        Click me
      </Button>
    </div>
  );
}

export default SidePanel;
