import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #262626;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 50px;
  height: 50px;
  padding: 0 12px;
  background: #333;
  border-radius: 10px;
  font-size: 18px;
  margin: 50px 0;
  text-align: center;
  color: #fff;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #fff;
  margin: 20px 0;
  text-align: center;
`;
