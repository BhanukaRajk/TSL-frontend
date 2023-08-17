import ManagerMainLayout from "../layouts/managerLayouts/ManagerMainLayouts";
import MaterialsLayout from "../layouts/managerLayouts/MaterialsLayout";
import AddSupplier from "../pages/Manager/AddSupplier";
import Buttons from "../pages/Manager/Buttons";
import Customers from "../pages/Manager/Customers";
import ManagerDashboard from "../pages/Manager/Dashboard";
import Fabrics from "../pages/Manager/Fabrics";
import Orders from "../pages/Manager/Orders";
import Payments from "../pages/Manager/Payments";
import Suppliers from "../pages/Manager/Suppliers";
import Reviews from "../pages/Manager/Test1";
import Profile from "../pages/Profile";

const managerRoutes = {
	path: "/manager",
	element: <ManagerMainLayout />,
	children: [
		{ path: "", element: <ManagerDashboard /> },
		{
			path: "materials",
			element: <MaterialsLayout />,
			children: [
				{ path: "fabric", element: <Fabrics /> },
				{ path: "string", element: <div>String</div> },
				{ path: "buttons", element: <Buttons /> },
				{ path: "colors", element: <div>Color contrast</div> },
			],
		},
		{ path: "orders", element: <Orders /> },
		{ path: "payments", element: <Payments /> },
		{ path: "suppliers", element: <Suppliers /> },
		{ path: "add-supplier", element: <AddSupplier /> },
		{ path: "customer", element: <Customers /> },
		{ path: "profile", element: <Profile /> },
		{ path: "reviews", element: <div>Reviews</div> },
	],
};

export default managerRoutes;