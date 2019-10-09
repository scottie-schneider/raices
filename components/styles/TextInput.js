import styled from 'styled-components';

const TextInput = styled.input`
  border: none;
  border-bottom: 2px solid ${props => !props.filled ? props.theme.grey : "transparent"};
  ${props => props.error && `
     border-bottom: 2px solid ${props.theme.red};
     color: ${props.theme.red}
     `
  }
  ${props => props.disabled && `
     border-bottom: 2px solid ${props.theme.grey};
     color: ${props.theme.grey}
     `
  }
  border-radius: 0px;
  padding: 0;
  width: 341px;
  height: 50px;
  outline: none !important;
  :focus {
    box-shadow: none;
    border-bottom: 2px solid ${props => props.theme.black};
  }
`

export default TextInput;