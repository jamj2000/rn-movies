import { router } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';


export const ActorCard = ({ actor }) => {
  return (
    <View style={{ paddingBottom: 30, marginInline: 10, width: 90 }}>
      <Pressable
        // className={`active:opacity-90 px-2`}
        style={{ marginInline: 8 }}
        onPress={() => router.push(`/person/${actor.id}`)}
      >
        <Image
          source={{ uri: actor.avatar }}
          style={{ width: 100, height: 150, borderRadius: 20, shadowColor: 'gray', shadowOffset: 5, shadowRadius: 5 }}
          resizeMode="cover"
        />
      </Pressable>

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={{ fontWeight: 700, fontSize: 14 }}
        >
          {actor.name}
        </Text>
        <Text style={{ color: 'gray', fontSize: 12 }}>{actor.character}</Text>
      </View>
    </View>
  );
};
