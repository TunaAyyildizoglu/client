import React from "react";
import Header from "../components/Header/Header";
import { Table } from "antd";

const CustomersPage = () => {
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Joe Black",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Jim Green",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
      <div className="px-6">
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          className="mb-8"
        />
      </div>
    </>
  );
};

export default CustomersPage;
