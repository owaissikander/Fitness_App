import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
export default function Index() {
    const router = useRouter()
    return (
        <View className='flex-1 justify-end'>
            <StatusBar barStyle="light-content" /> {/* Correct StatusBar usage */}
            <Image
                className='h-full w-full absolute'
                source={require('../assets/images/welcome.png')}
            />
            <LinearGradient
                style={{ width: wp(100), height: hp(70) }}
                className='flex justify-end pb-12 space-y-8'
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                colors={['transparent', '#18181b']}
            >
                <View className='flex justify-end pb-12 space-y-8'>

                    <Animated.View entering={FadeInDown.delay(100).duration(200).springify()} className='flex items-center'>
                        <Text
                            style={{ fontSize: hp(5) }}
                            className='text-white font-bold tracking-wide'>
                            Best <Text className='text-red-600'>WorksOut</Text>
                        </Text>
                        <Text
                            style={{ fontSize: hp(5) }}
                            className='text-white font-bold tracking-wide'>For you</Text>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.duration(200).springify()}>
                        <TouchableOpacity
                            onPress={() => router.push('home')}
                            style={{ height: hp(7), width: wp(80) }}
                            className='bg-rose-500 rounded-full border-[1px] border-neutral-200 justify-center items-center mx-auto' // Added padding and centering
                        >
                            <Text

                                style={{ fontSize: hp(3) }}
                                className='text-white font-bold tracking-widest'> {/* Changed text color to white */}
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </LinearGradient>
        </View>
    );
}