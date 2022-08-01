import React, { useEffect } from "react";
import CircularProgressIndicator from "../../../../../../core/common_components/CircularProgressIndicator";
import CustomerTable from "./components/CustomerTable";
import userCustomerHandler from "./use_customer_handler";

function ShowCustomersPage() {
  const { getCustomers, initLoading, customers,  } = userCustomerHandler();
  useEffect(() => {
    getCustomers();
    window.scrollTo(0, 0);
  }, []);
  if (initLoading) return <CircularProgressIndicator />;
  return (
    <>
      <div className="bg-gradient-to-t from-green-400 to-green-100 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className=" container  max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
          <div className="bg-gradient-to-t from-green-600 to-green-500 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-green-600 shadow-md undefined">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Daftar Customer</h2>
          </div>
          <CustomerTable customers={customers} />
        </div>
      </div>
    </>
  );
}

export default ShowCustomersPage;
