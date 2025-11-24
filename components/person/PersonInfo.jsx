import { Image, Text, View } from 'react-native';


export const PersonInfo = ({ actor }) => {

    function formatFecha(fecha) {
        return new Date(fecha).toLocaleString('es-ES', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return (
        <View style={{ margin: 30 }}>
            <Image
                source={{ uri: actor.avatar }}
                style={{ width: 300, height: 450, borderRadius: 23, shadowColor: 'gray', shadowOffset: 5, shadowRadius: 5 }}
                resizeMode="cover"
            />

            <View style={{ gap: 10 }}>
                <Text
                    numberOfLines={2}
                    adjustsFontSizeToFit
                    style={{ fontWeight: 700, fontSize: 24 }}
                >
                    {actor.name}
                </Text>
                <View>
                    {actor.bornIn && <Text style={{ fontSize: 14 }}>Lugar de nacimiento: {actor.bornIn}</Text>}
                    {actor.birthday && <Text style={{ fontSize: 14 }}>Nacimiento: {formatFecha(actor.birthday)}</Text>}
                    {actor.deathday && <Text style={{ fontSize: 14 }}>Fallecimiento: {formatFecha(actor.deathday)}</Text>}
                </View>

                <Text style={{ color: 'dimgray', fontSize: 16 }}>{actor.biography}</Text>
            </View>
        </View>
    );
};
