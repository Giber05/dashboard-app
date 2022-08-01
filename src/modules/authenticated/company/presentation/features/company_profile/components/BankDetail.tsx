import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Row, Typography, Button } from "antd";
import "../styles/company.css";
type BankDetailProps = {
  bankDetail: {
    bankName: string;
    owner: string;
    currency: string;
    idNumer: string;
  };
};
function BankDetail({ bankDetail }: BankDetailProps) {
  return (
    <div>
      <Row justify="space-between">
        <div className="my-auto">
          <Typography.Text className="font-bold text-xs ">{bankDetail.bankName}</Typography.Text>
        </div>
        <div>
          <Button type="text" icon={<EditOutlined className=" text-sm" />} className=" text-sm font-semibold text-green-500" />
          <Button type="text" icon={<DeleteOutlined className=" text-ant-col-xs" />} className=" text-md font-semibold text-red-500" />
        </div>
      </Row>
      <div>
        <Typography.Text className="font-light text-xs">{bankDetail.idNumer} - {bankDetail.owner}</Typography.Text>
      </div>
      <div>
        <Typography.Text className="font-light text-xs">{bankDetail.currency}</Typography.Text>
      </div>
    </div>
  );
}

export default BankDetail;
