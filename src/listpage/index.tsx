import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  Button,
} from 'react-native';
import {ItemDetails, ListDetails, RootStackParamList, UIState} from '../types';
import ProductItem from './components/ProductItem';
import {RootState} from '../store';
import {fetchListDetails} from './actions';
import {LIST} from '../constants';
import {GENERIC_ERROR_MSG, RETRY} from '../stringliterals';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorMessage: {
    marginBottom: 16,
  },
});

interface ProductListProps {
  navigation: NativeStackScreenProps<RootStackParamList, 'list'>;
  fetchListDetails: () => void;
  listDetails: ListDetails;
}

const ProductList = (props: ProductListProps) => {
  const {navigation, fetchListDetails, listDetails} = props;

  const init = () => {
    fetchListDetails();
  };

  useEffect(() => {
    init();
  }, []);

  const onItemPress = (itemDetails: ItemDetails) => {
    navigation.navigate('description', {itemDetails});
  };

  const renderItem = ({item}: {item: ItemDetails}) => (
    <ProductItem itemDetails={item} onItemPress={onItemPress} />
  );

  const renderList = (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => `${item.productName}`}
        data={listDetails.data}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );

  const renderLoading = (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#FF3F6C'} />
    </View>
  );

  const renderError = (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}> {GENERIC_ERROR_MSG}</Text>
      <Button title={RETRY} onPress={init} />
    </View>
  );

  switch (listDetails.uiState) {
    case UIState.LOADING:
      return renderLoading;
    case UIState.FINISHED:
      return renderList;
    case UIState.ERROR:
      return renderError;
    default:
      return null;
  }
};

const mapStateToProps = (state: RootState) => ({
  listDetails: state.list[LIST],
});

const mapDispatchToProps = {
  fetchListDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
