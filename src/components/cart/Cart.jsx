import React from "react";
import { Button } from "antd";

const Cart = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-white py-4 px-2 font-bold tracking-wide text-center">
        Sepetteki Ürünler
      </h2>
      <ul className="card-items p-[10px] hover:bg-blue-50">
        <li className="cart-item flex gap-2 justify-between">
          <div className="flex  gap-2">
            <img
              src="https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/03/yesil_elma_mi_kirmizi_elma_mi_daha_faydali_gunde_1_adet_elma_yerseniz_1705319290_4093.jpg"
              alt="resim"
              className="w-16 h-16 object-cover cursor-pointer rounded-[10px]"
            />
            <div className="flex flex-col gap-y-2">
              <b>Elma</b>
              <span>100 ₺ X 1</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Button type="primary" className="text-white">
              +
            </Button>
            <span className="font-bold">1</span>
            <Button type="primary" className="text-white">
              -
            </Button>
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto py-7 px-2">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>99 ₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV 8%</b>
            <span className="text-red-600">+0 ₺</span>
          </div>
        </div>
        <div className="flex justify-between p-2 border-b mb-[10px]">
          <h1 className="text-lg text-green-500 font-bold">Genel Toplam</h1>
          <h1 className="text-lg">0 ₺</h1>
        </div>
        <div className="flex flex-col gap-3">
          <Button type="primary">Sipariş Oluştur</Button>
          <Button type="primary" danger>
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
