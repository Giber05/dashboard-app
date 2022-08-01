import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import BankDetail from "./BankDetail";

function CompanyBank() {
  return (
    <Card
      title={
        <Row justify="space-between">
          <Typography.Text className="font-bold text-lg ">Akun Bank</Typography.Text>
          <Button type="primary" icon={<PlusOutlined />} className=" text-md font-semibold">
            Tambah Akun Bank
          </Button>
        </Row>
      }
      className="shadow-lg"
    >
      <Row>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card className="bg-gradient-to-tl from-lime-600 to-yellow-300 ">
            <div className="relative w-16 max-w-full h-12 ">
              <div className="absolute bottom-0 right-0">
                <Typography.Text className="font-bold italic text-white">VISA</Typography.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <div className="mx-3">
            <BankDetail
              bankDetail={{
                bankName: "Bank KB Bukopin",
                currency: "IDR",
                idNumer: "*****98789",
                owner: "Gilang Liberty",
              }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={24} sm={24} md={24} lg={8}>
          <Card className="bg-gradient-to-tr from-sky-600 to-sky-300 ">
            <div className="relative w-16 max-w-full h-12 ">
              <div className="absolute bottom-0 right-0">
                <Typography.Text className="font-bold italic text-white">VISA</Typography.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16}>
          <div className="mx-3">
            <BankDetail
              bankDetail={{
                bankName: "CitBank, NA",
                currency: "USD",
                idNumer: "*****98789",
                owner: "Gilang Liberty",
              }}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CompanyBank;
