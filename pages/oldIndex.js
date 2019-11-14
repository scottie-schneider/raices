import Link from 'next/link';
import absoluteUrl from 'next-absolute-url'
import styled from 'styled-components';
import {Badge} from 'reactstrap';
import HomeVariation1 from '../components/HomeVariation1';
import Items from '../components/Items';

// bottom sheet for house
import HouseSheet from '../components/HouseSheet';

import AgentActiveListings from '../components/AgentActiveListings'
// waypoint
import { Waypoint } from 'react-waypoint';
// Moment, for time operations 
const moment = require('moment');

const AppBackground = styled.div`
  /* Overflow hidden prevents collapsing margins, which causes an infurating error where the background and entire div is pushed down.*/
  overflow: hidden;
  background-color: #fff;
`

const ScrollableWrapper = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar { width: 0 !important };
  WebkitOverflowScrolling: 'touch';
  display: flex;
  flex-direction: row;
`;

const Swipeable = styled(Badge)`
  margin: 10px;
  padding: 15;
  min-height: 100;
  display: inline-block;
`
const MonthElement = styled(Waypoint)`
  display: inline-block;
`

const SearchBar = props => (
  <div>Search bar</div>
);
class CurrentMonthComponent extends React.Component {

  render() {
    const tomorrow = moment().add(1, 'd').format('ddd').toUpperCase();
    const currentMonthDates = [];
    const nextMonthDates = [];
    // find current date in moment
    const day = moment().format('D');
    // find total dates in month
    const daysInMonth = moment().daysInMonth();
    // find total dates next mont
    const daysNextMonth = moment().add(1, 'M').daysInMonth();
    // find current month 
    const thisMonth = moment().format('MMM');
    // find next month
    const nextMonth = moment().add(1, 'M').format('MMM');

    for(let x=day; x<=daysInMonth; x++){
      currentMonthDates.push(moment().date(x).format('ddd D').toUpperCase())
    }
    for(let x=1; x<=daysNextMonth; x++){
      nextMonthDates.push(moment().add(1, 'M').date(x).format('ddd D').toUpperCase())
    }
    return (
      <div ref={this.props.innerRef}>
        {currentMonthDates.map((date) => (
          <Swipeable
            color="primary"
            pill
          >
            {date}
          </Swipeable>
        ))}   
        end
      </div>     
    )
  }
}
const CurrentMonthWithRef = React.forwardRef((props, ref) => {
  return <CurrentMonthComponent innerRef={ref} {...props} />
})
class NextMonthComponent extends React.Component {
  render() {
    const tomorrow = moment().add(1, 'd').format('ddd').toUpperCase();
    const currentMonthDates = [];
    const nextMonthDates = [];
    // find current date in moment
    const day = moment().format('D');
    // find total dates in month
    const daysInMonth = moment().daysInMonth();
    // find total dates next mont
    const daysNextMonth = moment().add(1, 'M').daysInMonth();
    // find current month 
    const thisMonth = moment().format('MMM');
    // find next month
    const nextMonth = moment().add(1, 'M').format('MMM');

    for(let x=day; x<=daysInMonth; x++){
      currentMonthDates.push(moment().date(x).format('ddd D').toUpperCase())
    }
    for(let x=1; x<=daysNextMonth; x++){
      nextMonthDates.push(moment().add(1, 'M').date(x).format('ddd D').toUpperCase())
    }
    return (
      <div>
        {nextMonthDates.map((date) => (
          <Swipeable
            color="primary"
            pill
          >
            {date}
          </Swipeable>
        ))}   
      </div>     
    )
  }
}
const NextMonthWithRef = React.forwardRef((props, ref) => {
  return <NextMonthComponent innerRef={ref} {...props} />
})
class Home extends React.Component {
  static async getInitialProps({ req, query }) {
    const { protocol, host } = absoluteUrl(req)
    const url = `${host}`
    if(url === 'scottieschneider.com' || url === 'www.scottieschneider.com'){
      return {
        url,
        tagline: `Scottie's personal site.`,
      }
    } else if (url === 'sailcoderepeat.com' || url === 'www.sailcoderepeat.com'){
      return {
        url,
        tagline: `Always sailing. Or coding`
      }
    } else if (url === 'hirescottieschneider.com' || url === 'www.hirescottieschneider.com'){
      return {
        url,
        tagline: `Please hire Scottie :)`
      }
    } else {
      return {
        url,
        tagline: `localhost :)`
      }
    }
  }
  state = {
    month: moment().format('MMMM'),
    open: false,
  }
  openBottomSheet = (open) => {
		this.setState({ open });
	};
  render() {
    return (
      <div className="wrapper">
        <AgentActiveListings />
        <Items/>
         {/* swipeable sheet goes here for house */}
        <HouseSheet 
          open={this.state.open}
          openBottomSheet={this.openBottomSheet}
        />
        <AppBackground>
          {/* <Header /> */}
            <HomeVariation1 
              openBottomSheet={this.openBottomSheet}
            />                    
            <div>
            <p>Test swipeable elements</p>
            Select Date
            {this.state.month}
            <ScrollableWrapper
              onChangeIndex={(index, indexLatest, meta) => {
                this.setState({index})
              }}
            >
              <MonthElement>
                <Waypoint
                  horizontal={true}
                  onEnter={() => {
                    this.setState({ month: moment().format('MMMM')})
                  }}
                  onLeave={() => {
                    this.setState({ month: moment().add(1, 'M').format('MMMM')})
                  }}
                >
                  <CurrentMonthWithRef/>
                </Waypoint>  
              </MonthElement>
              <MonthElement>            
                <Waypoint
                  horizontal={true}
                  onEnter={() => console.log('in october yay')}
                  onLeave={() => console.log('good bye, next month month')}
                >
                  <NextMonthWithRef/>
                </Waypoint>  
              </MonthElement>         
              </ScrollableWrapper>
              <p>
                View our{' '}
                <Link href="/product/espresso123">
                  <a>espresso product</a>
                </Link>
                !
              </p>
              <p>{this.props.tagline}</p>
              <p>{this.props.url}</p>        
            </div>
            <p>Steps to test the functionality:</p>            
              <ol>
                <li>Click login and enter your GitHub username.</li>
                <li>
                  Click home and click profile again, notice how your session is being
                  used through a token stored in a cookie.
                </li>
                <li>
                  Click logout and try to go to profile again. You'll get redirected to
                  the `/login` route.
                </li>
              </ol>      
        </AppBackground>
      </div>
    )
  }
}
// below is get initial props for functional components, leaving here as an example.
// Home.getInitialProps = async ({ req, query }) => {
//   const { protocol, host } = absoluteUrl(req)
//   const url = `${host}`
//   if(url === 'scottieschneider.com' || url === 'www.scottieschneider.com'){
//     return {
//       url,
//       tagline: `Scottie's personal site.`,
//     }
//   } else if (url === 'sailcoderepeat.com' || url === 'www.sailcoderepeat.com'){
//     return {
//       url,
//       tagline: `Always sailing. Or coding`
//     }
//   } else if (url === 'hirescottieschneider.com' || url === 'www.hirescottieschneider.com'){
//     return {
//       url,
//       tagline: `Please hire Scottie :)`
//     }
//   } else {
//     return {
//       url,
//       tagline: `localhost :)`
//     }
//   }
// }
export default Home;
export { AppBackground };