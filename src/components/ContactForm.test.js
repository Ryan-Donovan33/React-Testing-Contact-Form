import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import 'mutationobserver-shim';

test('testing for the labels', () => {
	const { getByLabelText } = render(<ContactForm />);

	getByLabelText(/firstName/i);
	getByLabelText(/lastName/i);
	getByLabelText(/Email/i);
});

test('form submit adds the data', () => {
	const { getByLabelText, getByText } = render(<ContactForm />);
	const firstInput = getByLabelText(/firstName/i);
	const lastInput = getByLabelText(/lastName/i);
	const emailInput = getByLabelText(/Email/i);

	// use the change event to add text to each input.
	//Making sure when text is entered it is rendering
	fireEvent.change(firstInput, { target: { value: 'Test First Name' } });
	fireEvent.change(lastInput, { target: { value: 'Test Last Name' } });
	fireEvent.change(emailInput, { target: { value: 'Test Email' } });

	expect(firstInput.value).toBe('Test First Name');
	expect(lastInput.value).toBe('Test Last Name');
	expect(emailInput.value).toBe('Test Email');

	// click on the submit button
	fireEvent.click(getByText(/submit/i));

	// assert that the person is render
	const person = getByText(/Test First Name/i);
	expect(person).toBeInTheDocument();
});
