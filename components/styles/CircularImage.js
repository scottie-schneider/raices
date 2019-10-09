import styled from 'styled-components';

const CircularImage = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  box-shadow: ${props => props.shadow ? `0px 10px 10px 0px ${props.theme.imageBoxShadow}` : "none"};
  object-fit: cover;
  border-radius: 50%;
  ${props => props.round && `
     border-radius: 8px;
     `
  };
  ${props => props.agent && `
     border-top-left-radius: 8px;
     border-top-right-radius: 8px;
     border-bottom-left-radius: 0px;
     border-bottom-right-radius: 0px;
     `
  };
`

export default CircularImage;