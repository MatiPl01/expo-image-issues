/* eslint-disable react/react-in-jsx-scope */
import Image from 'react-native-fast-image';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const GIF =
  'https://i.seadn.io/gcs/files/7e0d4def95688981abe18c5db66741ea.gif?w=500&auto=format';
const WEBP =
  'https://i.seadn.io/gae/lFsU7NM_67_Sq7Hg021EY29_xeZILagsp83qTVGgsT4grHueG6rkdDWhpSTTRHU4IBWigd51ILx1prWJJsdJTAPuMLxR0fKenBOHkg?w=500&auto=format';

export default function App() {
  const [gifShown, setGifShown] = useState(false);
  const [webpShown, setWebpShown] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setGifShown(!gifShown)}>
          <Text style={styles.text}>{gifShown ? 'Hide' : 'Show'} GIF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setWebpShown(!webpShown)}>
          <Text style={styles.text}>
            {webpShown ? 'Hide' : 'Show'} animated WebP
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.images}>
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.text}>GIF Placeholder</Text>
          </View>
          {gifShown && (
            <Image
              source={{
                uri: GIF,
              }}
              style={styles.imageStyle}
            />
          )}
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.text}>WebP Placeholder</Text>
          </View>
          {webpShown && (
            <Image
              source={{
                uri: WEBP,
              }}
              style={styles.imageStyle}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#09124f',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  images: {
    padding: 20,
    gap: 20,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#1f4964',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageStyle: {
    flex: 1,
  },
  imagePlaceholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
