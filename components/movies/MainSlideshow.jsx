import { useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import MoviePoster from './MoviePoster';


const MainSlideshow = ({ movies }) => {
  const ref = useRef(null);
  const width = useWindowDimensions().width;

  return (
    <View style={{ height: 300, width: '100%' }}>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};
export default MainSlideshow;
