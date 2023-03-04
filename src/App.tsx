import initFetchMock from "./services/mocks/mock-api-sorce";
import fetchMock from "fetch-mock";
import { LoginContainer } from './containers/LoginContainer';
import './App.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { DashboardContainer } from './containers/DashboardContainer';

initFetchMock(fetchMock);

function App() {
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <DashboardContainer />,
    },
    {
      path: '/',
      element: <LoginContainer />
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
