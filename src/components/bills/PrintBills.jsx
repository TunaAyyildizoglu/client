import { Button, Modal, Table } from "antd";

const PrintBills = ({ isModalOpen, setIsModalOpen }) => {
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
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        width={800}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>
              <div className="bill-details mb-[20px]">
                <div className="flex gap-x-15 justify-between">
                  <div>
                    <p className="font-bold">Fatura Detayı:</p>
                    <p>Unwrapped</p>
                    <p>Fake street 123</p>
                    <p>San Javier</p>
                    <p>San 1234</p>
                  </div>
                  <div>
                    <p className="font-bold">Fatura</p>
                    <p>The Boring Company</p>
                    <p>Tesla Street 007</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>
                  <div>
                    <p className="font-bold">Fatura Numarası</p>
                    <p>00096</p>
                    <p className="font-bold mt-[12px]">Date of Issue</p>
                    <p>2022-11-21</p>
                  </div>
                  <div>
                    <p className="font-bold">Terms</p>
                    <p>0 Days</p>
                    <p className="font-bold mt-[12px]">Due</p>
                    <p>00.00.00</p>
                  </div>
                </div>
              </div>

              <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
                className="mb-8 mt-8"
              />
              <div className="flex justify-end mb-8">
                <div className="flex flex-col w-52">
                  <div className="flex justify-between">
                    <span className="text-gray-400">SubTotal</span>
                    <span className="text-gray-400">57₺</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax</span>
                    <span className="text-red-600">+4.54₺</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Total</span>
                    <span>61.54₺</span>
                  </div>
                </div>
              </div>

              <div className="py-9">
                <div className="border-t pt-9">
                  <div className="text-sm font-light text-slate-700">
                    <p>
                      Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                      Ödenmesi Yasası 0000'e göre, serbest çalışanların bu
                      süreden sonra borçların ödenmemesi durumunda 00.00 gecikme
                      ücreti talep etme hakkına sahip olduklarını ve bu noktada
                      bu ücrete ek olarak yeni bir fatura sunulacağını lütfen
                      unutmayın. Revize faturanın 14 gün içinde ödenmemesi
                      durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran
                      artı %0,5 Bank of England tabanı olmak üzere toplam %8,5
                      uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme
                      yapamazlar.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div className="flex justify-end mt-8">
          <Button type="primary" className="text-lg">
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBills;
