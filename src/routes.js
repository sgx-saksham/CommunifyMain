// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
import FunctionsIcon from "@material-ui/icons/Functions";
import ForumIcon from "@material-ui/icons/Forum";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import ChatIcon from "@material-ui/icons/Chat";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import InfoIcon from "@material-ui/icons/Info";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import SettingsIcon from "@material-ui/icons/Settings";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import IDE from "views/IDE/IDE.js";
import CalculatorPage from "views/CalculatorPage/CalculatorPage.js";
import Community from "views/Community/Community.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import Messaging from "views/Messaging/Messaging.js";
import About from "views/About/About.js";
import AlgoVisualizer from "./views/ALgoVisualizer/AlgoVisualizer";
import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

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
  // {
  //   path: "/messaging",
  //   name: "Messaging",
  //   icon: ChatIcon,
  //   component: Messaging,
  //   layout: "/admin",
  // },
  {
    path: "/http",
    name: "Algo Visualizer",
    icon: AccountTreeIcon,
    component: AlgoVisualizer,
    layout: "/admin",
  },
  {
    path: "/About",
    name: "About",
    icon: InfoIcon,
    component: About,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: SettingsIcon,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
