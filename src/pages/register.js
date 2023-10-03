import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, useWindowDimensions, Button, Image  } from "react-native";
import * as ImagePicker from 'expo-image-picker';


export default function Register( props ) {

    const { navigation } = props;

    const goToLogin = () => {
        navigation.navigate("Login");
    }


    const [images, setImages] = useState([]);
    const { width } = useWindowDimensions();

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('La aplicación necesita acceso a la galería de imágenes.');
            }
        })();
    }, []);

    const pickImages = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            multiple: true,
        });

        if (!result.cancelled) {
            const selectedImages = result.assets.map(asset => asset.uri);
            setImages(selectedImages);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSection}>
                <View style={{ position: "absolute" }}>
                    <Text style={styles.title}>Sign up for a new account</Text>
                    <Text style={styles.label2}>We just need some more information</Text>
                </View>

                <View style={styles.Section2}>

                    <Button  title="Seleccionar imágenes" onPress={pickImages} />

                    <FlatList
                        data={images}
                        renderItem={({ item }) => (
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: item }} style={styles.image} />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.imageList}
                    />

                   
                </View>

                <View style={styles.section3}>
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
                                <TouchableOpacity onPress={goToLogin} style={styles.button}>
                                    <Text style={styles.buttonText}>NEXT</Text>      
                                </TouchableOpacity> 
                            </View>
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
        height: 5,
        flex: 2,
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
    },
    Section2: {
        marginTop: "35%", 
        flex: 2,
        backgroundColor: "white",
        width: "100%",
        height: 50,
        padding: 1,
        justifyContent: "space-between",
    },
    section3: {
        marginTop: "-12%", 
        flex: 4,
        backgroundColor: "white",
        width: "100%",
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
    



    /***********/ 
    button: {
        backgroundColor: "pink",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    
    buttonText: {
        color: "white",
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 10,
        marginTop:2
    },
    image: {
        position: "absolute",
        width: 130,
        height: 130,
        borderRadius: 500,
        zIndex: 999,
    },
    imageList: {
        flexGrow: 1,
    },
    

    
})