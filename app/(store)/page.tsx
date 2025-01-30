import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProducsView from "@/components/ProducsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
 
  return (
    <div>
      <BlackFridayBanner />

      {/* Render all the products */}
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4"> 
        <ProducsView products={products} categories={categories} />
      </div>
    </div>
  );
}
