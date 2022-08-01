import { Card, Row, Typography } from "antd";
import ActivityItem from "./ActivityItem";

function CompanyActivity() {
  return (
    <Card
      title={
        <Row justify="space-between">
          <Typography.Text className="font-bold text-lg ">Activity</Typography.Text>
        </Row>
      }
      className="w-full shadow-lg"
    >
      <ActivityItem activity="Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa" datetime="Hari ini, 06.00" />
      <ActivityItem activity="Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet" datetime="Kemarin, 17.33" />
      <ActivityItem activity="Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi" datetime="Hari ini, 15.00" />
    </Card>
  );
}

export default CompanyActivity;
