import DashboardPage from "./components/Dashboard/DashboardPage";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
]

export default dashboardRoutes;