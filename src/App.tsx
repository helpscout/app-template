import { DefaultStyle, Heading, useHelpScoutContext } from "@helpscout/ui-kit";

function App() {
  const { user } = useHelpScoutContext();

  return (
    <div className="App">
      <DefaultStyle />
      <Heading level="h4">Hi {user?.firstName || "there"} 👋</Heading>
    </div>
  );
}

export default App;
