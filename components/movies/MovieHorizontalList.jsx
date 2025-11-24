import { useEffect, useRef } from 'react';
import {
  FlatList,
  Platform,
  Text,
  View
} from 'react-native';
import MoviePoster from './MoviePoster';

// interface Props {
//   title?: string;
//   movies: Movie[];
//   className?: string;

//   loadNextPage?: () => void;
// }

const MovieHorizontalList = ({
  title,
  movies,
  loadNextPage,
}) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    // TODO:
    console.log('Cargar siguientes películas');
    loadNextPage && loadNextPage();
  };

  return (
    <View style={{ marginTop: 20 }}>
      {title && <Text style={{ fontSize: 24, fontWeight: 700, paddingInline: 16, marginBottom: 8 }}>{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;
