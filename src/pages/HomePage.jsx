import Cart from "../components/cart/Cart";
import Categories from "../components/categories/Categories";
import Header from "../components/Header/Header";
import Products from "../components/products/Products";
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          <Categories />
        </div>
        <div className="products flex-[8]">
          <Products />
        </div>
        <div className="card-wrapper min-w-[300px] md:-mr-[24px] border-l rounded-l-lg overflow-hidden">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default HomePage;
