import {
  Image,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


const MovieHeader = ({ backdrop, originalTitle, title }) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      {/* Gradiente */}
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: 'absolute',
          zIndex: 1,
          width: '100%',
        }}
      />

      {/* Backdrop */}
      <View
        style={{ height: screenHeight * 0.7, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.2)", borderBottomLeftRadius: 25, borderBottomRightRadius: 25, overflow: 'hidden' }}
      >
        <Image
          source={{ uri: backdrop }}
          resizeMode="cover"
          style={{ flex: 1 }}
        />
      </View>

      {/* Título */}
      <View style={{ paddingInline: 20, marginTop: 20 }}>
        <Text>{originalTitle}</Text>
        <Text style={{ fontWeight: 600, fontSize: 24 }}>{title}</Text>
      </View>
    </>
  )
}

export default MovieHeader;
