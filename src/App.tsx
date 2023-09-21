import {
  Outlet,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { DefaultStyle } from '@helpscout/ui-kit';

import { SidePanelView, SidebarView } from './views';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<SidebarView />} />
        <Route path="/side-panel" element={<SidePanelView />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <DefaultStyle />
      <Outlet />
    </>
  );
};

export default App;
