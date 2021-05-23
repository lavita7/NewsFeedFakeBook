import React from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {dateFormat} from '../../utils';
import {styles} from './style';

const NewsCard = props => {
  const {navigation} = props;
  const device_width = Dimensions.get('screen').width;
  const newsFeed = useSelector(state => state.common.newsFeed);
  const dispatch = useDispatch();

  const handleLikeClick = id => {
    const getPostById = newsFeed.find(x => x.id === id);
    dispatch({type: 'TOGGLE_LIKE_CLICK', payload: getPostById});
  };

  const dispatchSharePost = post => {
    dispatch({type: 'SHARE_POST_TO_PROFILE', payload: post});
    Alert.alert('Chia sẻ bài viết thành công', null, [{text: 'OK'}]);
  };

  const handleShareClick = item => {
    Alert.alert('Thông báo', 'Chia sẻ bài viết về Profile', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatchSharePost(item);
        },
      },
    ]);
  };

  const _renderItem = ({item}) => (
    <View style={styles.item_main_view}>
      <View style={styles.flex_row}>
        <View style={styles.flex1}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
        </View>
        <View style={styles.name_view}>
          <View>
            <Text style={styles.bold}>{item.name}</Text>
          </View>
          <View style={styles.flex_row_center}>
            <Text>{dateFormat(item.time)} - </Text>
            <Icon name="earth" size={11} color="#900" />
          </View>
        </View>
      </View>
      <View style={styles.mart}>
        <Text style={styles.align_just}>{item.content}</Text>
        {item.content_image_show ? (
          <Image
            source={{uri: item.content_image}}
            style={{width: device_width - 20, height: 250, marginVertical: 10}}
          />
        ) : null}
      </View>
      <View style={styles.count_view}>
        <View style={styles.flex_row_center}>
          <Image
            style={styles.liked_image}
            source={require('../../media/icons/like-circle.png')}
          />
          <Text>{item.liked_number}</Text>
        </View>
        <View>
          <Text>{item.comment_number} bình luận</Text>
        </View>
        <View>
          <Text>{item.shared} lượt chia sẻ</Text>
        </View>
      </View>
      <View style={styles.action_view}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            handleLikeClick(item.id);
          }}>
          <Icon
            name={item.liked ? 'like1' : 'like2'}
            size={20}
            color={item.liked ? '#2078f4' : '#000'}
          />
          <Text style={styles.touch_text}>Thích</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            navigation.navigate('Comment', {comment: item});
          }}>
          <Icon name="message1" size={20} color="#000" />
          <Text style={styles.touch_text}>Bình luận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            handleShareClick(item);
          }}>
          <Icon name="sharealt" size={20} color="#000" />
          <Text style={styles.touch_text}>Chia sẻ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={newsFeed}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default NewsCard;
