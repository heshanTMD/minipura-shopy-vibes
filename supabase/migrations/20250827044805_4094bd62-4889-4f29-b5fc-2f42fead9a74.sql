-- Create products table for e-commerce functionality
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  category TEXT NOT NULL,
  image_url TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  is_new BOOLEAN DEFAULT false,
  discount_percentage INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (products are publicly viewable)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, description, price, original_price, category, image_url, rating, reviews_count, is_new, discount_percentage) VALUES
('iPhone 15 Pro Max - 256GB', 'Latest iPhone with A17 Pro chip and titanium design', 185000.00, 195000.00, 'phones', '', 4.8, 124, true, 5),
('Samsung Galaxy S24 Ultra', 'Premium Android smartphone with S Pen', 175000.00, null, 'phones', '', 4.7, 156, true, 0),
('MacBook Air M2 - 13 inch', 'Lightweight laptop with M2 chip for professionals', 165000.00, 175000.00, 'laptops', '', 4.9, 89, false, 6),
('Dell XPS 13 Plus', 'Premium ultrabook with latest Intel processors', 145000.00, 155000.00, 'laptops', '', 4.5, 67, false, 6),
('Nike Air Max 270 Sneakers', 'Comfortable running shoes with modern design', 25000.00, 30000.00, 'fashion', '', 4.6, 234, false, 17),
('Adidas Ultraboost 22', 'Performance running shoes with boost technology', 22000.00, 28000.00, 'fashion', '', 4.4, 189, false, 21),
('Apple Watch Series 9', 'Advanced smartwatch with health monitoring', 55000.00, null, 'electronics', '', 4.7, 301, true, 0),
('Sony WH-1000XM5 Headphones', 'Premium noise-canceling wireless headphones', 45000.00, 50000.00, 'electronics', '', 4.8, 445, false, 10);