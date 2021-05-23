import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  comment_view: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 0,
  },
  avatar: {width: 35, height: 35, borderRadius: 25},
  liked_image: {width: 25, height: 25},

  comment_content: {
    flex: 8,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingTop: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  sub_comment_content: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingTop: 5,
    paddingHorizontal: 5,
    marginLeft: 10,
    borderRadius: 10,
    width: '85%',
  },

  flex1: {
    flex: 1,
  },
  row_bottom: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  comment_action: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sub_comment_action: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  padhorizon: {paddingHorizontal: 15},
  comment_like_number: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {fontWeight: 'bold'},
});
