import styled from 'styled-components';

export const ProfileBox = styled.div`
  padding: 8px;
  width: 400px;
`;

export const InfoContainer = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 0 auto;
  margin-bottom: ${props => props.theme};
`;

export const InfoBlock = styled.ul`
  display: flex;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin-bottom: ${props => props.theme.space[2]};
`;
