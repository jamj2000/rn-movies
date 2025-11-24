import { ActorCard } from '@/components/movie/ActorCard';
import { Platform, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const MovieCasting = ({ casting }) => {
  return (
    <View style={{ marginTop: 20, marginBottom: 80 }}>
      <Text style={{ fontWeight: 700, fontSize: 24, paddingInline: 20 }}>Actores</Text>

      <FlatList
        data={casting}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
export default MovieCasting;
