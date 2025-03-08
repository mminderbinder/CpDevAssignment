import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export function GroupMembersList() {
    const members = [
        {id: '1', name: 'Deep Limbachiya', studentNumber: '200626971'},
        {id: '2', name: 'Zinkal Navadiya', studentNumber: '200631095'},
        {id: '3', name: 'Shawn Perron', studentNumber: '200604248'},
        {id: '4', name: 'Mayank Singh', studentNumber: '200577750'},
    ];
    const renderItem = ({item}) => (
        <View style={styles.memberItem}>
            <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberStudentNumber}>{item.studentNumber}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Group Members</Text>
            <FlatList
                data={members}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '70%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 40,
        elevation: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00796b',
        marginBottom: 15,
    },
    list: {
        width: '100%',
    },
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    memberInfo: {
        flex: 1,
    },
    memberName: {
        fontSize: 16,
        fontWeight: '500',
    },
    memberStudentNumber: {
        fontSize: 14,
        color: '#757575',
        marginTop: 2,
    },
});