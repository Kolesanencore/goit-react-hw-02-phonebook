import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          required
        />
        <Input
          placeholder="Number"
          type="tel"
          name="number"
          value={number}
          onChange={this.handleInputChange}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
