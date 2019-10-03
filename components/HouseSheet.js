import React, { Component } from 'react';
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import classnames from 'classnames';
// react swipeable sheet :_
const SwipeableBottomSheet = dynamic(() => import('react-swipeable-bottom-sheet'), {ssr: false}) 
import ImageCarousel from './ImageCarousel'
import LeftIcon from './icons/LeftIcon'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import { green } from 'ansi-colors';
// sheet styles
const StyledTitle = styled.div`
  background-color: '#00bcd4';
  padding: 16px 0;
  box-sizing: border-box;
  color: white;
  font-size: 24px;
  text-align: center;
`

const StyledText = styled.div`
  padding: 10px;
  box-sizing: border-box;
  background-color: border-box;
  font-size: 18px;
`

const StyledButton = styled.div`
  position: absolute;
  top: 0;
  z-index: 1200;
`

const BottomTab = styled.div`
  overflow-x: hidden;
`
class HouseSheet extends Component {
  state = {
    activeTab: '1',
  }
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <SwipeableBottomSheet
        open={this.props.open}
        onChange={() => this.props.openBottomSheet()}
        fullScreen
        style={{ 
          zIndex: 1000, 
          backgroundColor: '#00bcd4',
          color: 'green',
        }}
      >          
         <ImageCarousel/>
          <StyledButton 
            onClick={() => this.props.openBottomSheet(false)}                     
          >
            <LeftIcon 
              height={30}
              width={30}
              fill={'#000'}   
            />
          </StyledButton>
          <BottomTab>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Viewings
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
              <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>TAB 1 contents</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </BottomTab>   
        </SwipeableBottomSheet>
    )
  }
}
export default HouseSheet