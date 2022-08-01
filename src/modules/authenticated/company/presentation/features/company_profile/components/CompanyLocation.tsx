import { Card, Col, Row, Typography } from "antd";
import "../styles/company.css";
import { Link } from "react-router-dom";
import { BankOutlined, ShopOutlined, ToolOutlined } from "@ant-design/icons";

function CompanyLocation() {
  return (
    <Card
      title={
        <Row justify="space-between">
          <Typography.Text className="font-bold text-lg ">Lokasi</Typography.Text>
          <Link to="#" className=" text-base">
            Lihat Semua
          </Link>
        </Row>
      }
      className="shadow-lg"
    >
      <Row justify="space-around" gutter={[0, 10]}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card className="bg-gradient-to-r from-green-700 to-green-600  ">
            <Row justify="space-between">
              <BankOutlined className="font-bold text-4xl text-white my-auto" />
              <div className=" flex-col text-end">
                <div>
                  <Typography.Text className="font-bold text-xl text-white">20</Typography.Text>
                </div>
                <div>
                  <Typography.Text className=" text-md text-white">Induk</Typography.Text>
                </div>
              </div>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card className="bg-gradient-to-r from-green-600 to-green-500  ">
            <Row justify="space-between">
              <ToolOutlined className="font-bold text-4xl text-white my-auto" />
              <div className=" flex-col text-end">
                <div>
                  <Typography.Text className="font-bold text-xl text-white">3</Typography.Text>
                </div>
                <div>
                  <Typography.Text className=" text-md text-white">Sub Lokasi Level 1</Typography.Text>
                </div>
              </div>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card className="bg-gradient-to-r from-green-500 to-green-400 ">
            <Row justify="space-between">
              <ShopOutlined className="font-bold text-4xl text-white my-auto" />
              <div className=" flex-col text-end">
                <div>
                  <Typography.Text className="font-bold text-xl text-white">1</Typography.Text>
                </div>
                <div>
                  <Typography.Text className=" text-md text-white">Sub Lokasi Level 2</Typography.Text>
                </div>
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default CompanyLocation;
