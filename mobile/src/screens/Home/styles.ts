import styled from "styled-components/native";
import { getStatusBarHeight, isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  background-color: #1A1A1A;
  flex: 1;
  padding: 24px ;
  padding-top: ${isIphoneX() ? getStatusBarHeight(true) + 24 : 24}px;

`;

export const MapContainer = styled.View`
  overflow: hidden;
  border-radius: 10px;
`;

export const TrajectContainer = styled.View`
 background-color : #7E46FF;
 border-radius: 10px;
 margin-top: 32px;
 flex-direction: column;
 padding: 20px;
`;

export const TrajectTitle = styled.Text`
  color : #fafafa;
  font-family: "Inter-700";
  font-size: 22px;
  margin-bottom: 18px;
`;

export const Traject = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const LocationTexts = styled.View`
  margin-left: 18px;
`;

export const Title = styled.Text`
  color: #fafafa;
  font-size: 24px;
  font-family: "Inter-700";
  margin-bottom: 24px;
`;

export const TrajectText = styled.Text`
  font-family: "Inter-600";
  font-size: 20px;
  color : #fafafa;
`;

export const TrajectSubText = styled.Text`
  color: #DBDBDB;
  font-family: "Inter-400";
  font-size : 15px;
`;

export const LastMatchsText = styled.Text`
  color : #fafafa;
  margin: 24px 0px 10px 0px;
  font-family : "Inter-700";
  font-size: 23px;
`;

export const LastMatchContainer = styled.View`
  align-items : center;
  flex-direction: row;
  margin-top : 20px;
  flex : 1;
`;

export const LastMathsContainerText = styled.View`
  flex-direction : column;
  padding-left : 12px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #ABABAB;
  margin-top: 20px;
  opacity: 0.5;
`;

export const LastRideText = styled.Text`
  font-family: "Inter-600";
  font-size: 17px;
  color: #fafafa;
  margin-bottom: 5px;
`;

export const RideTypeText = styled.Text`
  font-family: "Inter-500";
  font-size: 15px;
  color: #fafafa;
  opacity : 0.7;
`;
