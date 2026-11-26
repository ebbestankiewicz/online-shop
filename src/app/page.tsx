import { getProducts } from "@/lib/api";
import { formatPrice } from "@/utils/price";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Online Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} – {formatPrice(product.discountedPrice)}
          </li>
        ))}
      </ul>
    </main>
  );
}
