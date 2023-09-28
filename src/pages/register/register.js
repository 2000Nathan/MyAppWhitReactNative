import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Register( props ) {

    const { navigation } = props;

    const goToLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSection}>
                <View style={{ position: "absolute" }}>
                    <Text style={styles.title}>Sign up for a new account</Text>
                    <Text style={styles.label2}>We just need some more information</Text>
                </View>
                    <View style={styles.formu}>
                        <View style={styles.spacing}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.textInput}
                                underlineColorAndroid="pink"
                                placeholder="John"
                                returnKeyType="next"
                            />
                        </View>

                        <View style={styles.spacing}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                underlineColorAndroid="pink"
                                placeholder="ejemplo@ejemplo.com"
                                keyboardType="email-address" //cambiar el teclado a un @
                                returnKeyType="next"

                            />
                        </View>

                        <View style={styles.spacing}>
                        <Text style={styles.label }>Password</Text>
                            <TextInput 
                                style={styles.textInput}
                                underlineColorAndroid="pink"
                                placeholder="******"
                                secureTextEntry={true} //ocultar el password
                            
                            />
                        </View>

                        <View style={styles.spacing}>
                        <Text style={styles.label }>Confirm Password</Text>
                            <TextInput 
                                style={styles.textInput}
                                underlineColorAndroid="pink"
                                placeholder="******"
                                secureTextEntry={true} //ocultar el password
                            
                            />
                        </View>

                        <View style={styles.spacing2}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>NEXT</Text>      
                            </TouchableOpacity> 
                        </View>
                    </View>

                    
                    <View style={[styles.spacing, styles.row]}> 
                        <Text style={styles.label}>Alredy have an account?</Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text style={styles.signup}>Login in </Text>
                        </TouchableOpacity>
                    </View>
                    
            </View>
        </SafeAreaView>
    );
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstSection: {
        marginTop: "10%",
        
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
        color: "black",
        marginLeft: "6%",
        fontWeight: 'bold'
    },
    label2:{
        marginLeft: "6%",
        color: "gray",
        fontWeight: 'bold'
    },
    label: {
        color: "#ccc",
    },
    textInput: {
       color: "#ccc",
       padding: 8,
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
    spacing2:{
        marginTop: 40
    },
    row:{
        flexDirection: "row",
        justifyContent: "center"
    },
    signup: {
        color: "pink",
        paddingLeft: 5,
    },
    formu: {
        marginTop: "40%",
    },
    

    
})