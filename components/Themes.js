import React from 'react';
import styled from 'styled-components/native';

export const primary = 'rgba(20, 10, 38, 1)';
export const secondary = 'rgba(34, 23, 56, 1)';

const white = '#fff';
const grey = 'rgba(173, 173, 173, 1)';

export const Background = styled.View`
  background-color: ${primary};
  flex: 1;
`;

export const Header = styled.View`
  height: 140px;
  padding-top: 55px;
  padding-left: 17px;
  flex-direction: row;
  background-color: ${secondary};
`;

export const Header2 = styled.View`
  height: 170px;
  padding-top: 55px;
  padding-left: 17px;
  flex-direction: row;
  margin-bottom: 20px;
  background-color: ${secondary};
`;

export const H1 = styled.Text`
  color: ${white};
  font-family: relay;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
  margin-bottom: 5px;
`;

export const H2 = styled.Text`
  color: ${white};
  font-family: relay;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
`;

export const H3 = styled.Text`
  color: ${grey};
  font-size: 14px;
  font-family: relay;
  font-weight: 100;
  text-align: center;
  line-height: 23px;
`;

export const H4 = styled.Text`
  color: ${white};
  font-size: 12px;
  font-family: relay;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
`;

export const H5 = styled.Text`
  color: ${grey};
  font-size: 12px;
  font-family: relay;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  line-height: 23px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  height: 100%;
`;

export const Body = styled.View`
  flex: 1;
  position: relative;
`;

export const ButtonBottom = styled.View`
  position: absolute;
  bottom: -20;
  right: -5;
`;
