import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dateFormat} from '../../utils';
import {styles} from './style';

const Profile = () => {
  const now = Date('2021-07-23');
  const width = Dimensions.get('screen').width;
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.common.profile);
  const loading = useSelector(state => state.common.loading);

  useEffect(() => {
    dispatch({type: 'FETCH_DATA_SHARED', payload: {}});
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.bg_color}>
          <View style={styles.pad15}>
            <Text style={styles.bold}>Các bài viết đã chia sẻ</Text>
          </View>

          {/* Card view */}
          {profileData
            ? profileData.map((item, index) => (
                <View style={styles.bg_while} key={index}>
                  {/* Name view */}
                  <View style={styles.flex_pad10}>
                    <View>
                      <Image
                        source={require('../../media/icons/iori_yagami.jpg')}
                        style={styles.avatar}
                      />
                    </View>
                    <View style={styles.padl10}>
                      <Text style={styles.bold}>Kakalot</Text>
                      <Text>23-05-2021</Text>
                    </View>
                  </View>

                  {/* Post view */}
                  <View style={styles.padh10}>
                    <View style={styles.border}>
                      <View>
                        <View style={styles.flex_padv}>
                          <View>
                            <Image
                              source={{uri: item.avatar}}
                              style={styles.avatar}
                            />
                          </View>
                          <View style={styles.padh10}>
                            <Text style={styles.bold}>{item.name}</Text>
                            <Text>{dateFormat(item.time)}</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <Text>{item.content}</Text>
                      </View>

                      <View>
                        <Image
                          source={{uri: item.content_image}}
                          style={{width: width - 30, height: 250}}
                        />
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
                    </View>
                  </View>
                </View>
              ))
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
