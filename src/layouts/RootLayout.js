import { Outlet, NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Infiniker</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>

        <Breadcrumbs></Breadcrumbs>

      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}