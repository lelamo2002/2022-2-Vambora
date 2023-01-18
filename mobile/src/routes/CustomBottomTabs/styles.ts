import styled from "styled-components/native";
import { getBottomSpace, getStatusBarHeight, isIphoneX } from "react-native-iphone-x-helper";

export const Container = styled.View`
  display : flex;
  background-color : #262626;
  flex-direction : row;
  justify-content : space-evenly;
  align-items: center;
  padding: 10px 0px;
  padding-bottom: ${isIphoneX() ? getBottomSpace() - 5 : 10}px;

`;

export const Tabs = styled.TouchableOpacity`
  background-color: #262626;
  align-items: center;
`;



