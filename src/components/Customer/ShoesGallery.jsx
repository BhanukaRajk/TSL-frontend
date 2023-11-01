import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSpecificAccessories } from "../../api/accessoryAPI";
import { SHOE } from "../../constants";
import AccessoryCard from "./AccessoryCard"


const ShoesGallery = () => {

    const [shoeData, setShoeData] = useState([]); // Create state variable for shoe data

    useEffect(() => {

        getSpecificAccessories({ accessoryType: SHOE })
            .then((response) => {
                console.log(response.data);
                setShoeData(response.data);
            })
            .catch((error) => {
                console.log(error);
            }
            );
    }, []);

    // State to track sorting order
    const [sortOrder, setSortOrder] = useState('');

    // Function to toggle sorting order
    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
        setSortOrder(newSortOrder);
    };


    // Automatically sort the array when the sorting order changes
    useEffect(() => {
        const sortedItems = [...shoeData]; // Create a copy of the original array to avoid mutation
        if (sortOrder === 'ascending') {
            sortedItems.sort((a, b) => a.price - b.price); // Ascending order
        } else if (sortOrder === 'descending') {
            sortedItems.sort((a, b) => b.price - a.price); // Descending order
        } else {
            // Do nothing
        }
        setShoeData(sortedItems); // Update the state with the sorted array
    }, [sortOrder]);

    const [searchInput, setSearchInput] = useState('');

    let filteredOrder = shoeData.filter((order) => {

        const brandMatch = order.brand && order.brand.toString().toLowerCase().includes(searchInput.toLowerCase());
        const itemIdMatch = order.itemId && order.itemId.toString().includes(searchInput.toLowerCase());
        const itemNameMatch = order.itemName && order.itemName.toString().toLowerCase().includes(searchInput.toLowerCase());
        const statusMatch = order.status && order.status.toString().toLowerCase().includes(searchInput.toLowerCase());
        const priceMatch = order.price && order.price.toString().toLowerCase().includes(searchInput.toLowerCase());
        const colorMatch = order.color && order.color.toString().toLowerCase().includes(searchInput.toLowerCase());

        return itemIdMatch || itemNameMatch || priceMatch || statusMatch || colorMatch || brandMatch;
    });

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-start md:items-center flex-col md:flex-row gap-x-2 w-56">
                <div className="p-4">
                    <select
                        className="text-xl w-60 py-2.5 pl-5 rounded-lg border-2 border-gray-500"
                        onChange={toggleSortOrder}
                        value={sortOrder}
                    >
                        <option value="" disabled hidden>Select Sort Order</option>
                        <option value="ascending">Asc</option>
                        <option value="descending">Des</option>
                    </select>
                </div>
                <input
                    type="text"
                    id="table-search"
                    className="block p-2 pl-5 text-xl w-60 text-black border-2 border-gray-500 rounded-lg"
                    placeholder="Search Anything"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

            </div>

            <div className="flex items-start gap-5 flex-wrap bg-gray-100 p-5 w-full overflow-y-auto h-full">
                {filteredOrder.length === 0 ? (<p className="flex items-center justify-center m-auto">No Available Data</p>) : (filteredOrder.map((shoe) => (
                    <Link
                        key={shoe.itemId}
                        to={`${shoe.itemId}`}
                        className="block curser-pointer"
                    >
                        <AccessoryCard image={shoe.image[0]} label={shoe.itemName} item="Accessory" brand={shoe.brand} price={shoe.price} status={shoe.status} rating={shoe.rating} />
                    </Link>
                )))}
            </div>
        </div>
    )
}

export default ShoesGallery

