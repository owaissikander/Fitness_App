import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function BodyPart() {


  const router = useRouter()
  return (
    <View className='mx-4 mt-56'>
      <Text style={{ fontSize: hp(3) }}
        className='font-semibold text-neutral-800 underline' >Excercise</Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        key={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}

        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={
          ({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
      />
    </View>
  )
}


const BodyPartCard = ({ item, index, router }) => {
  return (
    <Animated.View entering={FadeInDown.delay(index * 400).duration(500).springify()} className='mb-30' >
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/excercises', params: item })}
        style={{ width: wp(44), height: hp(32) }}
        className='flex  justify-end p-2 mb-2'
      >
        <Image
          source={item.image}
          resizeMode='cover'
          style={{ width: wp(44), height: hp(32) }}
          className='rounded-[35px] absolute  '
        />
        {/* <LinearGradient
          colors={['transparen', 'rgba(0,0,0,0,9)']}
          style={{ width: wp(44), height: hp(10) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className='position-absolute bottom-0   rounded-b-[35px]'

        /> */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          // Fixed typo in "transparent" and opacity value
          style={{
            width: wp(44),
            height: hp(10),
            position: 'absolute',  // Replaced Tailwind class with React Native style
            bottom: 0,
            borderBottomLeftRadius: 35,  // Replaced rounded-b-[35px]
            borderBottomRightRadius: 35
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />


        <Text
          style={{ fontSize: hp(2.3) }}
          className='text-white font-semibold text-center ms-4 tracking-wide'>
          {item?.name}
        </Text>

      </TouchableOpacity>
    </Animated.View>
  )
}