import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  margin-right: 50px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;
export const Name = styled.p`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const Stats = styled.ul`
  display: flex;
  list-style: none;
  align-items: space-between;
  padding-left: 0;
  gap: 20px;
`;
export const LiItem = styled.li`
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  cursor: pointer;
`;
