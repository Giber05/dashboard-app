import { Breadcrumb, Alert } from "antd";
import React from "react";
import { useLocation, Routes, Route } from "react-router";
import { Link } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/company": "Company",
  "/customer": "Customer",
  "/customer/add-customer": "Tambah Customer",
  "/customer/edit-customer": "Edit Customer",
};
function AppBreadcrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link className="font-bold" to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="1">
      <Link className="font-bold" to="/dashboard">
        Dashboard App
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="">
      <Breadcrumb separator={">"}>{breadcrumbItems}</Breadcrumb>
    </div>
  );
}

export default AppBreadcrumb;
