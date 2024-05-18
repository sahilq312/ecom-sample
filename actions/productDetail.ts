"use server"


export const ProductDetailAction = async(id : string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
}