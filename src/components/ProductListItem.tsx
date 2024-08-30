import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Colors from '@/src/constants/Colors';
import { Products } from '../types';
import { Link } from 'expo-router';

const notAvailable = "https://cdn2.vectorstock.com/i/1000x1000/19/11/pizza-party-blank-04-vector-34061911.jpg"
type ProductListItemProps = {
  item: Products;
}

export const ProductListItem = ({ item }: ProductListItemProps) => {
  // console.log(item)
  return (
    <Link href={`/menu/${item.id}`} asChild>
      <Pressable>
        <Image style={styles.image} source={{ uri: item.image || notAvailable }} resizeMode='contain' />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>Rs {item.price}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    aspectRatio: 1,
    // objectFit: 'contain'
  },
  title: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.light.text
  },
  subTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: Colors.light.tint
  }
});
