// import {useState} from 'react';
// import {StatusBar} from 'expo-status-bar';
// import {Alert, Button, FlatList, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
// import {validateInput} from "./validation";
// import {Picker} from "@react-native-picker/picker";
// import UserCard from "./src/components/UserCard";
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

//ex1
// export default function App() {
//     const [text, setText] = useState('');
//     const [error, setError] = useState('');
//     console.log(text);
//
//     const handleSubmit = () => {
//         const errorMessage = validateInput(text);
//         setError(errorMessage);
//     }
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Введіть Ваше ім'я</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Ваше ім'я"
//                 value={text}
//                 onChangeText={setText}
//             />
//             {/*{error ? <Text style={styles.error}>{error}</Text> : null }*/}
//             {error && <Text style={styles.error}>{error}</Text>}
//             <Button title="Надіслати" onPress={handleSubmit}/>
//             <StatusBar/>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         marginTop: 30,
//         flex: 1,
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     label: {
//         fontSize: 20,
//         marginBottom: 8,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 8,
//         borderRadius: 4,
//     },
//     error: {
//         color: 'red',
//         marginVertical: 8,
//     }
// });

//ex2
// export default function App() {
//     const [selectedLanguage, setSelectedLanguage] = useState('java');
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Виберіть мову програмування</Text>
//             <View style={styles.pickerContainer}>
//                 <Picker
//                     style={styles.picker}
//                     selectedValue={selectedLanguage}
//                     onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
//                 >
//                     <Picker.Item label="Java" value="java"/>
//                     <Picker.Item label="JavaScript" value="js"/>
//                     <Picker.Item label="Python" value="python"/>
//                 </Picker>
//             </View>
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     label: {
//         fontSize: 20,
//         marginBottom: 8,
//     },
//     picker: {
//         height: 50,
//         width: '100%',
//         backgroundColor: '#bd9d9d',
//     },
//     pickerContainer: {
//         borderRadius: 8,
//     }
// });
//ex3
// export default function App() {
//     const [isEnabled, setIsEnabled] = useState(false);
//
//     const handleToggleSwitch = () => {
//         setIsEnabled(prevState => !prevState)
//     }
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Test</Text>
//             <Switch
//                 value={isEnabled}
//                 onValueChange={handleToggleSwitch}
//             />
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     label: {
//         fontSize: 20,
//         marginBottom: 8,
//     },
//     picker: {
//         height: 50,
//         width: '100%',
//         backgroundColor: '#bd9d9d',
//     },
//     pickerContainer: {
//         borderRadius: 8,
//     }
// });

//ex4 Card
// export default function App() {
//     const user = {
//         name: 'Alice Johnson',
//         email: 'alice@example.com',
//         avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg',
//         role: 'Developer'
//     }
//
//     const handleUserPress = () => {
//         alert('User Selected', `You selected ${user.name}`);
//     }
//
//     return (
//         <View style={styles.container}>
//             <UserCard onPress={handleUserPress} user={user}/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f5f5f5',
//     },
// });

//ex5
// export default function App() {
//     const users = [
//         {
//             id: '1',
//             name: 'Alice Johnson',
//             email: 'alice@@example.com',
//             avatar: 'https://i.pinimg.com/236x/f3/f7/dc/f3f7dc580642e84036a3a5e00869f3e3.jpg',
//             role: 'Developer',
//         },
//         {
//             id: '2',
//             name: 'Bob Smith',
//             email: 'bob@@example.com',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWjX5dynW04yySDP5IB4lW5UTRo3G0wPTZQ&s',
//             role: 'Designer',
//         },
//         {
//             id: '3',
//             name: 'Charlie Brown',
//             email: 'charle@@example.com',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqtQ7U-raQJgdE-puECLGSGZGhOi72U_3Og&s',
//             role: 'Manager',
//         },
//     ]
//
//     const handleUserPress = (name) => {
//         Alert.alert('User Selected', `You selected ${name}`);
//     }
//
//     return (
//         <View style={styles.container}>
//             {users.map(user => (
//                 <UserCard
//                     user={user}
//                     key={user.id}
//                     onPress={() => handleUserPress(user.name)}
//                 />
//             ))}
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f5f5f5',
//     },
// });

//ex6
// export default function App() {
//     const users = [
//         {
//             id: '1',
//             name: 'Alice Johnson',
//             email: 'alice@@example.com',
//             avatar: 'https://i.pinimg.com/236x/f3/f7/dc/f3f7dc580642e84036a3a5e00869f3e3.jpg',
//             role: 'Developer',
//         },
//         {
//             id: '2',
//             name: 'Bob Smith',
//             email: 'bob@@example.com',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWjX5dynW04yySDP5IB4lW5UTRo3G0wPTZQ&s',
//             role: 'Designer',
//         },
//         {
//             id: '3',
//             name: 'Charlie Brown',
//             email: 'charle@@example.com',
//             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqtQ7U-raQJgdE-puECLGSGZGhOi72U_3Og&s',
//             role: 'Manager',
//         },
//     ]
//
//     const handleUserPress = (user) => {
//         Alert.alert('User Selected', `You selected ${user.name}`);
//     }
//
//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={users}
//                 renderItem={({item}) => <UserCard user={item} onPress={() => {
//                     handleUserPress(item)
//                 }}/>}
//                 keyExtractor={(item) => item.id}
//             />
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//     },
// });

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
