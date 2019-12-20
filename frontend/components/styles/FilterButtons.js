import styled from 'styled-components';

const FilterButtons = styled.div`
  /* Scrolling Nav style */
  width: 100%;
  height: 55px;    
  position: fixed;
  z-index: 50;
  top: ${props => props.visible ? '64px' : '-64px'};
  transition: top 0.6s;
  background-color: #fff;
  padding-bottom: 5px;
  padding-left: 1rem;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  .buttonContainer {
    display: flex;
    height: 50px;
    max-width: 300px;
    justify-content: space-between;
    align-items: center;
  }    
  button {
    background-color: transparent;
    border: 1px solid lightgrey;
    border-radius: 30px;
    height: 100%;
    min-width: 80px;
  }
`
export default FilterButtons;