import {render, screen} from '@testing-library/react';
import App from './App';
import React from "react";
import {fireEvent} from "@testing-library/dom";

test('renders Welcome home message', () => {
  render(<App/>);
  const {getByText} = screen;
  const textElement = getByText("Bienvenue");
  expect(textElement).toBeInTheDocument();
});

test('renders the navbar', () => {
  render(<App/>);
  const {getByText} = screen;
  expect(getByText("Login")).toBeInTheDocument();
  expect(getByText("Accueil")).toBeInTheDocument();
  expect(getByText("S'inscrire")).toBeInTheDocument();
});


// Navbar
test('Navbar has home link active by default', () => {
  render(<App/>);
  const {getByText} = screen;
  const homeLinkElement = getByText('Accueil');
  expect(homeLinkElement.classList.contains('Navbar__link--active')).toBe(true);
});

test('Navbar goes to the appropriate path', () => {
  render(<App/>);

  const {getByText} = screen;
  const mouseEvent = click();

  fireEvent(
    getByText('Login'),
    click(),
  );
  expect(getByText("Connexion")).toBeInTheDocument();
  expect(getByText('Login').classList.contains('Navbar__link--active')).toBe(true);

  const signInLink = getByText("S'inscrire");
  fireEvent(
    signInLink,
    click(),
  );
  expect(signInLink.classList.contains('Navbar__link--active')).toBe(true);
});

/**
 * Returns a basic click MouseEvent
 * @returns {MouseEvent}
 */
function click() {
  return new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  });
}
