import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {
  BUY_NOW,
  EASY_RETURNS_TITLE,
  EASY_RETURN_SUBTITLE,
  PRICE,
} from '../stringliterals';
import {RootStackParamList} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  productImage: {
    aspectRatio: 0.75,
    width: '100%',
  },
  detailsContainer: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    paddingVertical: 8,
  },
  brand: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
  },
  divider: {
    height: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(40, 44, 63, 0.1)',
  },
  easyReturnsTitle: {
    fontWeight: 'bold',
  },
  easyReturnsSubtitle: {
    marginTop: 8,
    lineHeight: 24,
  },
  button: {
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3F6C',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

interface DescriptionProps {
  navigation: NativeStackScreenProps<RootStackParamList, 'description'>;
  route: RouteProp<RootStackParamList, 'description'>;
}

const ProductDescription = (props: DescriptionProps) => {
  const {
    route: {
      params: {itemDetails},
    },
  } = props;

  const handleBuyButtonPress = () => {
    Alert.alert('React native bootcamp', 'Added to cart', [{text: 'OK'}]);
  };

  const detailsContainer = (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>
        <Text style={styles.brand}>{`${itemDetails.brand} `}</Text>
        <Text>{itemDetails.productName}</Text>
      </Text>
      <Text style={styles.price}>{PRICE(itemDetails.price)}</Text>
    </View>
  );

  const divider = <View style={styles.divider} />;

  const easyReturnsContainer = (
    <View style={styles.detailsContainer}>
      <Text style={styles.easyReturnsTitle}>{EASY_RETURNS_TITLE}</Text>
      <Text style={styles.easyReturnsSubtitle}>{EASY_RETURN_SUBTITLE}</Text>
    </View>
  );

  const buyButton = (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={handleBuyButtonPress}>
      <Text style={styles.buttonText}>{BUY_NOW}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <Image style={styles.productImage} source={{uri: itemDetails.image}} />
      {detailsContainer}
      {divider}
      {easyReturnsContainer}
      {buyButton}
    </ScrollView>
  );
};

export default ProductDescription;
