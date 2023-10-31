import { Button } from '@chakra-ui/react'
import { IoArrowBackCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import OrderRecord from "../../components/OrderItems/OrderRecord";
import { OPERATION_ASSISTANT, PRODUCT_MANAGER, TAILOR } from "../../constants";
import { selectUser } from "../../store/slices/authSlice"


const Records = () => {
    const records = [
        {
            orderId: "1",
            customerId: "Malini Fonseka",
            itemCount: "5",
            totalAmount: "60000",
            status: "completed",
            orderedDate: '2023/10/22',
            requiredDate: '2023/11/22',
        },
        {
            orderId: "2",
            customerId: "Siril Piyadasa",
            itemCount: "2",
            totalAmount: "25000",
            status: "Pending",
            orderedDate: '2023/10/22',
            requiredDate: '2023/11/22',
        },
        {
            orderId: "3",
            customerId: "Anne Perera",
            itemCount: "3",
            totalAmount: "56000",
            status: "Processing",
            orderedDate: '2023/10/22',
            requiredDate: '2023/11/22',
        },
        {
            orderId: "4",
            customerId: "James Peiris",
            itemCount: "8",
            totalAmount: "250000",
            status: "Completed",
            orderedDate: '2023/09/10',
            requiredDate: '2023/10/22',
        },
        {
            orderId: "5",
            customerId: "Rakisa Jayaweera",
            itemCount: "1",
            totalAmount: "15750",
            status: "Pending",
            orderedDate: '2023/10/12',
            requiredDate: '2023/11/28',
        },
    ];
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/tailor");
    };

    return (
        <>
            <div className="flex flex-row">
                <div className="flex-auto">
                    <div className='flex flex-col '>
                        <div className='flex-col mt-3 shadow-lg sm:rounded-lg'>
                            <div className='flex flex-col m-8'>
                                <div className="flex flex-row items-center gap-52 w-full">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-primary"
                                    >
                                        <IoArrowBackCircle className="text-3xl cursor-pointer" />
                                    </button>
                                    <h1 className=' text-2xl font-semibold justify-start'>Assigned Orders</h1>
                                    <div className=" ml-32 flex">
                                        <label className="sr-only">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            </div>
                                            <input
                                                type="text"
                                                id="table-search"
                                                className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-3xl w-60 focus:border-gray-400"
                                                placeholder="Search"
                                            //value={searchInput}
                                            //onChange={(e) => setSearchInput(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-col justify-between mx-10 my-8 p-5 border border-solid border-zinc-950 border-opacity-20 rounded-lg">
                                <div className=" flex flex-col">
                                    <table className=' flex flex-col justify-between text-sm font-medium text-gray-500'>
                                        <thead className=" uppercase bg-gray-100 py-4 w-full">
                                            <tr>
                                                <th className=" w-40">
                                                    Order Id
                                                </th>
                                                <th className=" w-40">
                                                    Customer
                                                </th>
                                                <th className=" w-40">
                                                    Item Count
                                                </th>
                                                <th className=" w-40">
                                                    Ordered Date
                                                </th>
                                                <th className=" w-40">
                                                    Required Date
                                                </th>
                                                <th className=" w-40">
                                                    Status
                                                </th>
                                                {/* <th className="w-40 px-10">
                                                    Option
                                                </th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <div className="flex flex-col gap-1">
                                                {records.map((item, index) => (
                                                    <tr className="flex items-center text-center border hover:bg-gray-300 text-black whitespace-nowrap font-medium">
                                                        <td className="w-40"> <Link to={`${item.orderId}`}>{item.orderId}</Link></td>
                                                        <td className="w-40">{item.customerId}</td>
                                                        <td className="w-40">{item.itemCount}</td>
                                                        <td className="w-40">{item.orderedDate}</td>
                                                        <td className="w-40">{item.requiredDate}</td>
                                                        <td className="w-40"> {item.status}</td>
                                                        <td className="w-40 py-2">

                                                            <Link to={`${item.orderId}`}>
                                                                <Button
                                                                    className="block"
                                                                    rounded={"md"}
                                                                    color={"white"}
                                                                    bgColor={"black"}
                                                                    size="sm"
                                                                    _hover={{
                                                                        bg: "blue",
                                                                        color: "blue-50",
                                                                    }}
                                                                >
                                                                    View
                                                                </Button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </div>
                                        </tbody>
                                    </table>
                                    <div className=" w-full border h-0 mt-3 mb-6 border-gray-200"></div>

                                </div>
                                {/* <div><Records /></div> */}
                                <div className=" flex justify-between">
                                    {/* <div className=" py-3 text-sm font-medium text-neutral-400">Showing data 1 to 8 of 256K entries</div>
                    <div className=" py-3">
                        <Pagination />
                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Records;