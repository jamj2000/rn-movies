import MovieCast from '@/components/movie/MovieCasting';
import MovieDescription from '@/components/movie/MovieDescription';
import MovieHeader from '@/components/movie/MovieHeader';
import { useMovie } from '@/lib/hooks/useMovie';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 16 }}>Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <>
      {/* Botón de regreso */}
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            style={{ borderRadius: 99, padding: 10, backgroundColor: 'rgba(0,0,0,0.2)' }}
          />
        </Pressable>
      </View>

      <ScrollView>
        <MovieHeader
          originalTitle={movieQuery.data.originalTitle}
          backdrop={movieQuery.data.backdrop}
          title={movieQuery.data.title}
        />

        <MovieDescription movie={movieQuery.data} />

        <MovieCast casting={castQuery.data ?? []} />
      </ScrollView >
    </>
  );
};
export default MovieScreen;
