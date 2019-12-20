import styled from 'styled-components'

const MiniJumbo = styled.section`
  /* The Mini Jumbo */
  width: 90%;
  margin: 0 auto;
  h2 {
    margin: 0;
  }
  .imageOverlay {
    position: relative;
    z-index: 1;
    text-align: center;
    height: 300px;
  }
  .imageOverlay .text {
    position: absolute;
    top: 50%;    
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;    
  }
  .imageOverlay .text p {
    background-color: #fff;
    color: black;
    padding: 1rem 2rem;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  .image .span,
  .image .button {
    position: absolute;
    z-index: 2;
    top: 10px;
  }
  .image .button {
    top: 30px;
    margin: 0 auto;
  }
  /* End Mini Jumbo */
`

export default MiniJumbo;