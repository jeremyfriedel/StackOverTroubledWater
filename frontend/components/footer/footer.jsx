import React from 'react';

class FooterComp extends React.Component {

  render() {

    return(
      <>
      {/* <img className="logo-image" src={window.logoURL} alt="" /> */}
        <svg aria-hidden="true" className="logo-image " width="32" height="37" viewBox="0 0 32 37"><g><path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9z"></path><path d="M23.1 25.99l.68-2.95-16.1-3.35L7 23l16.1 2.99zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 18.4l2.1-2.5L15.4 5.3l-2.1 2.5zM21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM7 30h16v-3H7v3z" fill="#F48024"></path></g></svg>
        <ul className="first_column">
          <li className='top-level-list'>STACK OVER TROUBLED WATER</li>
          <li>Questions</li>
          <li>Developer Jobs Directory</li>
          <li>Salary Calculator</li>
          <li>Help</li>
          <li>Mobile</li>
          <li>Disable Responsiveness</li>


        </ul>
        <ul className="second_column">
          <li className='top-level-list'>PRODUCTS</li>
          <li>Teams</li>
          <li>Talent</li>
          <li>Advertising</li>
          <li>Enterprise</li>


        </ul>

        <ul className="second_column">
          <li className='top-level-list'>COMPANY</li>
          <li>About</li>
          <li>Teams</li>
          <li>Work Here</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>


        </ul>

        <ul className="second_column">
          <li className='top-level-list'>STACK OVER NETWORK</li>
          <li>Technology</li>
          <li>Life / Arts</li>
          <li>Culture / Recreation</li>
          <li>Science</li>
          <li>Other</li>


        </ul>
        </>
    );
  }
}

export default FooterComp