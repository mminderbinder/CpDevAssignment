import React from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LogoHeadline} from '../components/LogoHeadline';
import {GroupMembersList} from '../components/GroupMembersList';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <LogoHeadline headline="Home"/>
            <GroupMembersList/>
            <View style={styles.bottomSpacer}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    bottomSpacer: {
        height: Platform.OS === 'ios' ? 70 : 40,
    }
});