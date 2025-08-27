import { Smartphone, Laptop, Shirt, Home, Gamepad2, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "phones", name: "Phones", icon: Smartphone, color: "primary" },
  { id: "laptops", name: "Laptops", icon: Laptop, color: "secondary" },
  { id: "fashion", name: "Fashion", icon: Shirt, color: "accent" },
  { id: "home", name: "Home", icon: Home, color: "purple" },
  { id: "gaming", name: "Gaming", icon: Gamepad2, color: "primary" },
  { id: "watches", name: "Watches", icon: Watch, color: "secondary" },
];

interface CategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryNav = ({ selectedCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <div className="bg-card border-b">
      <div className="container py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => onCategoryChange("all")}
            className="flex-shrink-0 transition-smooth"
          >
            All Products
          </Button>
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                onClick={() => onCategoryChange(category.id)}
                className={`flex-shrink-0 transition-smooth ${
                  isSelected 
                    ? `bg-${category.color} hover:bg-${category.color}/90` 
                    : ""
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;