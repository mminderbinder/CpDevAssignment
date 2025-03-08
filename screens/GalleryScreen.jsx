import React from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {ImageGallery} from "../components/ImageGallery";
import {LogoHeadline} from "../components/LogoHeadline";

export default function GalleryScreen({}) {
    return (
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <LogoHeadline
                headline={"Image Gallery"}
                subHeading={"Cuisine"}
            />
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}>
                <ImageGallery/>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        flex: 1,
        alignItems: 'center',
    },
    bottomSpacer: {
        height: Platform.OS === 'ios' ? 60 : 40,
    }
});
