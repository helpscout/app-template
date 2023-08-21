import { SidePanel, Sidebar } from './views';
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { DefaultStyle } from '@helpscout/ui-kit';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Sidebar />} />
        <Route path="/side-panel" element={<SidePanel />} />
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
