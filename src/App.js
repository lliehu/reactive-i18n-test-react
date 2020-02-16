import React from 'react';
import { withTranslation } from 'react-i18next';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
import './App.css';
import LanguageSwitcher from './LanguageSwitcher';
import MessageLog from './MessageLog';
import MapArea from './MapArea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [
        {
          time: new Date(),
          messageId: 'testMessage'
        },
        {
          time: new Date(),
          messageId: 'testMessage'
        },
        {
          time: new Date(),
          messageId: 'testMessage'
        }
      ]
    };
  }

  addLogMessage(messageId, parameters = {}) {
    this.setState((state, props) => {
      return {
        messageList: state.messageList.concat([{
          time: new Date(),
          messageId,
          parameters
        }])
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{this.props.t('applicationName')}</title>
        </Helmet>
        <Navbar color="light">
          <NavbarBrand>{this.props.t('applicationName')}</NavbarBrand>
          <LanguageSwitcher />
        </Navbar>
        <Container fluid={true}>
          <Row>
            <Col>
              <MessageLog messageList={this.state.messageList} />
            </Col>
          </Row>
          <Row>
            <Col>
              <MapArea addLogMessage={this.addLogMessage.bind(this)}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(App);
