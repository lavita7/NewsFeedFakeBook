import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg_color: {backgroundColor: '#ccc', flex: 1},
  bg_while: {backgroundColor: '#fff', marginBottom: 10},
  flex_row: {flexDirection: 'row'},
  flex1: {flex: 1},
  avatar: {width: 35, height: 35, borderRadius: 25},
  name_view: {marginLeft: 10, flex: 8},
  bold: {fontWeight: 'bold'},
  flex_row_center: {flexDirection: 'row', alignItems: 'center'},
  mart: {marginTop: 10},
  align_just: {textAlign: 'justify'},
  count_view: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liked_image: {width: 25, height: 25},
  pad15: {padding: 15},
  flex_pad10: {flexDirection: 'row', padding: 10},
  padl10: {paddingLeft: 10},
  padh10: {paddingHorizontal: 10, paddingBottom: 10},
  border: {padding: 5, borderWidth: 1, borderColor: '#ccc'},
  flex_padv: {flexDirection: 'row', paddingVertical: 5},
});
