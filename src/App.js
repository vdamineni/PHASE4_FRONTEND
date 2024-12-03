
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import EmployeeScreen from './components/EmployeeScreen';
import BusinessScreen from './components/BusinessScreen';
import DriverScreen from './components/DriverScreen';
import ProductScreen from './components/ProductScreen';
import AddEmployeeScreen from './components/AddEmployee';
import AddOwnerScreen from './components/AddOwner';
import ServiceScreen from './components/ServiceScreen';
import VanScreen from './components/VanScreen';
import ViewsScreen from './components/ViewsScreen';
import FireEmployeeScreen from './components/FireEmployee';
import HireEmployeeScreen from './components/HireEmployee';
import AddBusinessScreen from './components/AddBusiness';
import StartFundingScreen from './components/StartFunding';
import AddDriverScreen from './components/AddDriver';
import RemoveDriverScreen from './components/RemoveDriver';
import DisplayOwnerScreen from './components/DisplayOwner';
import DisplayEmployeeScreen from './components/DisplayEmployee';
import DisplayDriverScreen from './components/DisplayDriver';
import DisplayLocationScreen from './components/DisplayLocation';
import DisplayProductScreen from './components/DisplayProduct';
import DisplayServiceScreen from './components/DisplayService';
import AddProductScreen from './components/AddProduct';
import PurchaseProductScreen from './components/PurchaseProduct';
import RemoveProductScreen from './components/RemoveProduct';
import AddServiceScreen from './components/AddService';
import ManageServiceScreen from './components/ManageService';
import AddLocationScreen from './components/AddLocation';
import AddWorkerScreen from './components/AddWorker';
import AddvanScreen from './components/AddVan';
import TakeOverVanScreen from './components/TakeoverVan';
import LoadVanScreen from './components/LoadVan';
import RefuelVanScreen from './components/RefuelVan';
import DriveVanScreen from './components/DriveVan';
import RemoveVanScreen from './components/RemoveVan';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/employee" element={<EmployeeScreen />} />
                <Route path="/employee/add" element={<AddEmployeeScreen />} />
                <Route path="/employee/remove" element={<FireEmployeeScreen />} />
                <Route path="/employee/hire" element={<HireEmployeeScreen />} />
                <Route path="/business" element={<BusinessScreen />} />
                <Route path="/business/add-owner" element={<AddOwnerScreen />} />
                <Route path="/business/add-business" element={<AddBusinessScreen />} />
                <Route path="/business/start-funding" element={<StartFundingScreen />} />
                <Route path="/driver" element={<DriverScreen />} />
                <Route path="/driver/add-driver" element={<AddDriverScreen />} />
                <Route path="/driver/remove-driver" element={<RemoveDriverScreen />} />
                <Route path="/product" element={<ProductScreen />} />
                <Route path="/product/add-product" element={<AddProductScreen />} />
                <Route path="/product/purchase-product" element={<PurchaseProductScreen />} />
                <Route path="/product/remove-product" element={<RemoveProductScreen />} />
                <Route path="/service" element={<ServiceScreen />} />
                <Route path="/service/add-service" element={<AddServiceScreen />} />
                <Route path="/service/manage-service" element={<ManageServiceScreen />} />
                <Route path="/service/add-location" element={<AddLocationScreen />} />
                <Route path="/service/add-worker" element={<AddWorkerScreen />} />
                <Route path="/van" element={<VanScreen />} />
                <Route path="/van/add-van" element={<AddvanScreen />} />
                <Route path="/van/takeover-van" element={<TakeOverVanScreen />} />
                <Route path="/van/load-van" element={<LoadVanScreen />} />
                <Route path="/van/refuel-van" element={<RefuelVanScreen />} />
                <Route path="/van/drive-van" element={<DriveVanScreen />} />
                <Route path="/van/remove-van" element={<RemoveVanScreen />} />
                <Route path="/views" element={<ViewsScreen />} />
                <Route path="/views/display-owner" element={<DisplayOwnerScreen />} />
                <Route path="/views/display-employee" element={<DisplayEmployeeScreen />} />
                <Route path="/views/display-driver" element={<DisplayDriverScreen />} />
                <Route path="/views/display-location" element={<DisplayLocationScreen />} />
                <Route path="/views/display-product" element={<DisplayProductScreen />} />
                <Route path="/views/display-service" element={<DisplayServiceScreen />} />

            </Routes>
        </Router>
    );
}

export default App;
