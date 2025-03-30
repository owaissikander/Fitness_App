import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';


export default function ExcerciseList({ data }) {

const router = useRouter()

  return (
    <View  >

      <FlatList
        data={data}
        numColumns={2}
        key={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: 'space-between'
        }}
        renderItem={
          ({ item, index }) => <ExcerciseCard router={router} index={index} item={item} />}
      />
    </View>
  )
}

const ExcerciseCard = ({ router, index, item }) => {
  return (

    <Animated.View entering={FadeInDown.delay(index * 200).duration(500).springify()}>
      <TouchableOpacity
        onPress={() => router.push({pathname : '/excerciseDetails', params : item})}
        className='flex py-3 space-y-2' >

        <View className='bg-neutral-200 shadow rounded-[25px] '>


          <Image
            source={{ uri: item.gifUrl }}
            contentFit='cover'
            style={{ width: wp(44), height: hp(28), borderRadius: 25 }}
          />
        </View>
        <Text
          className='text-neutral-700 font-semibold ml-1 tracking-wide'
          style={{ fontSize: hp(1.7) }}
        >
          {
            item?.name.length > 20 ? item.name.toUpperCase().slice(0, 20) + '...' : item.name
          }
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}