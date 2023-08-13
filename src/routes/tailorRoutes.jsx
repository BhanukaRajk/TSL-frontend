
// import SingleOutletLayout from "../layouts/SingleOutletLayout"
// import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayout"
// import Fabrics from "../pages/tailor/Fabrics"
// import Buttons from "../pages/tailor/Buttons"
// import Orders from "../pages/Tailor/Orders"

// const tailorRoutes = {
//     path: '/tailor',
//     element: <TailorMainLayout />,
//     children: [
//         {
//             path: 'dashboard',
//             element: <h1>Dashboard</h1>
//         },
//         {
//             path: 'orders',
//             element: <SingleOutletLayout />,
//             children: [
//                 {
//                     path: 'all',
//                     element: <h1>All Orders</h1>
//                 },
//                 {
//                     path: 'collected',
//                     element: <h1>Collected Orders</h1>
//                 },
//                 {
//                     path: 'completed',
//                     element: <h1>Completed Orders</h1>
//                 },
//                 {
//                     path: 'to-be-collected',
//                     element: <h1>To Be Canceled Orders</h1>
//                 },
//             ]
//         },
//         {
//             path: 'materials',
//             element: <SingleOutletLayout />,
//             children: [
//                 {
//                     path: 'Fabric',
//                     element: <Fabrics />
//                 },
//                 {
//                     path: 'Strings',
//                     element: <h1>String</h1>
//                 },
//                 {
//                     path: 'Buttons',
//                     element: <Buttons />
//                 },
//             ]
//         },
//         {
//             path: 'reviews',
//             element: <h1>Reviews</h1>
//         },
//         {
//             path: 'profile',
//             element: <h1>Profile</h1>
//         },
//     ]
// =======


//layouts
import TailorMainLayout from "../layouts/tailorLayouts/TailorMainLayouts"
import MaterialsLayout from "../layouts/tailorLayouts/MaterialsLayout"
import SingleOutletLayout from "../layouts/SingleOutletLayout"


//pages
import TailorDashboard from "../pages/tailor/Dashboard"
import Orders from "../pages/tailor/Orders"
import Profile from "../pages/tailor/Profile"
import Reviews from "../pages/Tailor/Test1"
import Buttons from "../pages/tailor/Buttons"
import Fabrics from "../pages/tailor/Fabrics"
import TEST from "../pages/tailor/test"


const tailorRoutes = {
    path: "/tailor",
    element: <TailorMainLayout />,
    children: [
        { path: "dashboard", element: <TailorDashboard /> },
        { path: "orders", element: <Orders /> },
        { path: "profile", element: <Profile /> },
        { 
            path: "materials", 
            element: <MaterialsLayout />,
            children: [
                { path: "fabric", element: <Fabrics/> },
                { path: "string", element: <div>String</div> },
                { path: "buttons", element: <Buttons/> },
                { path: "colors", element: <div>Color contrast</div> },
            ]    
    },  
        { path: "reviews", element: <Reviews /> },
        { path: "test", element: <TEST /> }, 
    ],
}

export default tailorRoutes