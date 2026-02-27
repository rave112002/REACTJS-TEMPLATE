import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { rbLogo } from "@assets/images";
import { MODULES } from "@constants/menu";
import { Button, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link, Outlet } from "react-router";

const CMSLayout = () => {
  const extractMenu = (modules) => {
    let items = [];
    modules.forEach((module) => {
      if (module.type === "group" && Array.isArray(module.children)) {
        const children = module.children.map((child) => ({
          key: child.value,
          icon: child.icon,
          label: <Link to={child.link}>{child.label}</Link>,
        }));
        items.push({
          key: module.value,
          icon: module.icon,
          label: module.label,
          children: children,
        });
      } else if (module.type === "item") {
        items.push({
          key: module.value,
          icon: module.icon,
          label: <Link to={module.link}>{module.label}</Link>,
        });
      }
    });
    return items;
  };

  const menuItems = extractMenu(MODULES);

  return (
    <Layout className="h-screen">
      <Header
        className="bg-b-primary h-16 px-12 items-center flex justify-between"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.3)", zIndex: 1 }}
      >
        <div className=" w-full h-full items-center grid grid-cols-3 p-0">
          <span className=""></span>
          <span className=" text-xl text-center font-bold text-white text-shadow-md">
            HEADER
          </span>
          <div className=" flex gap-4 justify-end">
            <Button
              type="text"
              className="text-lg text-white font-semibold hover:bg-transparent!"
            >
              User
            </Button>

            <Button
              type="text"
              className="text-lg text-white font-semibold hover:bg-transparent!"
            >
              Logout
            </Button>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          width={300}
          className=" bg-white h-full w-full overflow-auto border-r border-black/20"
          // style={{ boxShadow: "2px 0 8px rgba(0,0,0,0.15)", zIndex: 2 }}
        >
          <div className="flex flex-col  items-center">
            <div className=" text-center h-40 w-40 rounded-2xl justify-center items-center flex my-8">
              <img src={rbLogo} alt="logo" className="w-full" />
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
              items={menuItems}
              className="p-0"
            />
          </div>
        </Sider>
        <Content className="bg-white p-2 h-full w-full overflow-auto">
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default CMSLayout;
