import React, { StatusBar, View, Platform } from "react-native";
import { useRef, useState } from "react";
import {
  Container,
  TrajectContainer,
  Title,
  TrajectText,
  TrajectSubText,
  LocationTexts,
  Traject,
  MapContainer,
  LastMatchsText,
  LastMatchContainer,
  LastMathsContainerText,
  Separator,
  LastRideText,
  RideTypeText,
  TrajectTitle,
} from "./styles";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "./mapStyle.json";
import HomeIcon from "../../assets/home";
import SchoolIcon from "../../assets/school";
import ClockIcon from "../../assets/clock";
import { getBottomSpace } from "react-native-iphone-x-helper";

export function Home() {
  const mapRef = useRef(null);
  const [origin, setOrigin] = useState({
    latitude: -15.98928,
    longitude: -48.04454,
  });

  return (
    <Container>
      <StatusBar backgroundColor="#222" barStyle="light-content" />
      <Title>Estudantes perto de você</Title>
      <MapContainer>
        <MapView
          style={{
            height: 270,
            width: 363,
            borderRadius: 20,
          }}
          ref={mapRef}
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        ></MapView>
      </MapContainer>
      <TrajectContainer>
        <TrajectTitle>Seu trajeto padrão</TrajectTitle>
        <Traject>
          <HomeIcon color="#fafafa" />
          <LocationTexts>
            <TrajectText>Casa</TrajectText>
            <TrajectSubText>Gama</TrajectSubText>
          </LocationTexts>
        </Traject>
        <Traject
          style={{
            marginTop: 20,
          }}
        >
          <SchoolIcon />
          <LocationTexts>
            <TrajectText>Universidade de Brasilia</TrajectText>
            <TrajectSubText>Campus Gama</TrajectSubText>
          </LocationTexts>
        </Traject>
      </TrajectContainer>

      <View
        style={{
          marginBottom: 40 + getBottomSpace(),
        }}
      >
        <LastMatchsText>Suas ultimas caronas</LastMatchsText>

        <LastMatchContainer>
          <ClockIcon />
          <LastMathsContainerText>
            <LastRideText>Casa {"->"} Campus Gama</LastRideText>
            <RideTypeText>Motorista</RideTypeText>
          </LastMathsContainerText>
        </LastMatchContainer>
        <Separator />
        <LastMatchContainer>
          <ClockIcon />
          <LastMathsContainerText>
            <LastRideText>Casa {"->"} Campus Darcy Ribeiro</LastRideText>
            <RideTypeText>Motorista</RideTypeText>
          </LastMathsContainerText>
        </LastMatchContainer>
        <Separator />
        <LastMatchContainer>
          <ClockIcon />
          <LastMathsContainerText>
            <LastRideText>Casa {"->"} Campus Ceilandia</LastRideText>
            <RideTypeText>Motorista</RideTypeText>
          </LastMathsContainerText>
        </LastMatchContainer>
        <Separator />
        <LastMatchContainer>
          <ClockIcon />
          <LastMathsContainerText>
            <LastRideText>Casa {"->"} Campus Planaltina</LastRideText>
            <RideTypeText>Motorista</RideTypeText>
          </LastMathsContainerText>
        </LastMatchContainer>
        <Separator />
      </View>
    </Container>
  );
}
