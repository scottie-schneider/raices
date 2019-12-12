import styled from 'styled-components'

const SearchPageStyle = styled.div`
  position: relative;
  min-height: 100vh;
  svg {
    width: 35px;
    height: 35px;
  }
  @media(min-width: 768px) {
    margin-bottom: 0;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    color:  #484848;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  img {
    max-width: 100%;
  }
  /* End Page Styles */
  /* Search Page Style */
  .searchPage {
  height: 100%;
  min-height: 700px;
  background-color: #fff;        
  display: grid;
  grid-template-rows: 150px auto;
  }
`

export default SearchPageStyle;