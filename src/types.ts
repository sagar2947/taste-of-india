export type Products = {
    id: number,
    name: string | null,
    image:string,
    description:string,
    prices: number[],
}

export type CartItem = {
    id:string,
    product:Products,
    img:string,
    product_id:number,
    price:number,
    quantity:number,
    size?:string[]|null,
    index?:number
} 