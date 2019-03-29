import React from 'react';

class FooterComp extends React.Component {

  render() {

    return(
      <>
      <img className="logo-image" src={window.logoURL} alt="" />
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