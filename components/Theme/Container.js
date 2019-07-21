import React from 'react';
import styled from 'styled-components';

import { primary, secondary } from './Color';

export const Container = styled.View`
  background-color: ${primary};
  flex: 1;
`;

export const Header = styled.View`
  height: 160px;
  padding-top: 55px;
  padding-left: 17px;
  background-color: ${secondary};
  padding-bottom: 20px;
`;
