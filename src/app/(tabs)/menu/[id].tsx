import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const ProductDetailsScreen = () => {
    const notAvailable = "https://cdn2.vectorstock.com/i/1000x1000/19/11/pizza-party-blank-04-vector-34061911.jpg"

    const { id } = useLocalSearchParams()
    const product = products.find((item) => item.id.toString() === id)

    if (!product) {
        return <Text>Product Not Found</Text>
    }

    return (
        <ScrollView style={{flex:1,backgroundColor: Colors.light.background, paddingVertical: 18}}>

            
                <View style={styles.container}>
                    <Stack.Screen options={{ title: `Details : ${product?.name}` }} />
                    <Image source={{ uri: product?.image || notAvailable }} style={styles.img} />
                    <Text style={styles.prodName}>{product?.name}</Text>
                    <Text style={styles.prodPrice}>Rs {product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                    <Pressable style={styles.addCartHolder}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add To Cart</Text>
                        <FontAwesome size={28} style={{ marginBottom: -3 }} name='shopping-cart' color={'blue'} />
                    </Pressable>
                </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    addCartHolder: {
        width: 200,
        backgroundColor: 'white',
        marginHorizontal: 'auto',
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 32,
        borderRadius: 12,
        shadowColor: 'gray',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4
    },
    container: {
        marginHorizontal: 12,
        padding: 16,
        borderRadius: 12,
    },
    description: {
        marginTop: 18,
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'slategray'
    },
    prodName: {
        color: 'gray',
        fontSize: 32
        ,
        fontWeight: '400',
        letterSpacing: 1,
        marginTop: 20,
        paddingVertical: 0,
        borderRadius: 4
    },
    prodPrice: {
        color: 'orangered',
        fontSize: 18,
        marginTop: 0,
        paddingVertical: 4,
        borderRadius: 4,
        fontWeight: '400'
    },
    img: {
        width: 250,
        aspectRatio: 1,
        objectFit: 'contain',
        marginHorizontal: 'auto'
    }
})
export default ProductDetailsScreen