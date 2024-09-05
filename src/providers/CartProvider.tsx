import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Products } from "../types";
import { randomUUID } from 'expo-crypto';

// Define the structure of the Cart context
type CartType = {
    items: CartItem[]; // Array of items in the cart
    addItem: (product: Products, price: CartItem['price'], quantity: number, size: string[] | null, index: number) => void; // Function to add an item to the cart
    removeItem: (id: string) => void; // Function to remove an item from the cart
}

// Create the Cart context with default values
export const CartContext = createContext<CartType>({
    items: [], // Default is an empty cart
    addItem: () => {}, // Default no-op function for addItem
    removeItem: () => {}, // Default no-op function for removeItem
});

// CartProvider component to wrap around the app and manage cart state
const CartProvider = ({ children }: PropsWithChildren) => {
    // State to manage the items in the cart
    const [items, setItems] = useState<CartItem[]>([]);

    // Function to add an item to the cart
    const addItem = (product: Products, price: number, quantity: number, size: string[] | null, index: number) => {
        setItems((prevItems) => {
            // Check if the item already exists in the cart by comparing product_id and size
            const existingItemIndex = prevItems.findIndex((item) => 
                item.product_id === product.id && item.size?.[item.index] === size?.[index]
            );

            if (existingItemIndex !== -1) {
                // If the item exists, update its quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems; // Return the updated cart items
            } else {
                // If the item doesn't exist, create a new CartItem object
                const newCartItem: CartItem = {
                    id: randomUUID(), // Generate a unique ID using expo-crypto or timestamp
                    img: product.image, // Image of the product
                    product, // Product object
                    product_id: product.id, // Unique product ID
                    size, // Size array (if applicable)
                    price, // Price of the product
                    quantity, // Quantity to be added
                    index, // Index to handle sizes (if applicable)
                };
                // Add the new item to the cart and return the updated cart
                return [newCartItem, ...prevItems];
            }
        });
    };

    // Function to remove an item from the cart by ID
    const removeItem = (id: string) => {
        const updatedItems = items.filter(item => item.id !== id); // Remove item with the matching ID
        setItems(updatedItems); // Update the cart state
    };

    return (
        // Provide the cart state and functions (addItem, removeItem) to the component tree
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

// Custom hook to use the CartContext in other components
export const useCart = () => useContext(CartContext);
