import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Products } from '../types';

const notAvailable = "https://cdn2.vectorstock.com/i/1000x1000/19/11/pizza-party-blank-04-vector-34061911.jpg"
type ProductListItemProps = {
  item: Products;
}

export const ProductListItem = ({ item }:ProductListItemProps) => {
  // console.log(item)
  return (
    <View>
      <Image style={styles.image} source={{ uri: item.image || notAvailable} } />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subTitle}>Rs {Math.round(item.price * 60)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    aspectRatio: 1,
    objectFit: 'cover'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: "gray"
  },
  subTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: Colors.light.tint
  }
});
