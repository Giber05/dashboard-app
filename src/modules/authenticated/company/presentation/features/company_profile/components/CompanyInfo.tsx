import { ChromeOutlined, EditOutlined, GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Switch, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import AssetConstants from "../../../../../../../core/constants/asset_constants";

function CompanyInfo() {
  const [switchActive, setSwitchActive] = useState(true);
  const onSwitchChange = (checked: boolean) => {
    setSwitchActive(checked);
  };
  return (
    <div className="shadow-lg bg-white rounded-xl ">
      <img className="h-28 md:h-40 w-full object-cover" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80" />
      <div className="flex flex-wrap justify-center">
        <div className=" px-4 -mt-10 md:-mt-16">
          <Avatar
            size={{ xs: 72, sm: 84, md: 92, lg: 100, xl: 120, xxl: 132 }}
            shape="circle"
            src="https://media-exp1.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=2147483647&v=beta&t=GOBz8mAEorHJIcDqXVU1hYaBBu7HacN9ENSECo3TBWE"
            className="bg-white rounded-full shadow-lg max-w-full h-auto align-middle border-none undefined"
          />
        </div>
        <div className="my-3 mx-auto text-center w-full">
          <div>
            <Typography.Text className="font-bold text-lg ">Mitramas Infosys Global</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-base">Layanan IT</Typography.Text>
          </div>
          <div className="my-3">
            <Link to="#" className=" text-base font-semibold ">
              {<EditOutlined className="mr-2" />}Sunting Profil
            </Link>
          </div>
        </div>
      </div>

      <div className="m-4">
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">Status Perusahaan</Typography.Text>
          </div>
          <Row justify="space-between" className="">
            <Col>
              <Typography.Text className=" text-base font-bold text-green-600 ">{switchActive ? "Aktif" : "Nonaktif"}</Typography.Text>
            </Col>
            <Col>
              <Switch checked={switchActive} onChange={onSwitchChange} />
            </Col>
          </Row>
        </div>
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">Singkatan</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-base font-semibold">MIG</Typography.Text>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">Alamat Perusahaan</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-base font-semibold">Jl. Tebet Raya No.42, Jakarta Selatan</Typography.Text>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">Penanggung Jawab (PIC)</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-base font-semibold">John Doe</Typography.Text>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">Tanggal PKP</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-base font-semibold">03 Maret 2021</Typography.Text>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">E-mail</Typography.Text>
          </div>
          <div>
            <a href={`mailto:mig@mitrasolusi.group`} target="_blank" className=" text-base underline font-semibold ">
              {<MailOutlined className="mr-2" />}mig@mitrasolusi.group
            </a>{" "}
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="mb-1">
            <Typography.Text className=" text-base">No. Telp</Typography.Text>
          </div>
          <div>
            <a href="#" className=" text-base underline font-semibold ">
              {<PhoneOutlined className="mr-2" />}021-5678-1234
            </a>{" "}
          </div>
        </div>
        <div className="mt-2 pb-7">
          <div className="mb-1">
            <Typography.Text className=" text-base">Situs Web</Typography.Text>
          </div>
          <div>
            <a href={`mitramas.com`} target="_blank" className=" text-base underline font-semibold ">
              {<GlobalOutlined className="mr-2" />}mitramas.com
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
