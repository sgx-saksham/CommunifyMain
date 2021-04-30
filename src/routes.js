// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import FunctionsIcon from "@material-ui/icons/Functions";
import ForumIcon from "@material-ui/icons/Forum";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import TimelineIcon from "@material-ui/icons/Timeline";
import InfoIcon from "@material-ui/icons/Info";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import IDE from "views/IDE/IDE.js";
import CalculatorPage from "views/CalculatorPage/CalculatorPage.js";
import Community from "views/Community/Community.js";
import About from "views/About/About.js";
import AlgoVisualizer from "./views/ALgoVisualizer/AlgoVisualizer";
import MultiCalculator from "./views/MultiCalculators/MultiCalculator";
import MainStreamMedia from "views/MainStreamMedia/MainStreamMedia.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard ",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/IDE",
    name: "IDE Compiler",
    icon: "content_paste",
    component: IDE,
    layout: "/admin",
  },
  {
    path: "/calculator",
    name: "Calculator",
    icon: FunctionsIcon,
    component: CalculatorPage,
    layout: "/admin",
  },
  {
    path: "/community",
    name: "Community",
    icon: ForumIcon,
    component: Community,
    layout: "/admin",
  },
  {
    path: "/algo",
    name: "Algo Visualizer",
    icon: TimelineIcon,
    component: AlgoVisualizer,
    layout: "/admin",
  },
  {
    path: "/mulcalc",
    name: "Multi Calculators",
    icon: AccountTreeIcon,
    component: MultiCalculator,
    layout: "/admin",
  },
  {
    path: "/media",
    name: "Main-Stream Media",
    icon: Notifications,
    component: MainStreamMedia,
    layout: "/admin",
  },
  {
    path: "/About",
    name: "About",
    icon: InfoIcon,
    component: About,
    layout: "/admin",
  },
];

export default dashboardRoutes;
