import {  SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import   {styles}  from  '../../styles/login/index';

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
                <Image source={require('../../../assets/fonts/abandoned-1866567_1280.jpg')}
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

