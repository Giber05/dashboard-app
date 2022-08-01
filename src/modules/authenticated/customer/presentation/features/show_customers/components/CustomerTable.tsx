import { SearchOutlined, QuestionCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Row, Avatar, Typography, Input, Button, Radio, Space, Popconfirm, InputRef, Modal } from "antd";
import pagination from "antd/lib/pagination";
import Table, { ColumnType } from "antd/lib/table";
import { FilterConfirmProps, FilterValue } from "antd/lib/table/interface";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AssetConstants from "../../../../../../../core/constants/asset_constants";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import { CustomerModel } from "../../../../data/models/customer_model";
import { setFilterUser, setSearchText } from "../../../reducers/show_customes_slice";
import userCustomerHandler from "../use_customer_handler";

type CustomersProps = {
  customers: CustomerModel[];
};
function CustomerTable({ customers }: CustomersProps) {
  const { isGetCustomersLoading, isActionLoading, deleteCustomer, fetchCurrentCustomer } = userCustomerHandler();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [modaldata, setmodaldata] = useState<any>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const showModal = (record: any) => {
    console.log(record);
    setmodaldata(record);
    setIsModalVisible(true);
  };

  const handleSearch = (selectedKeys: string[], confirm: (param?: FilterConfirmProps) => void, dataIndex: keyof CustomerModel) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value: any, record: any) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: any) => (searchedColumn === dataIndex ? text : text),
  });

  const columns: ColumnType<CustomerModel>[] = [
    {
      title: "Nama Customer",
      ...getColumnSearchProps("name"),
      fixed: "left",
      filterIcon: (filtered) => <SearchOutlined />,
      render: (value: any, record: any) => {
        return (
          <Row>
            <Typography.Text className="my-auto" strong>
              {record.name.length > 14 ? record.name.substring(0, 13) + "..." : record.name}
            </Typography.Text>
          </Row>
        );
      },
      width: 200,
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      },
    },

    {
      title: "Status",
      render: (value: any, record: any) => {
        return (
          <Row>
            <Typography.Text className="my-auto" strong>
              {record.status ? "Active" : "Inactive"}
            </Typography.Text>
          </Row>
        );
      },
      filters: [
        {
          text: "Active",
          value: "true",
        },
        {
          text: "Inactive",
          value: "false",
        },
      ],
      onFilter: (value: string | boolean | number, record) => {
        let statusString: string = String(record.status);
        return statusString.includes(String(value));
      },
    },

    {
      title: "Pekerjaan",
      dataIndex: "job_title",
    },
    {
      title: "Nomor Telepon",
      dataIndex: "phone_number",
    },
    {
      title: "Alamat",
      dataIndex: "address",
    },
    {
      title: "Negara",
      dataIndex: "country",
    },

    {
      title: "Tanggal dibuat",
      render: (value: any, record: any) => UtilMethods.getIndonesianFormatDate(record.createdAt),

      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => +new Date(a.createdAt) - +new Date(b.createdAt),
    },
    {
      title: "Aksi",
      fixed: "right",
      dataIndex: "id",
      width: 100,
      render: (value, record: CustomerModel) => {
        return (
          <div>
            <Button
              type="text"
              icon={<EditOutlined />}
              style={{ color: "green", fontWeight: "bold" }}
              onClick={() => {
                fetchCurrentCustomer(record);
                navigate("/customer/edit-customer");
              }}
            ></Button>
            <Button type="text" style={{ color: "red", fontWeight: "bold" }} icon={<DeleteOutlined />} onClick={() => showModal(record)}></Button>
            <div>
              <Modal
                mask={false}
                title="Hapus Customer"
                visible={isModalVisible}
                confirmLoading={isActionLoading}
                onOk={() => {
                  setIsModalVisible(false);
                  // console.log("C ID: ", modaldata.id);

                  deleteCustomer(modaldata.id);
                }}
                onCancel={() => {
                  setIsModalVisible(false);
                }}
              >
                <Typography.Text className="justify-center">Apakah anda yakin untuk menghapus Customer ini ini ? </Typography.Text>
              </Modal>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Table loading={isGetCustomersLoading} indentSize={10} scroll={{ x: 768 }} size="middle" columns={columns} dataSource={customers} />
    </div>
  );
}

export default CustomerTable;
