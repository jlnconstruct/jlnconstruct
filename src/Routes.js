import Accueil from "./component/pages/accueil/Accueil";
import Admin from "./component/pages/Admin/admin";
import Contact from "./component/pages/contact/Contact";
import Realisation from "./component/pages/realisation/Realisation";

const Routes = [
    { path: '', element: <Admin/> , children:[
        { path: '' , element: <Accueil /> },
        { path: 'realisation' , element: <Realisation /> },
        { path: 'contact' , element: <Contact /> },
    ] }
];

export default Routes;