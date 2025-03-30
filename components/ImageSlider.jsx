import { View, Text,Dimensions, Image } from 'react-native';
import React, { useRef } from 'react';
import { sliderImage } from '../constants/index';
import Carousel, {
  ICarouselInstance,
  Pagination,
  ParallaxImage
} from "react-native-reanimated-carousel";
import { useSharedValue } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Define ItemCard before ImageSlider
// const ItemCard = () => {
//   return (
//     <View>
//       <Text>ItemCard</Text>
//     </View>
//   );
// };

const data = [...sliderImage];
const width = Dimensions.get("window").width;
export default function ImageSlider() {

  const ref = useRef(null);
  const progress = useSharedValue(0);
  
  const onPressPagination = (index, item) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        width={width}
        loop={true}
        pagingEnabled={true}
				snapEnabled={true}
        height={width / 2}
        data={data}
        autoPlay={true}
        autoPlayInterval={4000}
        onProgressChange={progress}
        renderItem={({  index,item },parallaxProps) => (
          <View style={{
            flex: 1,
            
            justifyContent: 'center',
            alignItems: 'center', // Ensures image stays centered
            marginHorizontal: 10, // Left/right margins
            marginVertical: 10,   // Top/bottom margins
                // Keeps borderRadius effect
          }}>
            <Image 
           
              source={item.source}
              style={{
                width: wp(100) - 70, height: hp(25),
                borderRadius: 50,
                width: '100%',    // Takes full width of container
                  // Takes full height of container
                resizeMode: 'contain', // Ensures full image visibility
              }}
              {...parallaxProps}
            />
          </View>
        )}
      />
 
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 15 }}
        onPress={onPressPagination}
      />
    </View>
  );
}
