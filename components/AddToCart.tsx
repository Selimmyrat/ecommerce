import { Product } from "@/sanity.types";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface AddToCartProps {
  product: Product;
  className?: string;
}

const AddToCart = ({ product, className }: AddToCartProps) => {
  const isOutOfStock = product?.stock === 0;
  const handleAddToCart = () => {
    window.alert("Product added to cart");
  };
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          "w-full bg-shop_dark_green/80 text-shop_light_bg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect leading-none",
          className,
        )}
      >
        <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCart;
