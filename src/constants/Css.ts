import { StyleSheet } from "react-native";
export const productStyles = StyleSheet.create({
    scroll: {
        flex: 1,
        paddingVertical: 0,
    },
    container: {
        marginHorizontal: 8,
        padding: 8,
        borderRadius: 12,
    },
    img: {
        width: 180,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginHorizontal: 'auto',
    },
    prodName: {
        fontSize: 36,
        fontWeight: '400',
        letterSpacing: 1,
        marginTop: 20,
        paddingVertical: 0,
    },
    prodPrice: {
        fontSize: 18,
        marginTop: 4,
        fontWeight: '600',
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 8,
        marginTop: 12,
    },
    sizeOption: {
        padding: 4,
        width: 44,
        height: 44,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
    },
    sizeText: {
        fontSize: 16,
        fontWeight: '700',
    },
    quantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        width: 150,
    },
    description: {
        marginTop: 14,
        textAlign: 'justify',
        // fontSize: 14,
        fontWeight: '400',
        // paddingBottom: 100,
    },
    addCartHolder: {
        width: 'auto',
        padding: 12,
        borderRadius: 100,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 4,
        position: 'absolute',
        top: '90%',
        right: '5%',
    },
    addCartText: {
        color: 'black',
        fontSize: 22,
        fontWeight: '800',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    addCartTextInActive: {
        display: 'none',
    },
    fabClicked: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 250,
        padding: 12,
        borderRadius: 100,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 4,
        position: 'absolute',
        top: '90%',
        right: '5%',
    },
    addCartTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
