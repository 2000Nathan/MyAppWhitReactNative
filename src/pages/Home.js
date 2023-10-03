import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, useWindowDimensions, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function Home(props) {
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
                <Text>Estás en home</Text>

                <Button title="Seleccionar imágenes" onPress={pickImages} />

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

                <View>
                    <TouchableOpacity onPress={goToLogin} style={styles.button}>
                        <Text style={styles.buttonText}>SALIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstSection: {
        marginTop: "10%",
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
    },
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
        marginTop: 60
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 500
    },
    imageList: {
        flexGrow: 1,
    },
});
