import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    onPriceChange(values[0], values[1]);
  };

  return (
    <Card className="p-4 space-y-4 shadow-soft">
      <Label className="text-sm font-semibold text-foreground">
        Price Range
      </Label>
      
      <div className="space-y-4">
        <Slider
          value={priceRange}
          onValueChange={handlePriceChange}
          max={200000}
          min={1000}
          step={1000}
          className="w-full"
        />
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Rs. {priceRange[0].toLocaleString()}</span>
          <span>Rs. {priceRange[1].toLocaleString()}</span>
        </div>
      </div>
    </Card>
  );
};

export default PriceFilter;