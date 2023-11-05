import React from 'react';
import LOGO from '../Menubar/LOGO.jpg'
import { CDBBox, CDBBtn, CDBIcon, CDBContainer  } from 'cdbreact';

const Footer = () => {
    return (
        <footer className="shadow" color='#c9c1c1'>
          <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '80%' }}
          >
            <CDBBox display="flex" alignItems="center">
              <a href="/" className="d-flex align-items-center p-0 text-dark">
                <img
                  alt="logo"
                  src={LOGO}
                  width="100px"
                />
              </a>
            </CDBBox>
            <CDBBox display="flex">
              {/* <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn> */}
              <CDBBtn flat color="primary" className="p-2" href='https://www.instagram.com/decentralhub/?hl=en'>
                <CDBIcon fab icon="instagram"/>
              </CDBBtn>
              <CDBBtn flat color='primary' className=' mx-3 p-2' href='https://www.tiktok.com/@decentraldola?_t=8h2LVzfxymv&_r=1'>
                TikTok Icon
              </CDBBtn>
            </CDBBox>
            <CDBBox>
              <small className="ms-2">&copy; DeCentralHub, 2023. All rights reserved.</small>
            </CDBBox>
          </CDBBox>
        </footer>
      );
};

export default Footer