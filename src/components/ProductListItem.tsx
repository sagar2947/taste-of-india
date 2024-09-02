import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Colors from '@/src/constants/Colors';
import { Products } from '../types';
import { Link } from 'expo-router';
import { useColorScheme } from 'react-native';

const notAvailable = "https://cdn2.vectorstock.com/i/1000x1000/19/11/pizza-party-blank-04-vector-34061911.jpg"
type ProductListItemProps = {
  item: Products;
}

export const ProductListItem = ({ item }: ProductListItemProps) => {
  const colorScheme = useColorScheme()
  // console.log(item)
  return (
    <Link href={`/menu/${item.id}`} asChild>
      <Pressable>
        <Image style={styles.image} source={{ uri: item.image || notAvailable }} resizeMode='contain' />
        <Text style={[styles.title,{color:colorScheme==='dark'? Colors.dark.primaryText:Colors.light.primaryText}]}>{item.name}</Text>
        <Text style={[styles.subTitle,{color:colorScheme==='dark'? Colors.dark.secondaryText:Colors.light.secondaryText,fontWeight:500}]}>Rs {item.prices[0]}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({

  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 600,
    marginLeft: 6,
  },
  subTitle: {
    fontSize: 12,
    marginLeft: 6,
  }
});
