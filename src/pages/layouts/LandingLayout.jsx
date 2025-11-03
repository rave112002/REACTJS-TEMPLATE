import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Outlet } from "react-router";

const LandingLayout = () => {
	return (
		<Layout className='h-screen'>
			<Header className='text-center text-white h-16 px-12 bg-b-green'>
				Header
			</Header>
			<Layout>
				<Sider width={300} className='text-center bg-white'>
					Sider
				</Sider>
				<Content className=''>
					<Outlet />
				</Content>
			</Layout>
			{/* <Footer>Footer</Footer> */}
		</Layout>
	);
};

export default LandingLayout;
