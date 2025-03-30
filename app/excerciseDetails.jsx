import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';





export default function ExcerciseDetails() {
    const item = useLocalSearchParams()
    console.log('=-=-=-=-=-=-->', item);
    const router = useRouter()
    return (
        <View className='flex  flex-1 bg-neutral-200'>
            <View className='shadow-md mt-12 bg-neutral-200 rounded-b-[40px]'>
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit='cover'
                    style={{ width: wp(100), height: hp(50), borderRadius: 40 }}
                    className='rounded-b-[40px]'
                />
            </View>
            <TouchableOpacity
                onPress={() => router.back()}
                className='mx-2 absolute rounded-full  mt-16 right-2' >
                <Anticons name='closecircle' size={hp(4.5)} color='#f43f5e' />
            </TouchableOpacity>
            {/* details */}

            <ScrollView className='mx-4 space-y-2 mt-3' showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
                <Animated.Text entering={FadeInDown.duration(400).delay(100)} style={{ fontSize: hp(3.5) }}
                    className='font-semibold text-neutral-800 tracking-wide'
                >
                    {item.name.slice(0, 18).toUpperCase()}
                </Animated.Text>

                <Animated.Text entering={FadeInDown.duration(400).delay(200)} style={{ fontSize: hp(2) }}
                    className=' text-neutral-800 tracking-wide'
                >Equipment <Text className='font-bold text-neutral-800'>{item?.equipment}</Text>

                </Animated.Text>


                <Animated.Text entering={FadeInDown.duration(400).delay(300)} style={{ fontSize: hp(2) }}
                    className=' text-neutral-800 tracking-wide'
                >Secondary Muscles <Text className='font-bold text-neutral-800'>{item?.secondaryMuscles}</Text>

                </Animated.Text>
                <Animated.Text entering={FadeInDown.duration(400).delay(400)} style={{ fontSize: hp(2) }}
                    className=' text-neutral-800 tracking-wide'
                >Target <Text className='font-bold text-neutral-800'>{item?.target}</Text>

                </Animated.Text>

                <Animated.Text entering={FadeInDown.duration(400).delay(500)} style={{ fontSize: hp(3) }}
                    className='font-semibold text-neutral-800 underline tracking-wide'
                >
                    INSTRUCTIONS
                </Animated.Text>
                {item.instructions.split(',').map((instruction, index) => {
                    return (
                        <Animated.Text
                            entering={FadeInDown.duration(400).delay(600)}
                            key={instruction}
                            style={{ fontSize: hp(2) }}

                            className='text-neutral-800'
                        >
                            {instruction}
                        </Animated.Text>
                    )
                })}
            </ScrollView>
        </View>
    )
}