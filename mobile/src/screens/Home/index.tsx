import React, { StatusBar } from "react-native";
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
} from "./styles";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import mapStyle from "./mapStyle.json";
import HomeIcon from "../../assets/home";
import SchoolIcon from "../../assets/school";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const mapRef = useRef(null);
  const [origin, setOrigin] = useState({
    latitude: -15.98928,
    longitude: -48.04454,
  });

  return (
    <Container>
      <StatusBar backgroundColor="#222" barStyle="light-content" />
      <SafeAreaView />
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
    </Container>
  );
}
