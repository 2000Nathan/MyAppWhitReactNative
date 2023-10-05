import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    /******ESTILOS DE LOGIN********************** */
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'green',
        width: "100%"
    },
    seconSection: {
        flex: 2,
        backgroundColor: "white",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 48,
        color: "white",
        fontWeight: 'bold'
    },
    label: {
        color: "#ccc",
    },
    textInput: {
       color: "#ccc",
       padding: 8,
    },
    forgotPassword: {
        color: "#000",
        textAlign: "right"
    },
    button: {
        backgroundColor: "pink",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText:{
        color:"white",
        fontWeight: "bold",
    },
    spacing:{
        marginTop: 10
    },
    row:{
        flexDirection: "row",
        justifyContent: "center"
    },
    signup: {
        color: "pink",
        paddingLeft: 5,
    },

    
})