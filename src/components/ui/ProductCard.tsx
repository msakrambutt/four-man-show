import Image from "next/image"
import P1 from '/public/p1.webp';
import AddToCart from "./AddToCart";
const ProductCard = () => {
  return (
    <div>
    <Image src={P1} alt=""/>
    <AddToCart/>
</div>
  )
}

export default ProductCard;