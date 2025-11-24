import { PersonInfo } from '@/components/person/PersonInfo';
import { usePerson } from '@/lib/hooks/usePerson';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const PersonScreen = () => {
  const { id } = useLocalSearchParams();

  const { personQuery } = usePerson(+id);

  if (personQuery.isLoading || !personQuery.data) {
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
          left: 30,
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
        <PersonInfo actor={personQuery.data} />
      </ScrollView >
    </>
  );
};
export default PersonScreen;
