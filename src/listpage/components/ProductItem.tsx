import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {ItemDetails} from '../../types';
import {PRICE} from '../../stringliterals';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2,
    height: 350,
    borderWidth: 0.5,
    borderColor: 'rgba(33,33,33,0.30)',
  },
  image: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  brand: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 10,
    marginTop: 4,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

interface ItemProps {
  itemDetails: ItemDetails;
  onItemPress: (itemDetails: ItemDetails) => void;
}

const ProductItem = (props: ItemProps) => {
  const {itemDetails, onItemPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={() => onItemPress(itemDetails)}>
      <Image source={{uri: itemDetails.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.brand}>{itemDetails.brand}</Text>
        <Text style={styles.productName}>{itemDetails.productName}</Text>
        <Text style={styles.price}>{PRICE(itemDetails.price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
