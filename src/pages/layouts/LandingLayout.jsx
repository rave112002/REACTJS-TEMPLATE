import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

const LandingLayout = () => {
  // const [selectedKey, setSelectedKey] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   const pathName = location.pathname.split("/").pop();
  //   setSelectedKey(pathName);
  // }, [location.pathname]);

  const items = [
    { key: "1", icon: <PieChartOutlined />, label: "Option 1" },
    { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
    { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  ];
  return (
    <Layout className="h-screen">
      <Header className="bg-header h-[55px] px-12 items-center flex justify-between">
        <div className="bg-red-500 ">LOGO HERE</div>
        <span className="bg-red-500 text-xl font-bold text-white">HEADER</span>
        <div className="bg-red-500 flex gap-4 text-lg text-white font-semibold">
          <span>User</span>
          <span>Logout</span>
        </div>
      </Header>
      <Layout>
        <Sider width={300} className=" bg-white">
          <div className="flex flex-col bg-yellow-300 p-4 items-center gap-4">
            <div className="bg-red-500 text-center h-40 w-40 rounded-2xl justify-center items-center flex">
              OR LOGO HERE
            </div>

            {/* <Menu
              defaultSelectedKeys={[selectedKey]}
              // selectedKeys={[selectedKey]}
              mode="inline"
              inlineCollapsed={false}
              items={items}
            /> */}

            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              // theme="dark"
              inlineCollapsed={false}
              items={items}
            />
          </div>
        </Sider>
        <Content className="">
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default LandingLayout;
