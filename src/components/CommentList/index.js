import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';

const CommentList = props => {
  const {onGetReplyId} = props;
  const commonStates = useSelector(state => state.common);
  const commentList = commonStates.commentList;
  const my_avatar = "require('../../media/icons/iori_yagami.jpg')";
  const my_avatar_show = require('../../media/icons/iori_yagami.jpg');

  const dispatch = useDispatch();
  const handleLikeSubCommentClick = (child_item, item) => {
    dispatch({
      type: 'TOGGLE_LIKE_SUB_COMMENT_CLICK',
      payload: {child_item: child_item, parent_id: item},
    });
  };

  const onReplyClick = id => {
    onGetReplyId(id);
  };

  const handleLikeClick = comment => {
    dispatch({
      type: 'TOGGLE_LIKE_CLICK',
      payload: comment,
    });
  };

  return (
    <>
      {commentList
        ? commentList.map((item, index) => (
            <View key={index}>
              <View>
                <View style={styles.comment_view}>
                  <View style={styles.flex1}>
                    <Image
                      source={
                        item.avatar == my_avatar
                          ? my_avatar_show
                          : {uri: item.avatar}
                      }
                      style={styles.avatar}
                    />
                  </View>
                  <View style={styles.comment_content}>
                    <Text style={styles.bold}>{item.name}</Text>
                    <Text>{item.comment}</Text>
                  </View>
                </View>

                {/* like - reply */}
                <View style={styles.row_bottom}>
                  <View style={styles.flex1}></View>
                  <View style={styles.comment_action}>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.padhorizon}
                        onPress={() => {
                          handleLikeClick(item);
                        }}>
                        <Text style={{color: item.liked ? '#2078f4' : '#000'}}>
                          Thích
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.padhorizon}
                        onPress={() => {
                          onReplyClick(item.id);
                        }}>
                        <Text>Trả lời</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginRight: 15}}>
                      {item.liked_number ? (
                        <View style={styles.comment_like_number}>
                          <Image
                            source={require('../../media/icons/like-circle.png')}
                            style={styles.liked_image}
                          />
                          <Text>{item.liked_number}</Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>

              {/* sub comment */}
              {item.isShowSubComment
                ? item.sub_comment.map((child_item, index) => (
                    <View key={index}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}></View>
                        <View style={{flexDirection: 'row', flex: 8}}>
                          <View>
                            <Image
                              source={
                                child_item.avatar == my_avatar
                                  ? my_avatar_show
                                  : {uri: child_item.avatar}
                              }
                              style={styles.avatar}
                            />
                          </View>
                          <View style={styles.sub_comment_content}>
                            <Text style={styles.bold}>{child_item.name}</Text>
                            <Text>{child_item.comment}</Text>
                          </View>
                        </View>
                      </View>

                      {/* like - reply */}
                      <View style={styles.row_bottom}>
                        <View style={styles.flex1}></View>
                        <View style={styles.sub_comment_action}>
                          <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                              style={styles.padhorizon}
                              onPress={() => {
                                handleLikeSubCommentClick(child_item, item.id);
                              }}>
                              <Text
                                style={{
                                  color: child_item.liked ? '#2078f4' : '#000',
                                }}>
                                Thích
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{marginRight: 15}}>
                            {child_item.liked_number ? (
                              <View style={styles.comment_like_number}>
                                <Image
                                  source={require('../../media/icons/like-circle.png')}
                                  style={styles.liked_image}
                                />
                                <Text>{child_item.liked_number}</Text>
                              </View>
                            ) : null}
                          </View>
                        </View>
                      </View>
                    </View>
                  ))
                : null}
            </View>
          ))
        : null}
    </>
  );
};

export default CommentList;
