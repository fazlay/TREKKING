import React from 'react';
import AddNewPackage from '../../component/AddNewPackage/AddNewPackage';

import AllOrders from '../../component/AllOrders/AllOrders';

const ManageOrders = () => {
    return (
        <div>
            <AllOrders></AllOrders>
            <AddNewPackage></AddNewPackage>
        </div>
    );
};

export default ManageOrders;