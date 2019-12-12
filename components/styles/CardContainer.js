import styled from 'styled-components'

const CardContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  z-index: 0;
  position: relative;
  .loading {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .cards-container {
    grid-template-columns: repeat(auto-fit, minmax(${props => props.cardWidth}, 1fr));
    z-index: 0;
  }
  .card {
    position: relative;
  }  
  .card img {
    display: block;
    width: 100%;    
    border-radius: 5px;
  }
  .card .title {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
  }
  .card .price {
    font-size: .9rem;
  }
  .card .price.new {
    background-color: rgb(0, 119, 126);
    padding: .4rem .4rem .4rem .4rem;
    color: #fff;
    border-radius: 5px;
  } 
  .category {
    text-transform: uppercase;
    font-size: .9rem;
    font-weight: 700;
  }
  .name {
    overflow-wrap: break-word;
  }
  .info {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    left: 0;
    color: #fff;
    text-align: center;  
  }
  .card .infoFull, .infoAgent {
    padding-top: 1rem;
  }
  .info .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }
  .info .price {
    font-size: .8rem;
  }
   /* The Home Image Card */
   .card.home img {
    width: 100%;
    height: 230px;
    border-radius: 5px;
    object-fit: cover;
  }
  /* End Home Image Card */
  /* The Agent Category Card */

  .card.agent img {
    object-fit: cover;
  }
  .cards-container.agent {
    display: grid;  
    grid-gap: 1rem;
    /* grid-template-columns: repeat(auto-fit, minmax(125px, max-content)); */
    grid-template-columns: repeat(auto-fit, 165px);    
    justify-content: center;
  }
  @media (min-width: 768px){
    .cards-container.agent {
      justify-content: flex-start;
    }
  }
  /* End Agent Category Card */
  /** Colors and Categroes **/
  .lodgement {
    color: #274154;
  }
  .concert {
    color: #da595e;
  }
  .class {
    color: #598dda;
  }
  .outdoor-activity {
    color: #940ad4;
  }
  /* The Full Image Card */
  .content h2 {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .container {    
    margin: 0 auto;
    width: 90%;
  }
  section {
    margin-top: 40px;
  }   
  
  .cards-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card.neighborhoods img{
    width: 100%;
    height: 315px;
    border-radius: 5px;
    object-fit: cover;
  }
  
  .card img {
    width: 100%;
  }
  /* End Full Image Card */
  /* The Wide Image Card ie., nearby towns*/
  .card.wide img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
  }
  /* End Wide Image Card */
`
export default CardContainer;