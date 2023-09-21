import HelpScout, { NOTIFICATION_TYPES } from '@helpscout/javascript-sdk';
import { SidePanel, Text } from '@helpscout/ui-kit';

function SidePanelView() {
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
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tincidunt, mauris ut varius cursus, est dui fermentum risus, id
          sollicitudin lacus dolor a metus. Praesent ut fermentum mi, at
          pellentesque nisl.
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
