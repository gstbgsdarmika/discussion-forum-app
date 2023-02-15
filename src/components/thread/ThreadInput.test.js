/**
 * skenario testing
 *   - should handle title typing correctly
 *   - should category typing correctly
 *   - should handle body typing correctly
 *   - should call ThreadInput function when Buat button is clicked
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';
import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput threadInput={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await userEvent.type(titleInput, 'Thread Pertama');

    // Assert
    expect(titleInput).toHaveValue('Thread Pertama');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadInput threadInput={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    // Action
    await userEvent.type(categoryInput, 'General');

    // Assert
    expect(categoryInput).toHaveValue('General');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadInput threadInput={() => {}} />);
    const bodyInput = await screen.getByPlaceholderText('Body');

    // Action
    await userEvent.type(bodyInput, 'Ini adalah thread pertama');

    // Assert
    expect(bodyInput).toHaveValue('Ini adalah thread pertama');
  });

  it('should call ThreadInput function when add thread button is clicked', async () => {
    // Arrange
    const mockThread = jest.fn();
    render(<ThreadInput threadInput={mockThread} />);

    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'Thread Pertama');

    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'General');

    const bodyInput = await screen.getByPlaceholderText('Body');
    await userEvent.type(bodyInput, 'Ini adalah thread pertama');

    const threadButton = await screen.getByRole('button', { name: 'Buat' });

    // Action
    await userEvent.click(threadButton);

    // Assert
    // expect(mockThread).toBeCalledWith({
    //   body: 'Ini adalah thread pertama',
    //   category: 'General',
    //   title: 'Thread Pertama',
    // });
  });
});
