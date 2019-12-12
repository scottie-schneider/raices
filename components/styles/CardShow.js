import styled from 'styled-components';

const CardShow = styled.div`
   /* The Show All Divider */
  display: grid;
  width: 100%;
  margin: 1rem auto 1rem auto;
  background-color: #fff;
  border-radius: 5px;        
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid #484848;
  color: #484848;
  width: 90%;
  padding-left: 1rem;
  &:hover {
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    border: none;
    justify-content: flex-start;
    &:hover {
      text-decoration: underline;
    }
  }
  /* End Show All Divider */
`

export default CardShow;