import PriceFormatter from "./PriceFormatter";

interface PriceViewProps {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

const PriceView = ({ price, discount, className }: PriceViewProps) => {
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter amount={price} className="text-shop_dark_green" />
      {price && discount && (
        <PriceFormatter
          amount={price + (price * discount) / 100}
          className="line-through text-xs font-normal text-shop_light_text"
        />
      )}
    </div>
  );
};

export default PriceView;
