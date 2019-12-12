import styled from 'styled-components'

const MainStyle = styled.main`
  position: relative;
  z-index: 40;
  margin-bottom: 4rem;
  margin-top: ${props => props.search ? '150px' : '2rem'};   
  .main-nav {
    display: none;
  }
  @media (min-width: 768px) {
    .main-nav {
      grid-column: 3 / 4;
      display: grid;
      justify-content: flex-end;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .main-nav a {
      color: #fff;
      text-decoration: none;
      font-size: .8rem;
      padding: 1rem 1rem 2rem 1rem;
      text-align: center;
    }
    .main-nav a:hover {
      border-bottom: 1px solid #fff;
    }
  }  
  section {
    margin-bottom: 2rem;
  }
`
export default MainStyle;