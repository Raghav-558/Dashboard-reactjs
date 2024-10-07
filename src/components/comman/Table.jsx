import React from 'react';


const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-xl ">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white whitespace-nowrap">
                    <tr>
                        <th className="px-6 py-3">
                            Product name
                        </th>
                        <th className="px-6 py-3">
                            Color
                        </th>
                        <th className="px-6 py-3">
                            Category
                        </th>
                        <th className="px-6 py-3">
                            Price
                        </th>
                        <th className="px-6 py-3 ">
                            Indian Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th  className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            Apple MacBook Pro
                        </th>
                        <td className="px-6 py-4 text-gray-300">
                            Silver
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            Laptop
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $2999
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            254999
                        </td>
                    </tr>
                    <tr>
                        <th  className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            Acer Nitro 5
                        </th>
                        <td className="px-6 py-4 text-gray-300">
                            White
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $1999
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            169999
                        </td>
                    </tr>
                    <tr>
                        <th  className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4 text-gray-300">
                            Black
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            Accessories
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $99
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            8500
                        </td>
                    </tr>
                    <tr>
                        <th className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            Iphone 16
                        </th>
                        <td className="px-6 py-4 text-gray-300">
                            Gray
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            Phone
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $899
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            79000
                        </td>
                    </tr>
                    <tr>
                        <th  className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            Apple Watch 10
                        </th>
                        <td className="px-6 py-4 text-gray-300">
                            Red
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            Wearables
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $999
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            84999
                        </td>
                    </tr>
                    <tr>
                        <th className="px-6 py-4 font-medium text-white whitespace-nowrap">
                            Ipad pro
                        </th>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                            Space gray
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            Ipad
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $1299
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            102000
                        </td>
                    </tr>
                    <tr>
                        <th className="px-6 py-4 font-medium text-white">
                            Samsung S14 Ultra
                        </th>
                        <td className="px-6 py-4 text-gray-300">
                            White
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                            Android Phone
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            $1499
                        </td>
                        <td className="px-6 py-4 text-gray-300">
                            127000
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table