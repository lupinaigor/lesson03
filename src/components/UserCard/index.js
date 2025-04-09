import {Image, Text, TouchableOpacity, View,StyleSheet} from "react-native";

const UserCard = ({user, onPress}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.avatar} source={{uri: user.avatar}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.role}>{user.role}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        elevation: 3,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    role: {
        fontSize: 12,
        color: '#888'
    },
    deleteButton: {
        alignSelf: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#ff4d4d',
        borderRadius: 8,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
})

export default UserCard;
