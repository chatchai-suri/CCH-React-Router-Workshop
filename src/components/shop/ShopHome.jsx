import { Outlet } from "react-router-dom";

function ShopHome() {
  return (
    <div>
      <p>กรุณาเลือกหมวดหมู่สินค้า</p>
      <Outlet />
    </div>
  );
}

export default ShopHome;
