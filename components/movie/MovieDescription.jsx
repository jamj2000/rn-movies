import { Text, View } from 'react-native';


const MovieDescription = ({ movie }) => {
  return (
    <View style={{ marginInline: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>

      <Text style={{ marginTop: 20, fontWeight: 700, fontSize: 24 }}>Historia</Text>
      <Text>{movie.description}</Text>

      <Text style={{ marginTop: 20, fontWeight: 700, fontSize: 24 }}>Presupuesto</Text>
      <Text style={{ fontWeight: 700, fontSize: 16, color: 'gray' }}>
        {/* {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movie.budget)} */}
        {Number(movie.budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </Text>
    </View>
  );
};
export default MovieDescription;
