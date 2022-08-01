import { Avatar, Button, Col, Dropdown, message, notification, Popover, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { DeleteLoggedInUser } from "../../modules/guest/authentication/domain/usecases/delete_logged_in_user";
import { isAuthLoading, selectAuth, setLoggedOutUser } from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, updateWindowWidth } from "../app_redux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../utils/redux";
import {
  BankOutlined,
  BellOutlined,
  CheckSquareOutlined,
  DesktopOutlined,
  FileOutlined,
  GroupOutlined,
  HomeOutlined,
  LogoutOutlined,
  NotificationOutlined,
  PieChartOutlined,
  SearchOutlined,
  TableOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import "./style.css";
import AppBreadcrumb from "../common_components/AppBreacrumb";
import Logout from "../../modules/guest/authentication/domain/usecases/logout";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function DashboardApp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const { width } = useAppSelector(selectCommon);
  const deleteLoggedInUser = new DeleteLoggedInUser();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  async function verifyToken() {
    let isTokenStillValid = authUser?.loggedInAt! > Date.now();

    if (!isTokenStillValid) {
      console.log("EXECUTE DELETE USER, Token: ", isTokenStillValid);
      const resource = await deleteLoggedInUser.execute();
      resource.whenWithResult({
        success: () => {
          notification.error({ message: "Token Expired", placement: "topRight", duration: 5 });
          return navigate(0);
        },
      });
    }
  }

  useEffect(() => {
    if (!isLoadingUser) {
      if (authUser == null) {
        return navigate("/auth/login");
      } else {
        verifyToken();
      }
    }
  }, [isLoadingUser]);

  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, path?: String, children?: MenuItem[]): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const onLogoutClick = () => {
    message.loading("Loading ...");
    const logout = new Logout();

    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.accessToken!);
      resource.whenWithResult({
        success: (_) => {
          message.success("Berhasil Logout");
          dispatch(setLoggedOutUser());
          dispatch(isAuthLoading(false));
          navigate("/auth/login");
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const items: MenuItem[] = [
    getItem(<Link to="/dashboard">Dashboard</Link>, "1", <HomeOutlined />),
    getItem("Customer", "2", <UserSwitchOutlined />, "", [
      getItem(<Link to="/customer">Daftar Customer</Link>, "10", <UserSwitchOutlined />),
      getItem(<Link to="/customer/add-customer">Tambah Customer</Link>, "9", <UsergroupAddOutlined />),
    ]),
    getItem(<Link to="/company">Company</Link>, "3", <BankOutlined />),
    getItem("Todo", "4", <CheckSquareOutlined />),
    getItem("Users", "5", <UsergroupAddOutlined />, "", [getItem("Engineer", "6"), getItem("HR", "7"), getItem("Employee", "8")]),
  ];
  const menu = (
    <Menu className="rounded-lg">
      <Menu.Item key="0">
        <Button type="text" className="text-center font-bold" onClick={onLogoutClick}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth={width < 768 ? 0 : 100}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" items={items} />
      </Sider>
      <Layout className="bg-gradient-to-t from-green-100 to-green-50">
        <Header className="bg-green-50" style={{ padding: 0 }}>
          <Row justify="space-between" gutter={16}>
            <Col className="mx-4" xs={0} sm={0} md={10} lg={10}>
              {width > 640 ? (
                <div className="inline-block my-auto   ">
                  <AppBreadcrumb />
                </div>
              ) : null}
            </Col>
            <Col className=" flex justify-end mr-4" xs={24} sm={24} md={12} lg={12}>
              <div className="inline-block my-auto mr-4 ">
                <SearchOutlined className="mr-3" />
                <BellOutlined className="mx-3" />
                {/* {width > 900 ? ( */}
                <Popover className="cursor-pointer" placement="bottomRight" content={menu} trigger="click">
                  <Avatar className="ml-10 mr-2" src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/12/20/3063432769.jpeg" />
                  <Typography.Text strong>Kim Jisoo</Typography.Text>
                </Popover>
                {/* ) : null} */}
              </div>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer className="bg-gradient-to-t from-green-200 to-green-100  font-bold" style={{ textAlign: "center" }}>
          Copyright Gilang Liberty © 2022
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardApp;
