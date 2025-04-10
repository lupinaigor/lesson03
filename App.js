import React, { useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';


export default function App() {
    const [subscribed, setSubscribed] = useState(false);

    const user = {
        avatar: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2Frambo-4ed4a10358ee0355a14d3c4719957485.jpg',
    };

    const handleUserPress = () => {
        Alert.alert('User Selected', 'You selected Rambo');
    };

    const handleSubscribe = () => {
        setSubscribed(!subscribed);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <TouchableOpacity onPress={handleUserPress} style={styles.card}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Rambo</Text>
                    <Text style={styles.subtitle}>Last Blood</Text>
                </View>
                <TouchableOpacity
                    onPress={handleSubscribe}
                    style={[
                        styles.subscribeButton,
                        { backgroundColor: subscribed ? 'red' : 'skyblue' },
                    ]}
                >
                    <Text style={styles.subscribeText}>Subscribe</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        elevation: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        marginBottom: 16,
        alignItems: 'center',

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    subscribeButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    subscribeText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
