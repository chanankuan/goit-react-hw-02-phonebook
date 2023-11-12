import { Component } from 'react';
import { nanoid } from 'nanoid';

import { getRandomHexColor } from 'utils/helper';
import { Filter } from 'components/Filter/Filter';
import { Container, Wrapper, Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact = (event, data) => {
    event.preventDefault();

    const isExist = this.state.contacts.some(contact => {
      return contact.name === data.name;
    });

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          ...data,
          id: nanoid(),
          bgColor: getRandomHexColor().bgColor,
          color: getRandomHexColor().color,
        },
      ],
      filter: '',
    }));
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onSearchContact = event => {
    this.setState(prevState => ({
      ...prevState,
      filter: event.target.value,
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <Wrapper>
          <ContactForm onAddContact={this.onAddContact} />
          {this.state.contacts.length > 0 ? (
            <>
              <Filter onSearchContact={this.onSearchContact} />
              <ContactList
                filteredContacts={filteredContacts}
                onDeleteContact={this.onDeleteContact}
              />
            </>
          ) : (
            <h2>No contacts yet</h2>
          )}
        </Wrapper>
      </Container>
    );
  }
}

export default App;
