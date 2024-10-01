import { Button } from "antd";
import Form from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full relative h-full flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold">LOGO</h1>
          <Form layout="vertical">
            <FormItem
              label="Kullanıcı Adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input />
            </FormItem>
            <FormItem
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "E-mail Boş Bırakılamaz!",
                },
              ]}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Şifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Şifre Boş Bırakılamaz!",
                },
              ]}
            >
              <Input.Password />
            </FormItem>
            <FormItem
              label="Şifre Tekrar"
              name={"passwordAgain"}
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input.Password />
            </FormItem>

            <FormItem>
                <Button type="primary" htmlType="submit" className="w-full" size="large">Kaydol</Button>
            </FormItem>
          </Form>
          <div class="absolute left-0 bottom-10 w-full flex justify-center gap-x-1">Henüz bir hesabınız yok mu?<Link class="text-blue-600" to="/register">Şimdi kaydol</Link></div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 bg-[#6c63ff] h-full md:flex hidden flex-col justify-center items-center">right</div>
      </div>
    </div>
  );
};

export default Register;
