import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  action_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginTop: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  touch: {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 27},
  touch_text: {marginLeft: 5},

  count_view: {
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liked_image: {width: 25, height: 25},
  flex_row_center: {flexDirection: 'row', alignItems: 'center'},

  comment_view: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {width: 35, height: 35, borderRadius: 25},
  input: {
    borderColor: '#ddd',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderRadius: 50,
    height: 35,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});
