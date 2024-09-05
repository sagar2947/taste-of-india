import { View, Text, Platform, FlatList as List, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../providers/CartProvider';
import Colors from '../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';

const CartScreen = () => {
  const colorScheme = useColorScheme();
  const { items, removeItem } = useCart();

  // State to track the quantity for each item by its ID
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const updateQuantity = (id: string, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {items.length > 0 ? (
        <List
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: item.img }} style={[styles.image]} />
                <View>
                  <Text style={{ fontWeight: 'bold' }}>{item.product.name}</Text>
                  <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Text>Rs {item.price}</Text>
                    <Text>Size: {item.size ? item.size[item.index] : 'N/A'}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quantityContainer}>
                <Pressable
                  onPress={() =>
                    updateQuantity(item.id, quantities[item.id] + 1)
                  }
                >
                  <FontAwesome
                    size={28}
                    name="plus"
                    color={
                      colorScheme === 'dark'
                        ? Colors.dark.error
                        : Colors.light.link
                    }
                  />
                </Pressable>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      color:
                        colorScheme === 'dark'
                          ? Colors.dark.secondaryText
                          : Colors.light.secondaryText,
                      fontSize: 28,
                    },
                  ]}
                >
                  {quantities[item.id]}
                </Text>
                <Pressable
                  onPress={() =>
                    quantities[item.id] > 1
                      ? updateQuantity(item.id, quantities[item.id] - 1) // Decrement the quantity
                      : removeItem(item.id) // Remove the item if the quantity is 1
                  }
                >

                  <FontAwesome
                    size={28}
                    name={quantities[item.id] > 1 ? 'minus' : 'remove'}
                    color={
                      colorScheme === 'dark'
                        ? Colors.dark.error
                        : Colors.light.link
                    }
                  />
                </Pressable>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    borderRadius: 10,
  },
  image: {
    aspectRatio: 1,
    width: 80,
    marginRight: 20,
    alignSelf: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    alignItems: 'center',
  },
  sizeText: {
    marginHorizontal: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default CartScreen;
