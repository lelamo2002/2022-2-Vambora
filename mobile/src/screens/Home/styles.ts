import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #1A1A1A;
  flex: 1;
  padding: 15px;
`;

export const MapContainer = styled.View`
  overflow: hidden;
  border-radius: 10px;
`;

export const TrajectContainer = styled.View`
 background-color : #7E46FF;
 border-radius: 10px;
 margin-top: 36px;
 flex-direction: column;
 padding: 20px;
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
  margin-bottom: 20px;
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
