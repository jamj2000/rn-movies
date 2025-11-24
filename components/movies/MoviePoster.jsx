import { router } from 'expo-router';
import { Image, Pressable, StyleSheet } from 'react-native';



const MoviePoster = ({ id, poster, smallPoster = false }) => {
  return (
    <Pressable
      // className={`active:opacity-90 px-2`}
      style={{ marginInline: 8 }}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: poster }}
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'lightgray',
          backgroundColor: "lightgray",
          // boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.2)",
          ...styles.poster
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
export default MoviePoster;



const styles = StyleSheet.create({
  poster: {
    // Sombras en iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Sombra en Android
    elevation: 8,
  }
})