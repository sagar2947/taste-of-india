import React, { useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/src/components/useColorScheme';
import { productStyles as styles } from '@/src/constants/Css';
import { useCart } from '@/src/providers/CartProvider';


const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    const { addItem } = useCart()

    const product = products.find((item) => item.id.toString() === id);
    const [isClicked, setIsClicked] = useState(false);
    const [index, setIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
    const sizes: string[] = ['S', 'M', 'L', 'XL'];
    const colorScheme = useColorScheme();
    const notAvailable = "https://cdn2.vectorstock.com/i/1000x1000/19/11/pizza-party-blank-04-vector-34061911.jpg";

    const addToCart = () => {
        if (!product) {
            return
        }
        addItem(product, product.prices[index], quantity,sizes,index)
        // console.log(product, product.prices)
    }

    const handleFabPress = () => {
        if (!product || !product.prices || !Array.isArray(product.prices) || index >= product.prices.length) {
            alert('Product data is incomplete.');
            return;
        }

        if (quantity > 0) {
            setIsClicked(true)
            addToCart()
        }
        else return alert("Please select quantity");

        setIsClicked(true)
        setTimeout(() =>
            setIsClicked(false)
            , 1200)
    }

    if (!product) {
        return <Text>Product Not Found</Text>;
    }

    return (
        <View style={[styles.scroll, { backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background }]}>
            <ScrollView >
                <View style={styles.container}>
                    <Stack.Screen options={{ title: `Details : ${product?.name}` }} />
                    <Image source={{ uri: product?.image || notAvailable }} style={styles.img} />
                    <Text style={[styles.prodName, { color: colorScheme === 'dark' ? Colors.dark.secondaryText : Colors.light.secondaryText }]}>{product?.name}</Text>
                    <Text style={[styles.prodPrice, { color: colorScheme === 'dark' ? Colors.dark.success : Colors.light.success }]}>Rs {product?.prices[index]}</Text>
                    <Text style={{ marginTop: 30, color: colorScheme === 'dark' ? Colors.dark.buttonBackground : Colors.light.primaryText, fontWeight: 'bold', fontSize: 18 }}>Select Size</Text>
                    <View style={styles.sizeContainer}>
                        {sizes.map((content) => (
                            <Pressable
                                onPress={() => {
                                    setSelectedSize(content);
                                    setIndex(sizes.indexOf(content));
                                }}
                                key={content}
                                style={[
                                    styles.sizeOption,
                                    {
                                        backgroundColor: selectedSize === content
                                            ? colorScheme === 'dark' ? Colors.dark.error : Colors.light.link
                                            : colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,
                                    }
                                ]}>
                                <Text
                                    style={[
                                        styles.sizeText,
                                        {
                                            color: selectedSize === content
                                                ? colorScheme === 'dark' ? Colors.dark.background : Colors.light.background
                                                : colorScheme === 'dark' ? Colors.dark.secondaryText : Colors.light.secondaryText,
                                        }
                                    ]}>
                                    {content}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                    <Text style={{ marginTop: 30, color: colorScheme === 'dark' ? Colors.dark.buttonBackground : Colors.light.primaryText, fontWeight: 'bold', fontSize: 18 }}>Select Quantity</Text>
                    <View style={styles.quantityContainer}>
                        <Pressable onPress={() => setQuantity(quantity + 1)}>
                            <FontAwesome size={24} name='plus-square-o' color={colorScheme === 'dark' ? Colors.dark.error : Colors.light.link} />
                        </Pressable>
                        <Text style={[
                            styles.sizeText,
                            {
                                color: colorScheme === 'dark' ? Colors.dark.secondaryText : Colors.light.secondaryText,
                                fontSize: 20
                            }
                        ]}>{quantity}</Text>
                        <Pressable onPress={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)}>
                            <FontAwesome size={24} name='minus-square-o' color={colorScheme === 'dark' ? Colors.dark.error : Colors.light.link} />
                        </Pressable>
                    </View>
                    <Text style={[styles.description, { color: colorScheme === 'dark' ? Colors.dark.secondaryText : Colors.light.secondaryText }]}>
                        <Text style={{ fontSize: 20, textAlign: 'justify' }}>{product?.description.charAt(0)}</Text>
                        <Text style={{ textAlign: 'justify' }}>{product?.description.slice(1)}</Text>
                    </Text>
                </View>
            </ScrollView>
            <Pressable
                onPress={handleFabPress}
                style={isClicked ? [styles.fabClicked, { backgroundColor: colorScheme === 'dark' ? Colors.light.link : Colors.light.tabIconSelected }] : [styles.addCartHolder, { backgroundColor: colorScheme === 'dark' ? Colors.light.link : Colors.light.tabIconSelected }]}>
                <Text style={[isClicked ? styles.addCartText : styles.addCartTextInActive, { color: colorScheme === 'dark' ? Colors.light.background : Colors.light.background }]}>Added to Cart</Text>
                <FontAwesome size={28} name='shopping-cart' color={Colors.light.background} style={{ marginBottom: 0 }} />
            </Pressable>
        </View>
    );
}

export default ProductDetailsScreen;