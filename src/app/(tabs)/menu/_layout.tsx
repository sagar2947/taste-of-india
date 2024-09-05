import Colors from "@/src/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

const MenuStack = () => {
    return (
        <Stack
            screenOptions={{
                headerRight: () => (
                    <Link href="/cart" asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <FontAwesome
                                    name="shopping-cart"
                                    size={25}
                                    color={Colors.light.link}
                                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, }}
                                />
                            )}
                        </Pressable>
                    </Link>
                ),
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Menu' }} />
        </Stack>
    )
}

export default MenuStack