import "../styles/company.css";
import { Card, Row, Typography, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ShareAltOutlined } from "@ant-design/icons";

function CompanyRelation() {
  return (
    <Card
      title={
        <Row justify="space-between">
          <Typography.Text className="font-bold text-lg ">Relasi</Typography.Text>
          <Link to="#" className=" text-base">
            Lihat Semua
          </Link>
        </Row>
      }
      className="shadow-lg"
    >
      <Row className="my-3">
        <ShareAltOutlined className="font-bold text-2xl my-auto mr-5" />
        <div className=" flex-col ">
          <div>
            <Typography.Text className="font-bold text-xl ">20</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-md ">Memiliki</Typography.Text>
          </div>
        </div>
      </Row>
      <Row className="my-3">
        <ShareAltOutlined className="font-bold text-2xl my-auto mr-5" />
        <div className=" flex-col ">
          <div>
            <Typography.Text className="font-bold text-xl ">108</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-md ">Menggunakan</Typography.Text>
          </div>
        </div>
      </Row>
      <Row className="my-3">
        <ShareAltOutlined className="font-bold text-2xl my-auto mr-5" />
        <div className=" flex-col ">
          <div>
            <Typography.Text className="font-bold text-xl ">60</Typography.Text>
          </div>
          <div>
            <Typography.Text className=" text-md ">Meminjam</Typography.Text>
          </div>
        </div>
      </Row>
    </Card>
  );
}

export default CompanyRelation;
