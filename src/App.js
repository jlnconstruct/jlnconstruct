import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => {

  const routes = useRoutes(Routes)

  return (
    <>
      {routes}
    </>
  );
}

export default App;
