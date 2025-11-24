import {
  ActivityIndicator,
  ScrollView,
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlideshow from '@/components/movies/MainSlideshow';
import MovieHorizontalList from '@/components/movies/MovieHorizontalList';
import { useMovies } from '@/lib/hooks/useMovies';



const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ paddingTop: safeArea.top, paddingBottom: 60 }}>
        <Text
          style={{ fontSize: 28, fontWeight: 700, paddingInline: 16, marginBottom: 8 }}
        >
          MoviesApp
        </Text>

        {/* Carousel de imágenes */}
        <MainSlideshow
          movies={nowPlayingQuery.data ?? []}
        />

        {/*  Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
        />

        {/*  Top Rated */}
        <MovieHorizontalList
          title="Mejor Calificadas"
          movies={topRatedQuery.data ?? []}
          style={{ marginBottom: 20 }}
        />

        {/*  Próximamente */}
        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data?.pages.flat() ?? []}
          loadNextPage={upcomingQuery.fetchNextPage}
        />

      </View>
    </ScrollView>
  );
};
export default HomeScreen;

// Código para realizar pruebas
// ----------------------------
//
// import { StyleSheet, Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { getMovieCast } from '../lib/data';


// export default function Index() {
//   // nowPlaying()
//   // getMovie(122)
//   getMovieCast(122)

//   return (
//     <SafeAreaView
//       style={styles.index}
//     >
//       <Text style={styles.border}>Edit app/index.tsx to edit this screen.</Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   index: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: 'orange',
//   },
//   border: {
//     borderWidth: 2,
//     borderColor: "red"
//   }
// })