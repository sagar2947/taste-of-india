import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Products } from "../types";
import { randomUUID } from 'expo-crypto';

type CartType = {
    items: CartItem[]; 
    addItem: (product: Products, price: CartItem['price'], quantity: number, size: string[] | null, index: number) => void; 
    removeItem: (id: string) => void; 
    updateItemQuantity: (id: string, newQuantity: number) => void;
    total: number;
}

export const CartContext = createContext<CartType>({
    items: [], 
    addItem: () => { }, 
    removeItem: () => { },
    updateItemQuantity: () => {},
    total: 0
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (product: Products, price: number, quantity: number, size: string[] | null, index: number) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) =>
                item.product_id === product.id &&
                item.size?.[item.index] === size?.[index]
            );

            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            } else {
                const newCartItem: CartItem = {
                    id: randomUUID(),
                    img: product.image,
                    product,
                    product_id: product.id,
                    size,
                    price,
                    quantity,
                    index,
                };
                return [newCartItem, ...prevItems];
            }
        });
    };

    const updateItemQuantity = (id: string, newQuantity: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const removeItem = (id: string) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateItemQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
