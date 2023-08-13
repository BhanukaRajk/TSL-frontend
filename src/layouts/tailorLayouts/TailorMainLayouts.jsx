import { BiSolidBookReader } from "react-icons/bi"
import { BsFillCartFill } from "react-icons/bs"
<<<<<<< Updated upstream
import { HiHome, HiUserCircle, HiShoppingCart} from "react-icons/hi2";
=======
import { HiHome, HiUserCircle,HiShoppingCart } from "react-icons/hi2";
>>>>>>> Stashed changes
import { IoMdBowtie } from "react-icons/io"
import { PiShirtFoldedFill } from "react-icons/pi"
import { Outlet } from "react-router-dom"

import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import ContentWrapper from "../../components/ContentWrapper";
import MainLayout from "../../components/MainLayout";

const sidebarItems = [
    {
        label: 'Dashboard',
        icon: <HiHome />,
        to: '/tailor/dashboard',
    },
    {
        label: 'Orders',
        icon: <HiShoppingCart />,
        to: '/tailor/orders',
        subItems: [
            {
                label: 'All',
                to: '/tailor/orders/all',
            },
            {
                label: 'Collected',
                to: '/tailor/orders/collected',
            },
            {
                label: 'Completed',
                to: '/tailor/orders/completed',
            },
            {
                label: 'To be collected',
                to: '/tailor/orders/to-be-collected',
            },
        ]
    },
    {
        label: 'Materials',
        icon: <IoMdBowtie />,
        to: '/tailor/materials',
        subItems: [
            {
                label: 'Fabric',
                to: '/tailor/materials/fabric',
            },
            {
                label: 'String',
                to: '/tailor/materials/string',
            },
            {
                label: 'Buttons',
                to: '/tailor/materials/buttons',
            },
        ]
    },
    {
        label: 'Reviews',
        icon: <BsFillCartFill />,
        to: '/tailor/materials/test',
    },
    {
        label: 'Profile',
        icon: <HiUserCircle />,
        to: '/tailor/profile',
    },
    {
        label: 'TEST',
        icon: <HiUserCircle />,
        to: '/tailor/test',
    },
]

const TailorMainLayout = () => {
    // const sidebarIsOpen = useSelector(selectSidebarIsOpen)

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-screen pt-16 transition-all ease-in-out duration-300">
                <Sidebar items={sidebarItems} />
                <div className="block transition-all w-full ease-in-out duration-300" id="main-left">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default TailorMainLayout