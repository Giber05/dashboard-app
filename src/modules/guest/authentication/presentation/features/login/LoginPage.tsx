import { Form, Radio, Input, Button } from "antd";
import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";

import React from "react";
import { Link } from "react-router-dom";
import AssetConstants from "../../../../../../core/constants/asset_constants";
import useLoginHandler from "./use_login_handler";

function LoginPage() {
  const { isLoadingUser, onFinish } = useLoginHandler();

  return (
    <div className="antialiased bg-gradient-to-br from-green-50 to-white">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              <img className="w-3/4 mx-auto md:float-left fill-stroke text-gray-800" src={`${AssetConstants.imageURL}/mig_logo.png`} />
            </div>
            <h4 className=" mx-auto md:mx-0 text-gray-500">"Empowered business with our expertise in software and hardware technology"</h4>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">Sign In</h2>

              <Form layout="vertical" initialValues={{ remember: true }} onFinish={onFinish} name="normal_login" className="max-w-md m-auto font-semibold ">
                <Form.Item
                  label="Email"
                  validateFirst={true}
                  rules={[
                    { required: true, message: "Email wajib diisi" },
                    { type: "email", message: "Masukan email yang valid" },
                  ]}
                  name="email"
                >
                  <Input className="mt-2 rounded" prefix={<UserOutlined />} placeholder="Masukan email anda" />
                </Form.Item>
                <Form.Item
                  className="mb-0"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Password wajib diisi!",
                    },
                  ]}
                  name="password"
                >
                  <Input.Password className="mt-2 rounded" prefix={<LockOutlined />} placeholder="Masukan password anda" />
                </Form.Item>

                <Form.Item className="mt-14 mb-1 text-center ">
                  <div>
                    <Button loading={isLoadingUser} type="primary" block htmlType="submit" className="w-full bg-green-600 font-bold rounded-lg text-green-100 border-none cursor-pointer hover:bg-green-500">
                      <LoginOutlined className="font-bold" />
                      Sign In
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
