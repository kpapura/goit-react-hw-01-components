import styled from '@emotion/styled';

export const StatusSpan = styled.span`
  display: flex;
  padding: 5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-top: 60px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const LiItem = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  padding: 30px;
  border-radius: 30px;
  flex-direction: row;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const Avatar = styled.img`
  margin-left: 30px;
  margin-right: 30px;
`;
export const Name = styled.p`
  &:hover {
    text-decoration: underline;
  }
`;
