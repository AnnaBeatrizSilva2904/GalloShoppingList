import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#67a8cd',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#67a8cdc0',
    },
    itemToBuy: {
        color: "#fff",
        fontSize: 24,
        textDecorationLine: 'none',
    },
    itemToBought: {
        color: "#fff",
        fontSize: 24,
        textDecorationLine: 'line-through',
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 20,
    },
});