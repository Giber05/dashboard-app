import { Image } from "antd";
import AssetConstants from "../constants/asset_constants";

function CircularProgressIndicator() {
  return (
    <div
      style={{
        display: "table",
          margin: "0 auto",
          height: "70vh",
      }}
    >
      <div
        style={{
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <img className="w-16 sm:w-24 md:w-32 lg:w-40"  src={`${AssetConstants.iconURL}/spinner/spinner.svg`} />
      </div>
    </div>
  );
      }
export default CircularProgressIndicator;
