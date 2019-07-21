import React from 'react';
import styled from 'styled-components';

import { white, grey, red, green, blue } from './Color';

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

export const JAC = styled.Text`
  font-size: 13px;
  font-family: relay;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
`;

export const TRC = styled.Text`
  padding-right: 10px;
`;

export const TCR = styled.Text`
  margin-right: 5px;
  font-weight: bold;
  color: ${red};
`;

export const TCG = styled.Text`
  margin-right: 5px;
  font-weight: bold;
  color: ${green};
`;

export const TCB = styled.Text`
  font-weight: bold;
  color: ${blue};
`;
