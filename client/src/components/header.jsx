import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {

  constructor(props) {
    super (props)
    this.state = {

    }
  }

  render () {

    return (
      <div>
        <HeaderHolder>
          <HeadbarHolder>
            <div>
              <svg>plus sign</svg>
            </div>
            <div>
              <div>
                <svg>search icon</svg>
              </div>
              <div>Add a location</div>
            </div>
            <div>
              <div>
                <svg>language icon</svg>
              </div>
              <div>
                <div>
                  <svg>list icon</svg>
                </div>
                <div>
                  <img />
                </div>
              </div>
            </div>
          </HeadbarHolder>
        </HeaderHolder>
      </div>
    )
  }

}

const HeaderHolder = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px !important;
  background-color: rgb(255, 255, 255) !important;
  position: absolute !important;
  left: 0px !important;
  right: 0px !important;
  top: 0px !important;
  width: 100%;
  display: flex;
  height: 80;
  -webkit-box-align: stretch !important;
  align-items: stretch !important;
  flex-wrap: wrap !important;
  z-index: 200
`;

const HeadbarHolder = styled.div`
  padding-left: 80px !important;
  padding-right: 80px !important;
  -webkit-box-pack: start !important;
  -webkit-box-align: stretch !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  width: 100% !important;
`



export default Header