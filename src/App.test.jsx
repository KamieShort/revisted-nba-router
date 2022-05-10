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

    const characterList = await screen.findByText('Species: Human');
    expect(characterList).toBeInTheDocument();
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

    // const characterLink = await screen.findByRole('link', {
    //   name: /Rick Sanchez/i,
    // });
    // userEvent.click(characterLink);
    // const rickLink = await screen.findByText('Rick Sanchez');
    // userEvent.click(rickLink);

    const link = await screen.findByRole('link', { name: /Rick Sanchez/i });
    userEvent.click(link);

    // screen.debug(link);
  });
});
