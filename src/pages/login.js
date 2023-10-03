import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login( props ) {

    const { navigation } = props;

    const goToRegister = () => {
        navigation.navigate("Register");
    }
    const goToHome = () => {
        navigation.navigate("Home");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.firstSection}>
                <Image source={{
                        uri: 'https://media.istockphoto.com/id/1493267168/es/foto/avi%C3%B3n-de-pasajeros-despega-vista-frontal-contra.webp?b=1&s=612x612&w=0&k=20&c=eukig9Ouf7yP9RWTZ_hv17zZoojp27F9gtgHQ2EFU5o='
                    }}
                    style={{ width: "100%", height: "120%", resizeMode: "cover"}}  //resizeMode: reajusta la imagen
                />

                <View  style={{ position: "absolute"}}>
                    <Text style={styles.title}>Trevelo</Text>
                </View>
            </View>

            <View style={styles.seconSection}>
                    <View>
                        <View style={styles.spacing}>
                            <Text style={styles.label}>Email adress</Text>
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
                            <Text style={styles.forgotPassword }>Forgot password?</Text>
                        </View>

                        <View style={styles.spacing}>
                            <TouchableOpacity style={styles.button} onPress={goToHome}>
                                    <Text style={styles.buttonText}>Login</Text>      
                            </TouchableOpacity> 
                        </View>
                    </View>

                    
                    <View style={[styles.spacing, styles.row]}> 
                        <Text style={styles.label}>Don't have an acount?</Text>
                        <TouchableOpacity onPress={goToRegister}>
                            <Text style={styles.signup}>Sign up</Text>
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
    }

    
})