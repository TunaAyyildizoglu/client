import { Card, Button, Modal, Input, Typography, Select, Form } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Modal
        title="Sipariş Oluştur"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        
      >
        <Form layout={"vertical"} onFinish={onFinish}>
          <Form.Item
            label="Müşteri Adı"
            rules={[
              { required: true, message: "Müşteri Adı Alanı Boş Bırakılamaz" },
            ]}
            name={"customerName"}
          >
            <Input placeholder="Bir Müşteri Adı Giriniz" />
          </Form.Item>

          <Form.Item
            label="Telefon No"
            rules={[
              { required: true, message: "Telefon No Alanı Boş Bırakılamaz" },
            ]}
            name={"phoneNumber"}
          >
            <Input placeholder="Bir Telefon No Giriniz" maxLength={11}/>
          </Form.Item>

          <Form.Item
            label="Ödeme Yöntemi"
            rules={[
              {
                required: true,
                message: "Ödeme Yöntemi Alanı Boş Bırakılamaz",
              },
            ]}
            name={"paymentMode"}
          >
            <Select placeholder="Ödeme Yöntemi Seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="Kredi">Kredi</Select.Option>
            </Select>
          </Form.Item>

          <div>
            <Card className="flex flex-col">
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

              <div className="flex justify-end">
                <Button type="primary" className="mt-3 h-8" htmlType="submit">
                  Sipariş Oluştur
                </Button>
              </div>
            </Card>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CreateBill;
