import { Form, Radio, Input, Typography, Button, Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useAddCustomerHandler from "./use_add_customer_handler";

function AddCustomerPage() {
  const validateMessages = {
    required: "${label} wajib diisi!",
    string: {
      range: "${label} harus berisi minimal ${min} karakter, maksimal ${max} karakter",
    },
    types: {
      email: "Masukan ${label} yang valid!",
      number: "${label} bukan inputan yang valid!",
    },
    number: {
      range: "${label} harus >= ${min} atau <= ${max}",
    },
  };
  const { isActionLoading, onFormSubmitted, changeCustomerActionModalVisibility, isActionModalVisible } = useAddCustomerHandler();

  return (
    <>
      <div className="bg-gradient-to-t from-green-400 to-green-100 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className=" container  max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8  bg-white rounded-xl overflow-hdden shadow-md ">
          <div className="bg-gradient-to-t from-green-600 to-green-500 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8 justify-start shadow-green-600 shadow-md undefined">
            <h2 className="text-white text-md md:text-lg lg:text-xl xl:text-2xl">Tanbah Customer</h2>
          </div>
          <Form id="formAdd" layout="vertical" validateMessages={validateMessages} onFinish={onFormSubmitted} name="add_customer_form" className="max-w-md m-auto font-semibold">
            <Form.Item className="" label="Nama" rules={[{ required: true }, { max: 50, message: "Nama maksimal 50 karakter" }]} name="name">
              <Input />
            </Form.Item>
            <Form.Item className="" label="Pekerjaan" rules={[{ required: true }, { max: 25, message: "Pekerjaan maksimal 25 karakter" }]} name="job_title">
              <Input />
            </Form.Item>

            <Form.Item className="" label="No. Telephone" rules={[{ required: true, type: "string", max: 13, min: 10 }]} name="phone_number">
              <Input className=" w-full " />
            </Form.Item>
            <Form.Item className="" label="Alamat" rules={[{ required: true }, { max: 255, message: "Alamat maksimal 255 karakter" }]} name="address">
              <Input />
            </Form.Item>
            <Form.Item className="" label="Negara" rules={[{ required: true }, { max: 25, message: "Negara maksimal 25 karakter" }]} name="country">
              <Input />
            </Form.Item>

            <Form.Item name="status" label="Status" className="mt-6 mb-3" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value={true}>Active</Radio>
                <Radio value={false}>Inactive</Radio>
              </Radio.Group>
            </Form.Item>
            <div className="mx-auto justify-center flex">
              <Form.Item className="mt-3 mb-1 text-center ">
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => {
                    changeCustomerActionModalVisibility(true);
                  }}
                  block
                >
                  Tambahkan Customer
                </Button>
                <div>
                  <Modal
                    mask={true}
                    title="Tambah Customer"
                    visible={isActionModalVisible}
                    confirmLoading={isActionLoading}
                    onOk={() => {
                      changeCustomerActionModalVisibility(false);
                    }}
                    onCancel={() => {
                      changeCustomerActionModalVisibility(false);
                    }}
                    footer={[
                      <Button
                        key="back"
                        onClick={() => {
                          changeCustomerActionModalVisibility(false);
                        }}
                      >
                        Tidak
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        form="formAdd"
                        htmlType="submit"
                        loading={isActionLoading}
                        onClick={() => {
                          changeCustomerActionModalVisibility(false);
                        }}
                      >
                        Yakin
                      </Button>,
                    ]}
                  >
                    <Typography.Text className="justify-center">Apakah anda yakin untuk menambahkan customer ini ? </Typography.Text>
                  </Modal>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddCustomerPage;
