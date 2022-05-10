import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('CharacterDetails', () => {
  it('should render character details', async () => {
    render(
      <MemoryRouter initialEntries={['/', '/characters/2']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    const characterDetailHeading = await screen.findByRole('heading', {
      name: /morty smith/i,
    });
    expect(characterDetailHeading).toBeInTheDocument();

    const characterDetail = await screen.findByText('Species: Human');
    expect(characterDetail).toBeInTheDocument();
  });
});

describe('App', () => {
  it('should render a list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const loading = screen.getByText('Loading Characters...');
    expect(loading).toBeInTheDocument();

    const heading = await screen.findByText('Character List');
    expect(heading).toBeInTheDocument();

    const characterList = await screen.findByText('Rick Sanchez');
    expect(characterList).toBeInTheDocument();

    const link = await screen.findByRole('link', { name: /Rick Sanchez/i });
    userEvent.click(link);

    const rickDetails = await screen.findByText('Gender: Male');
    expect(rickDetails).toBeInTheDocument();
  });
});
