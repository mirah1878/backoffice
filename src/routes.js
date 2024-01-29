/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";

import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ListeCategorieInformation from 'layouts/billing/components/BillingInformation/ListeCategorieInformation';
import { CategorieComponent } from 'layouts/billing/index';
import { ModeleComponent } from 'layouts/billing/index';
import { TransmissionComponent } from 'layouts/billing/index';
import { CarburantComponent } from "layouts/billing";
import { CouleurComponent } from "layouts/billing";
import { EtatComponent } from "layouts/billing";
import AddCategorie  from "layouts/authentication/sign-up/AddCategorie";
import AddModele from "layouts/authentication/sign-up/AddModele";
import AddTransmission from "layouts/authentication/sign-up/AddTransmission";
import AddCarburant from "layouts/authentication/sign-up/AddCarburant";
import AddCouleur from "layouts/authentication/sign-up/AddCouleur";
import AddEtat from "layouts/authentication/sign-up/AddEtat";

const routes = [
  {
    type: "route",
    name: "Statistique",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Validation annonce ",
    key: "tables",
    route: "/tables",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Tables />,
  },
  // {
  //   type: "route",
  //   name: "Validation vente",
  //   key: "tables",
  //   route: "/tables",
  //   icon: (
  //     <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
  //   ),
  //   component: <Tables />,
  // },
  
  { type: "title", title: "Gestion", key: "pages" },
  {
    type: "route",
    name: "Marque",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
 
  {
    type: "route",
    name: "Ajouter Categorie",
    key: "add-categorie",
    route: "/add-categorie",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <AddCategorie />,
  },
  
  {
    type: "route",
    name: "Modele",
    key: "add-mooele",
    route: "/add-modele",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <AddModele />,
  },
  {
    type: "route",
    name: "Transmission",
    key: "add-transmission",
    route: "/add-transmission",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: < AddTransmission />,
  },
  {
    type: "route",
    name: "Carburant",
    key: "add-carburant",
    route: "/add-carburant",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: < AddCarburant />,
  },
  {
    type: "route",
    name: "Couleur",
    key: "add-couleur",
    route: "add-couleur",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: < AddCouleur />,
  },
  {
    type: "route",
    name: "Etat",
    key: "add-etat",
    route: "/add-etat",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: < AddEtat />,
  },
  { type: "title", title: "Liste", key: "account-pages" },
  {
    type: "route",
    name: "Marque",
    key: "marque",
    route: "/billing",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Categorie",
    key: "categorie",
    route: "/billing/ListeCategorie",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <CategorieComponent />,
  },
  {
    type: "route",
    name: "Modele",
    key: "modele",
    route: "/billing/ListeModele",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: < ModeleComponent/>,
  },
  {
    type: "route",
    name: "Transmission",
    key: "transmission",
    route: "/billing/ListeTransmission",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: < TransmissionComponent/>,
  },
  {
    type: "route",
    name: "Carburant",
    key: "carburant",
    route: "/billing/ListeCarburant",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: < CarburantComponent/>,
  },
  {
    type: "route",
    name: "Couleur",
    key: "couleur",
    route: "/billing/ListeCouleur",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: < CouleurComponent/>,
  },
  {
    type: "route",
    name: "Etat",
    key: "etat",
    route: "/billing/ListeEtat",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: < EtatComponent/>,
  },

  
  
];

export default routes;
