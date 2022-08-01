import { Typography } from "antd";

type ActivityItemProps = {
  activity: string;
  datetime: string;
};
function ActivityItem({ activity, datetime }: ActivityItemProps) {
  return (
    <div>
      <div className="mb-4">
        <div>
          <Typography.Text className="text-xs font-semibold">{activity}</Typography.Text>
        </div>
        <div>
          <Typography.Text className="text-xs mt-1">{datetime}</Typography.Text>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
