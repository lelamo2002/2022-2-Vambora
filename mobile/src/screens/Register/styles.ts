import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #262626;
  justify-content: center;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})`
`;

export const Inputs = styled.View`
  margin: 30px 0;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin: 0 0 5px 5px;
  color: #fafafa;
  font-family: "Inter-500"
`;

export const InputText = styled.TextInput`
  padding: 10px;
  border-radius: 8px;
  background: #333;
  margin-bottom: 20px;
  color: #fff;
`;

export const NoRegisterText = styled.Text`
  margin-left: 5px;
  font-weight: 500;
  font-size: 16px;
  color : #fafafa;
`;

export const LinkText = styled.Text`
  color : #8257E5;
  font-size: 16px;
  font-family: "Inter-700"
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: absolute;
`;
