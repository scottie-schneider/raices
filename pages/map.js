// import WithMarkers from '../components/WithMarkers';
import dynamic from 'next/dynamic'
const WithMarkers = dynamic(
  () => import('../components/WithMarkers'),
  { ssr: false }
)

class Map extends React.Component {
  render() {
    return (
      <WithMarkers />      
    )
  }
}
export default Map;