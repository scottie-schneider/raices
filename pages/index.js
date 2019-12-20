import HomePageAirBnB from '../components/HomePageAirBnB';
import Items from '../components/Items';

class Home extends React.Component {
  render() {
    return (
      // <HomePageAirBnB />
      <Items page={parseFloat(this.props.query.page) || 1} />
    )
  }
}

export default Home;