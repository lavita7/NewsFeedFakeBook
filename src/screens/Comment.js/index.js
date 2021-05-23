import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import CommentInput from '../../components/CommentInput';
import CommentList from '../../components/CommentList';
import {styles} from './style';

const Comment = ({navigation, route}) => {
  let {comment} = route.params;
  const newsFeed = useSelector(state => state.common.newsFeed);
  const device_width = Dimensions.get('screen').width;
  const dispatch = useDispatch();

  const findPostById = newsFeed.find(x => x.id === comment.id);
  const postID = findPostById.id;
  const [commentID, setCommentID] = useState();

  useEffect(() => {
    dispatch({
      type: 'GET_COMMENT',
      payload: comment.id,
    });
  }, []);

  const handleLikeClick = post => {
    dispatch({type: 'TOGGLE_LIKE_CLICK', payload: post});
  };

  const handleGetReplyId = replyId => {
    setCommentID(replyId);
  };

  const handleSetCommentId = () => {
    setCommentID(null);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{padding: 10}}>
          <View style={{paddingVertical: 10}}>
            <Text>{comment.content}</Text>
          </View>
          {comment.content_image_show ? (
            <Image
              source={{uri: comment.content_image}}
              style={{width: device_width - 20, height: 250, paddingBottom: 10}}
            />
          ) : null}
        </View>
        <View style={styles.action_view}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              handleLikeClick(findPostById);
            }}>
            <Icon
              name={findPostById.liked ? 'like1' : 'like2'}
              size={20}
              color={findPostById.liked ? '#2078f4' : '#000'}
            />
            <Text style={styles.touch_text}>Thích</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Icon name="message1" size={20} color="#000" />
            <Text style={styles.touch_text}>Bình luận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Icon name="sharealt" size={20} color="#000" />
            <Text style={styles.touch_text}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.count_view}>
          <View style={styles.flex_row_center}>
            <Image
              style={styles.liked_image}
              source={require('../../media/icons/like-circle.png')}
            />
            <Text>{findPostById.liked_number}</Text>
          </View>
          <View>
            <Text>{comment.shared} lượt chia sẻ</Text>
          </View>
        </View>

        <CommentList postId={comment.id} onGetReplyId={handleGetReplyId} />
      </ScrollView>

      <CommentInput
        postId={postID}
        commentID={commentID}
        onSetCommentId={handleSetCommentId}
      />
    </SafeAreaView>
  );
};
export default Comment;
