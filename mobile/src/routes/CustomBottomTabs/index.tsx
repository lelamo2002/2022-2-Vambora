import React from "react-native";

import { Container, Tabs } from "./styles";
import { TextGlobal } from "../../components/Global";

import Profile from "../../assets/profile";
import Car from "../../assets/car";
import Home from "../../assets/home";

interface ITab {
  name: string;
  icon: (props) => JSX.Element;
}

export function CustomBottomTabs({ navigation }) {
  const screens: ITab[] = [
    {
      name: "Inicio",
      icon: Home,
    },
    {
      name: "Caronas",
      icon: Car,
    },
    {
      name: "Perfil",
      icon: Profile,
    },
  ];

  return (
    <Container>
      {screens.map((screen, index) => {
        const Icon = screen.icon;
        return (
          <Tabs key={index}>
            <Icon />
            <TextGlobal color="#ABABAB" weight="700">
              {screen.name}
            </TextGlobal>
          </Tabs>
        );
      })}
    </Container>
  );
}
