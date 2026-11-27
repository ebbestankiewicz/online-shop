import { ProductCatalog } from "@/components/product/ProductCatalog";
import { SearchBar } from "@/components/product/SearchBar";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <section className="mb-12 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-terracotta">
          Sunday, every day
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl">
          Good things, found slowly.
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          A small market of everyday goods. Take your time, have a look around.
        </p>
        <div className="mt-6">
          <SearchBar products={products} />
        </div>
      </section>

      <ProductCatalog products={products} />
    </>
  );
}
