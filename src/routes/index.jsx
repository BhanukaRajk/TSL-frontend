import { createBrowserRouter } from "react-router-dom";

import adminRoutes from "./adminRoutes";
import assistantRoutes from "./assistantRoutes";
import customerRoutes from "./customerRoutes";
import landingPageRoutes from "./landingPageRoutes";
import tailorRoutes from "./tailorRoutes";


const router = createBrowserRouter([
    landingPageRoutes, // This is the landing page routes
    customerRoutes, // This is the customer routes
    tailorRoutes, // This is the tailor routes
    adminRoutes, // This is the admin routes
    assistantRoutes, // This is the costume customization routes
])

export default router;