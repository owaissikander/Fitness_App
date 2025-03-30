import { View, Text, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from '../components/ImageSlider.jsx';
import BodyPart from '../components/BodyPart.jsx';


export default function Home() {
    return (
        <SafeAreaView className='flex flex-1 bg-white space-y-10'  >
            <StatusBar style='dark' />
            <View className='flex-row justify-between items-center mt-10 mx-5'>
                <View className='space-y-2'>
                    <Text
                        className='text-neutral-700 font-bold tracking-wider'
                        style={{ fontSize: hp(4.5) }}>
                        Ready to
                    </Text>
                    <Text
                        className='text-neutral-700 font-bold tracking-wider'
                        style={{ fontSize: hp(4.5) }}>
                        Workout
                    </Text>
                </View>
                <View className='flex justify-center items-center space-y-2'>

                    <Image
                        source={require('../assets/images/avatar.png')} // Replace with your image path
                        className='flex bg-neutral-200 border-neutral-300 justify-center rounded-full items-center'
                        style={{ height: hp(5.5), width: wp(10.5) }}
                    />
                    <View
                        style={{ height: hp(5.5), width: wp(10.5) }}
                        className='bg-neutral-200 justify-center m-1 rounded-full items-center'>
                        <Ionicons name='notifications' size={hp(3)} color='gray' />
                    </View>
                </View>
            </View>
            {/* image slider  */}
            <View style={{ flex: 1 }}>
                <ImageSlider />
            </View>
            {/* Body Part  */}
            <View  >
                <BodyPart />
            </View>
        </SafeAreaView>

    );
}