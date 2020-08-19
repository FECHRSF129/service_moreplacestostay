import React from 'react';
import styled from 'styled-components';

class CreateListModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    this.props.onClickCreate(this.state.name);
    this.props.onClickList(this.props.roomName, this.state.name);
    this.props.closeCreateListModal()
  }

  render () {
    return (
      <ModalWrapper>
        <ModalFrame>
          <CloseModalBtnHolder>
            <CloseModalBtn onClick={this.props.closeCreateListModal}>
              <CloseModalBtnIcon   aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32">
                  <path d="m 6 6 l 20 20"></path>
                  <path d="m 26 6 l -20 20"></path>
              </CloseModalBtnIcon>
            </CloseModalBtn>
          </CloseModalBtnHolder>
          <ModalHeader>
            <ModalH1Holder>
              <ModalH1>Name this list</ModalH1>
            </ModalH1Holder>
          </ModalHeader>
          <ContentHolder>
            <Form>
              <NameLabel>
                <NameHolder>
                  <NameText>Name</NameText>
                </NameHolder>
                <InputTag name="name" value={this.state.name} onChange={this.handleChange}/>
              </NameLabel>
            </Form>
            <Restriction>50 characters maximum</Restriction>
          </ContentHolder>
        <ModalFooter>
          <CreateButton onClick={this.handleSubmit}>Create</CreateButton>
        </ModalFooter>
        </ModalFrame>
      </ModalWrapper>
    )
  }
}

const ModalWrapper = styled.div`
  z-index: 200;
  -webkit-box-align: center !important;
  align-items: center !important;
  padding: 40px !important;
  -webkit-box-pack: center !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: horizontal !important;
  position: fixed !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
`;

const ModalFrame = styled.div `
  width: 100% !important;
  max-width: 568px !important;
  border-radius: 12px !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: vertical !important;
  position: relative !important;
  max-height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  background: rgb(255, 255, 255) !important;
`;

const CloseModalBtnHolder = styled.span`
  top: 24px !important;
  left: 24px !important;
  position: absolute !important;
  display: flex !important;
`;

const CloseModalBtn = styled.button`
  appearance: none !important;
  display: inline-block !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: relative !important;
  border-radius: 50% !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  outline: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
`

const CloseModalBtnIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const ModalHeader = styled.header`
  min-height: 64px !important;
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  flex: 0 0 auto !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
`;

const ModalH1Holder = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 190px !important;
  padding-right: 24px !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  flex: 0 0 auto !important;
`

const ModalH1 = styled.h1`
  -webkit-box-flex: 0 !important;
  flex-grow: 0 !important;
  flex-shrink: 1 !important;
  flex-basis: auto !important;
  text-align: center !important;
  margin-left: 16px !important;
  margin-right: 16px !important;
  overflow: hidden !important;
  color: rgb(34, 34, 34) !important;
  font-size: 1em !important;
  font-weight: 600 !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const ContentHolder = styled.div`
  height: 130px !important;
  padding-top: 32px !important;
  padding-bottom: 32px !important;
  padding-right: 16px !important;
  padding-left: 16px !important;
  overflow-y: auto !important;
  display: block;
`;

const Form = styled.div`
    position: relative !important;
    cursor: text !important;
    display: flex !important;
    height: 56px !important;
    width: 100% !important;
    color: rgb(34, 34, 34) !important;
    background-color: rgb(255, 255, 255) !important;
    box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 400 !important;
    margin: 0px !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    border-image: initial !important;
    border-radius: 8px !important;
`;

const NameLabel = styled.label`
  position: relative !important;
  flex: 1 1 0% !important;
  padding: 0px !important;
`;

const NameHolder = styled.div`
  position: absolute !important;
  top: 18px !important;
  left: 12px !important;
  right: 12px !important;
  margin-top: 0px !important;
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  margin-left: 0px !important;
  padding-top: 0px !important;
  padding-right: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  color: rgb(113, 113, 113) !important;
  pointer-events: none !important;
  transform-origin: 0% 0% !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  transition: -ms-transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, -webkit-transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s, transform 0.15s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s !important;
    transition-property: -ms-transform, -webkit-transform, transform !important;
    transition-duration: 0.15s, 0.15s, 0.15s !important;
    transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955), cubic-bezier(0.455, 0.03, 0.515, 0.955), cubic-bezier(0.455, 0.03, 0.515, 0.955) !important;
    transition-delay: 0s, 0s, 0s !important;
`;

const NameText = styled.div`
  max-width: 100% !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  overflow: hidden !important;
`;

const InputTag = styled.input`
  width: 100% !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  margin-left: 12px !important;
  margin-right: 12px !important;
  margin-top: 26px !important;
  margin-bottom: 10px !important;
  min-height: 1px !important;
  color: inherit !important;
  background-color: transparent !important;
  font-family: inherit !important;
  font-size: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  appearance: none !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  outline: none !important
`

const Restriction = styled.div`
  padding-top: 8px !important;
  display: flex !important;
  color: rgb(113, 113, 113) !important;
  font-size: 12px !important;
  line-height: 16px !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
`

const ModalFooter = styled.div`
  -webkit-box-pack: justify !important;
  -webkit-box-align: center !important;
  display: flex !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 16px !important;
  line-height: 20px !important;
  flex: 0 0 auto !important;
  border-top: 1px solid rgb(235, 235, 235) !important;
`;

const CreateButton = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  position: relative !important;
  text-align: center !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  color: rgb(255, 255, 255) !important;
  width: 100% !important;
  margin: 0px !important;
  text-decoration: none !important;
  border-radius: 8px !important;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  background: rgb(34, 34, 34) !important;
`

export default CreateListModal;