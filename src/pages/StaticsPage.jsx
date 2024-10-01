import React from "react";
import Header from "../components/Header/Header";
import StatisticsCard from "../components/statistics/StatisticsCard";
import { Area } from "@ant-design/plots";
import { Pie } from '@ant-design/plots';

const StaticsPage = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/aapl.json",
    },
    xField: (d) => new Date(d.date),
    yField: "close",
  };


  const configPie = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="grid gap-10 mb-8 md:grid-cols-2 xl:grid-cols-4 my-10">
            <StatisticsCard
              title={"Toplam Müşteri"}
              amount={"10"}
              img={"images/user.png"}
            />
            <StatisticsCard
              title={"Toplam Kazanç"}
              amount={"1235.75₺"}
              img={"images/money.png"}
            />
            <StatisticsCard
              title={"Toplam Satış"}
              amount={"24"}
              img={"images/sales.png"}
            />
            <StatisticsCard
              title={"Toplam Ürün"}
              amount={"7"}
              img={"images/product.png"}
            />
          </div>

          <div className="overflow-x-hidden pb-32 mt-14">
            <div className="flex gap-10 lg:flex-row flex-col justify-between items-center">
              <div className="lg:w-1/2  lg:h-72 ">
                <Area {...config} />
              </div>
              <div className="lg:w-1/2 lg:h-72">
                <Pie {...configPie} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticsPage;
