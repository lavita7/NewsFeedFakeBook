import React, {useEffect, useRef, useState} from 'react';
import {Image, Keyboard, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from './style';

const CommentInput = props => {
  const {postId, commentID, onSetCommentId} = props;
  const textRef = useRef();
  const dispatch = useDispatch();

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  //   const _keyboardDidShow = () => setKeyboardStatus('Keyboard Shown');
  const _keyboardDidHide = () => {
    onSetCommentId(commentID);
    // setKeyboardStatus('Keyboard Hidden');
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow');
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow');
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const _onEndEditing = event => {
    let commentValue = event.nativeEvent.text;
    textRef.current.clear();
    if (commentID) {
      dispatch({
        type: 'NEW_REPLY_COMMENT',
        payload: {value: commentValue, cid: commentID},
      });
    } else {
      dispatch({
        type: 'NEW_COMMENT',
        payload: commentValue,
      });
    }
  };

  if (commentID) {
    textRef.current.focus();
  }

  return (
    <View style={styles.input_main_view}>
      <View style={styles.flex1_center}>
        <Image
          source={require('../../media/icons/iori_yagami.jpg')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.flex8_padf10}>
        <TextInput
          placeholder={'Viết bình luận...'}
          ref={textRef}
          style={styles.input}
          onSubmitEditing={event => _onEndEditing(event)}
        />
      </View>
    </View>
  );
};
export default CommentInput;
