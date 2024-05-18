"use server"


export const Products = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const productList = await response.json();
    return productList;
}