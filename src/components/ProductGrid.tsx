import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import PriceFilter from "./PriceFilter";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";
import phone1 from "@/assets/phone1.jpg";
import laptop1 from "@/assets/laptop1.jpg";
import shoes1 from "@/assets/shoes1.jpg";

const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max - 256GB",
    price: 185000,
    originalPrice: 195000,
    image: phone1,
    category: "phones",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    discount: 5,
  },
  {
    id: 2,
    name: "MacBook Air M2 - 13 inch",
    price: 165000,
    originalPrice: 175000,
    image: laptop1,
    category: "laptops",
    rating: 4.9,
    reviews: 89,
    discount: 6,
  },
  {
    id: 3,
    name: "Nike Air Max 270 Sneakers",
    price: 25000,
    originalPrice: 30000,
    image: shoes1,
    category: "fashion",
    rating: 4.6,
    reviews: 234,
    discount: 17,
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 175000,
    image: phone1,
    category: "phones",
    rating: 4.7,
    reviews: 156,
    isNew: true,
  },
  {
    id: 5,
    name: "Dell XPS 13 Plus",
    price: 145000,
    originalPrice: 155000,
    image: laptop1,
    category: "laptops",
    rating: 4.5,
    reviews: 67,
    discount: 6,
  },
  {
    id: 6,
    name: "Adidas Ultraboost 22",
    price: 22000,
    originalPrice: 28000,
    image: shoes1,
    category: "fashion",
    rating: 4.4,
    reviews: 189,
    discount: 21,
  },
];

interface ProductGridProps {
  selectedCategory: string;
}

const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, minPrice, maxPrice]);

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* Filters Sidebar */}
        <div className="space-y-6">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={handlePriceChange}
          />
        </div>

        {/* Products */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Toolbar */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "all" ? "All Products" : 
               selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              <span className="text-muted-foreground ml-2">
                ({filteredProducts.length} items)
              </span>
            </h2>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-4"
          }>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products found in this price range.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;