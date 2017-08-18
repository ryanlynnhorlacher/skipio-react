import React, { Component } from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import { getContacts } from './actions';
import Sidebar from './components/Sidebar';
import SelectedContact from './components/SelectedContact';
import { setContact } from './actions';

const Content = glamorous.div({
  position: 'fixed',
  left: 200,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'white',
})

const Message = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  height: 300,
})

class App extends Component {

  componentWillMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          contacts={this.props.contacts}
          setContact={this.props.setContact}
          contact={this.props.contact}
        />
          <Content>
        {
          this.props.contacts.size === 0 ?
            <Message>No contacts to display</Message>
          :
            <SelectedContact />
        }
          </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
  setContact: (contact) => dispatch(setContact(contact)),
});

const mapStateToProps = (state) => ({
  contacts: state.get('contacts'),
  contact: state.get('contact'),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
