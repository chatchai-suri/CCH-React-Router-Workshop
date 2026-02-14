import { useParams } from "react-router"

function CategoryPage() {
  const {category} = useParams()
  return (
    <div>
      <h2>หมวดหมู่สินค้า: {category}</h2>
    </div>
  )
}

export default CategoryPage