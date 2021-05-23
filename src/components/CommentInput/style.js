import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input_main_view: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  flex1_center: {
    flex: 1,
    justifyContent: 'center',
  },
  flex8_padf10: {
    flex: 8,
    paddingLeft: 10,
  },
  input: {
    borderColor: '#ddd',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderRadius: 50,
    height: 35,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
});
