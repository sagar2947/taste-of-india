import { View, Text, Platform, FlatList as List, Image, StyleSheet, Pressable, Button } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../providers/CartProvider';
import { tintColorLight,tintColorDark} from '../constants/Colors';
import Colors from '../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';

const CartScreen = () => {
  const colorScheme = useColorScheme();
  const { items, removeItem, total, updateItemQuantity } = useCart();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateItemQuantity(id, newQuantity);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };
  const lightText = Colors.dark.primaryText
  const darkText = Colors.light.primaryText
  return (
    <View style={[styles.container,{backgroundColor:colorScheme==='dark'?Colors.dark.background:Colors.light.background}]}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      {items.length > 0 ? (
        <List
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer,{backgroundColor:colorScheme === 'dark' ? Colors.dark.cardBackground:Colors.light.cardBackground,borderColor:colorScheme === 'dark'? Colors.dark.border:Colors.light.border, shadowColor:colorScheme==='dark'? 'rgba(255, 255, 255, 0.05)': 'rgba(0, 0, 0, 0.1)',elevation:3,shadowOffset:{width:2, height:2},shadowRadius:4,shadowOpacity:1}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: item.img }} style={[styles.image]} />
                <View>
                  <Text style={{ fontWeight: 'bold',color: colorScheme==='dark' ? Colors.dark.primaryText:Colors.light.primaryText }}>{item.product.name}</Text>
                  <View style={{ flexDirection: 'row', gap: 20 }}>
                    <Text style={{color: colorScheme==='dark' ? Colors.dark.secondaryText:Colors.light.secondaryText,marginTop:8 }}>Rs {item.price}</Text>
                    <Text style={{color: colorScheme==='dark' ? tintColorDark.primary:tintColorLight.primary,marginTop:8 }}>Size : {item.size && item.index !== undefined ? item.size[item.index] : 'N/A'}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.quantityContainer}>
                <Pressable onPress={() => handleUpdateQuantity(item.id, quantities[item.id] + 1)}>
                  <FontAwesome
                    size={18}
                    name="plus"
                    color={colorScheme === 'dark' ? tintColorDark.cyan : tintColorLight.orange}
                  />
                </Pressable>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      color: colorScheme === 'dark' ? lightText : darkText
                    },
                  ]}
                >
                  {quantities[item.id]}
                </Text>
                <Pressable
                  onPress={() =>
                    quantities[item.id] > 1
                      ? handleUpdateQuantity(item.id, quantities[item.id] - 1)
                      : removeItem(item.id)
                  }
                >
                  <FontAwesome
                    size={18}
                    name={quantities[item.id] > 1 ? 'minus' : 'remove'}
                    color={colorScheme === 'dark' ? tintColorDark.cyan : tintColorLight.orange}
                  />
                </Pressable>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={[styles.emptyView,]}>
          <FontAwesome
            size={72}
            name="shopping-cart"
            color={colorScheme === 'dark' ? Colors.dark.link : Colors.light.link}
          />
          <Text style={[styles.emptyText, { color: colorScheme === 'dark' ? Colors.dark.tint : Colors.light.tint }]}>
            Your cart is empty
          </Text>
        </View>
      )}
      {items.length > 0 && (
        <View style={{paddingBottom:10}}>
          <Text style={{fontSize:16,padding:8, color:colorScheme === 'dark' ? Colors.dark.primaryText:Colors.light.primaryText}}>Your Total is: Rs {total}</Text>
          <Button onPress={() => { console.log('Checkout pressed') }} title='Checkout' />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    aspectRatio: 1,
    width: 100,
    marginRight: 8,
    alignSelf: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    alignItems: 'center',
  },
  sizeText: {},
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 5,
    marginTop: 20,
  },
  emptyView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default CartScreen;
