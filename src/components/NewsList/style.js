import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item_main_view: {backgroundColor: '#fff', padding: 10, marginBottom: 10},
  flex_row: {flexDirection: 'row'},
  flex1: {flex: 1},
  avatar: {width: 35, height: 35, borderRadius: 25},
  name_view: {marginLeft: 10, flex: 8},
  bold: {fontWeight: 'bold'},
  flex_row_center: {flexDirection: 'row', alignItems: 'center'},
  mart: {marginTop: 10},
  align_just: {textAlign: 'justify'},
  count_view: {
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liked_image: {width: 25, height: 25},
  action_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  touch: {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 27},
  touch_text: {marginLeft: 5},
});
