import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NewsCard from '../../components/NewsList';
import {styles} from './style';

const Home = ({navigation}) => {
  const isLoading = useSelector(state => state.common.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'FETCH_NEWSFEED', payload: {}});
  }, []);

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.main_bg}>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <NewsCard navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
