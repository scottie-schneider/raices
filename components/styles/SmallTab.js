import styled from 'styled-components';

const SmallTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 32px;
  border: 1px solid ${props => props.theme.grey};
  p { 
    text-align: center;
    margin: auto;
  }
  ${props => props.left && `
     border-top-left-radius: 4px;
     border-bottom-left-radius: 4px;     
     `
  };
  ${props => props.right && `
     border-top-right-radius: 4px;
     border-bottom-right-radius: 4px;
     `
  };
`

export default SmallTab;