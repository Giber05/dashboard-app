import { Card, Col, Row, Table, Typography } from "antd";
import { ColumnGroup, Column } from "rc-table";
import CompanyActivity from "./components/CompanyActivity";
import CompanyBank from "./components/CompanyBank";
import CompanyInfo from "./components/CompanyInfo";
import CompanyLocation from "./components/CompanyLocation";
import CompanyRelation from "./components/CompanyRelation";

function CompanyProfilePage() {
  return (
    <>
      <div className=" h-40" />
      <div className=" -mt-24">
        <div className=" mx-auto w-full">
          <Row>
            <Col className="mx-4" xs={24} sm={24} md={6} lg={6}>
              <CompanyInfo />
            </Col>
            <Col className=" " xs={24} sm={24} md={16} lg={16}>
              <CompanyLocation />

              <div className="my-6">
                <Row justify="space-between">
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <div>
                      <CompanyBank />
                    </div>
                    <div className="my-4">
                      <CompanyRelation />
                    </div>
                  </Col>
                  <Col className=" flex justify-end " xs={24} sm={24} md={11} lg={11}>
                    <CompanyActivity />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default CompanyProfilePage;
