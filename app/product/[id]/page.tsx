import { ProductDetailAction } from "@/actions/productDetail";
import ProductDetail from "@/components/productPage";

export default async function ProductPage({params} : {params : {id : string}}) {
  const product = await ProductDetailAction(params.id);
  return (
    <ProductDetail product={product}/>
  )
} 

