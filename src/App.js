import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 } from "react-router-dom";

//pages
import Home from "./pages/Home" 
import About from "./pages/About"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"
import Services, { servicesLoader } from "./pages/services/Services"
import ServiceDetails, { serviceDetailsLoader } from "./pages/services/ServiceDetails"

//layouts
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import NotFound from "./pages/NotFound"
import ServicesLayout from "./layouts/ServicesLayout"
import ServiceError from "./pages/services/ServiceError";


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}/>

      <Route path="help" element={<HelpLayout /> } >
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="services" element={<ServicesLayout />} errorElement={<ServiceError />} >
        <Route 
          index
          element= {<Services />} 
          loader={servicesLoader}
        />
        <Route
          path=":id"
          element={ < ServiceDetails />}
          loader={serviceDetailsLoader}
        />
      </Route>

      <Route path="*" element={ <NotFound /> } />
    </Route>

  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;