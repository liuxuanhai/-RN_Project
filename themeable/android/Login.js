import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from "react-native";

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* the header*/}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Login</Text>
                </View>
                {/* the body*/}
                <View style={styles.body}>
                    <View style={styles.segment}>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: "https://img.icons8.com/dusk/50/000000/lock-2.png"
                            }}
                        />
                    </View>
                    <View style={styles.segment}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.description}>
                            Please enter your username and password to proceed
            </Text>
                    </View>
                    <View style={styles.segment}>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput}>Username</TextInput>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput}>Password</TextInput>
                        </View>
                    </View>
                </View>
                {/* the footer*/}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white"
    },
    header: {
        padding: 10,
        backgroundColor: "blue"
    },
    headerText: {
        fontSize: 24,
        color: "white",
        fontFamily: "AvertaDemo-Regular"
    },
    body: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        backgroundColor: "white",
        paddingTop: 30,
        padding: 20
    },
    segment: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch"
    },
    icon: {
        height: 60,
        width: 60
    },

    title: {
        color: "#3d3d3d",
        fontSize: 30,
        fontFamily: "AvertaDemo-Regular"
    },
    description: {
        color: "#3d3d3d",
        fontSize: 18,
        fontFamily: "AvertaDemo-Regular"
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0"
    },
    textInput: {
        color: "#3d3d3d",
        fontSize: 24,
        paddingTop: 20,
        fontFamily: "AvertaDemo-Regular"
    },
    footer: {
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch"
    },
    button: {
        padding: 10,
        backgroundColor: "blue",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        elevation: 1,
        borderRadius: 2
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontFamily: "Product-Sans-Regular"
    }
});