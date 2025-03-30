import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { bodyParts, demoExcercise } from '../constants'
import { fetchExcerciseByBodypart } from '../api/excercisesDB'
import { ScrollView } from 'react-native-virtualized-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ExcerciseList from '../components/ExcerciseList'



export default function Excercises() {
    const router = useRouter()
    const item = useLocalSearchParams()
    // console.log('=------->', item);
    const [excercises, setExcercises] = useState(demoExcercise)

    useEffect(() => {
        if (item) getExcercise(item.name)
    }, [item])



    const getExcercise = async (bodyParts) => {
        let data = await fetchExcerciseByBodypart()
        console.log("data======>", data)
        //setExcercises(data)
    }
    return (

        <ScrollView className='bg-neutral-200' >
            <StatusBar style='dark' />

            <Image
                source={item.image}
                style={{ width: wp(100), height: hp(45) }}
                className='rounded-b-[40px]'
            />
            <TouchableOpacity
                onPress={() => router.back()}
                style={{ height: hp(5), width: wp(10), marginTop: hp(7) }}
                className='bg-rose-500 mx-4 flex justify-center items-center absolute  pr-1 rounded-full '
            >
                <Ionicons name='caret-back-outline' size={hp(4)} color='white' />
            </TouchableOpacity>


            {/* excercise  */}
            <View className='mx-4 space-y-3 mt-4'>
                <Text style={{ fontSize: hp(3) }}
                    className='font-semibold text-neutral-700 underline'
                >
                    {item.name.toUpperCase()} EXCERCISE
                </Text>
                <View>
                    <ExcerciseList data={excercises} />
                </View>
            </View>
        </ScrollView>
    )
}