import React from 'react';


import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import '../node_modules/@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import '../node_modules/react-calendar/dist/Calendar.css';




const now = new Date();
const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

class DashTemplate extends React.Component {
  state = {
    date: [new Date(), new Date()],
  }
   
  onChange = date => this.setState({ date })
  render () {
    return (
      <main class="main">          
        <div class="main-header">
          <div class="main-header__intro-wrapper">
            <div class="main-header__welcome">
              <div class="main-header__welcome-title text-light">Welcome, <strong>Scottie</strong></div>
              <div class="main-header__welcome-subtitle text-light">How are you today?</div>
            </div>
          </div>
        </div>

        <div class="main-cards">
          <div class="card at-a-glance">
            <div className="cardHeader">
              <span className="title">At-a-Glance</span>
              <DateRangePicker className="datepicker"
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>   
            <div className="metrics">
              <div className="metric">
                <div className="box">
                  <div className="circle">
                    <span className="number">0</span>
                  </div>                
                </div>
                <span className="label">Team</span>
              </div>
              <div className="metric">
                <div className="box">
                  <div className="circle">
                    <span className="number">0</span>
                  </div>                
                </div>
                <span className="label">Members</span>
              </div>
              <div className="metric">
                <div className="box">
                  <div className="circle">
                    <span className="title">Actual</span>
                    <span className="actual">0 hrs</span>
                    <span className="title budgeted">Budgeted</span>
                    <span className="budgeted">0 hrs</span>
                  </div>                
                </div>
                <span className="label">Hours</span>
              </div>
              <div className="metric">
                <div className="box">
                  <div className="circle">
                  <span className="title">Actual</span>
                    <span className="actual">$ 0</span>
                    <span className="title budgeted">Budgeted</span>
                    <span className="budgeted">$ 0</span>
                  </div>                
                </div>
                <span className="label">Dollars</span>
              </div>
            </div>
          </div>
          
          <div class="card">
          
          </div>
          <div class="card">
          
          </div>
        </div>
      </main>
      // <GridContainer nav={this.state.nav}>
      //   <div class="grid">
      //     {/* Nav Menu Component */}
      //     <aside className={classNames('sidenav')}>            
      //       <ul class="sidenav__list">
      //         <li className="sidenav__list-item">Team</li>
      //         <li className="sidenav__list-item">Profile</li>
      //         <li className="sidenav__list-item">Add a Team</li>
      //         <li className="sidenav__list-item logout">Logout</li>
      //       </ul>
      //     </aside>
      //     {/* End Nav Menu Component */}
      //     {/* Nav Button Component */}
      //     {
      //       this.state.nav ? 
      //       <div 
      //         className="navButton"
      //         onClick={this.nav}
      //       >
      //         <SlideLeftIcon 
      //           height={'20px'} 
      //           width={'20px'}                
      //         /> 
      //       </div>
      //       : 
      //       <div
      //         className="navButton"
      //         onClick={this.nav}
      //       >
      //          <SlideRightIcon 
      //           height={'20px'} 
      //           width={'20px'}
      //           className="navButton"
      //         />
      //       </div>
      //     }
      //     {/* End Nav Button Component */}
      //     {/* Dashboard Component ie., the child */}
      //     <main class="main">          
      //       <div class="main-header">
      //         <div class="main-header__intro-wrapper">
      //           <div class="main-header__welcome">
      //             <div class="main-header__welcome-title text-light">Welcome, <strong>Scottie</strong></div>
      //             <div class="main-header__welcome-subtitle text-light">How are you today?</div>
      //           </div>
      //         </div>
      //       </div>
  
      //       <div class="main-cards">
      //         <div class="card at-a-glance">
      //           <div className="cardHeader">
      //             <span className="title">At-a-Glance</span>
      //             <DateRangePicker className="datepicker"
      //               onChange={this.onChange}
      //               value={this.state.date}
      //             />
      //           </div>   
      //           <div className="metrics">
      //             <div className="metric">
      //               <div className="box">
      //                 <div className="circle">
      //                   <span className="number">0</span>
      //                 </div>                
      //               </div>
      //               <span className="label">Team</span>
      //             </div>
      //             <div className="metric">
      //               <div className="box">
      //                 <div className="circle">
      //                   <span className="number">0</span>
      //                 </div>                
      //               </div>
      //               <span className="label">Members</span>
      //             </div>
      //             <div className="metric">
      //               <div className="box">
      //                 <div className="circle">
      //                   <span className="title">Actual</span>
      //                   <span className="actual">0 hrs</span>
      //                   <span className="title budgeted">Budgeted</span>
      //                   <span className="budgeted">0 hrs</span>
      //                 </div>                
      //               </div>
      //               <span className="label">Hours</span>
      //             </div>
      //             <div className="metric">
      //               <div className="box">
      //                 <div className="circle">
      //                 <span className="title">Actual</span>
      //                   <span className="actual">$ 0</span>
      //                   <span className="title budgeted">Budgeted</span>
      //                   <span className="budgeted">$ 0</span>
      //                 </div>                
      //               </div>
      //               <span className="label">Dollars</span>
      //             </div>
      //           </div>
      //         </div>
              
      //         <div class="card">
              
      //         </div>
      //         <div class="card">
              
      //         </div>
      //       </div>
      //     </main>
      //     {/* End Dashboard Component */}
      //     <footer class="footer">
      //       <div class="footer__copyright">&copy; 2019</div>
      //       <div class="footer__signature">Made with love by Scottie</div>
      //     </footer>
      //   </div>
      //   <BottomNavForm />
      // </GridContainer>
  );
  }
} 

export default DashTemplate;