import React, { useState } from "react";
import { Table, Card, Button } from "antd";
import Header from "../components/Header/Header";
import CreateBill from "../components/cart/CreateBill";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

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
      <div className="px-6">
      <h1 className="text-4xl font-bold text-center mb-4">Sepet</h1>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          className="mb-8"
        />
        <div className="cart-total flex justify-end">
          <Card className="w-72 shadow-md">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>25₺</span>
            </div>

            <div className="flex justify-between my-2">
              <span>KDV Toplam 8%</span>
              <span className="text-red-600" danger>
                +2₺
              </span>
            </div>

            <div className="flex justify-between">
              <b>Toplam</b>
              <b>27₺</b>
            </div>

            <Button
              type="primary"
              className="mt-3 w-full h-10"
              onClick={showModal}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>

        <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default CartPage;
