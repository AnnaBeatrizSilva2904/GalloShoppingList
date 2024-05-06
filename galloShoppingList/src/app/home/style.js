import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#67a8cdc0',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor:'#67a8cdc0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    inputContainer: {
        backgroundColor: '#2499c7',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    iconContainer: {
        borderRadius: 45,
        elevation: 40,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2499c7'
    },
})