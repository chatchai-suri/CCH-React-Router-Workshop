import { NavLink, Outlet } from 'react-router'
import Card from '../Card'

function ShopLayout() {
  return (
    <Card>
      <h1>หมวดหมู่สินค้า</h1>
      <div>
        <NavLink to="/shop/electonics">Electronics | </NavLink>
        <NavLink to="/shop/clothing">Clothing | </NavLink>
        <NavLink to="/shop/furniture">Furniture</NavLink>
      </div>
      <Outlet />
    </Card>
  )
}

export default ShopLayout