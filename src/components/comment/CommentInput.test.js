/**
 * skenario testing
 *
 * - CommentInput component
 *   - should handle comment typing correctly
 *   - should call CommentInput function when Kirim button is clicked
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentInput from './CommentInput';
import '@testing-library/jest-dom';

describe('CommentInput component', () => {
  it('should handle comment typing correctly', async () => {
    // Arrange
    render(<CommentInput commentThread={() => {}} />);
    const commentInput = await screen.getByPlaceholderText('Comment_Input');

    // Action
    await userEvent.type(commentInput, 'Ini adalah komentar pertama');

    // Assert
    expect(commentInput).toHaveValue('Ini adalah komentar pertama');
  });

  it('should call CommentInput function when Kirim button is clicked', async () => {
    // Arrange
    const mockComment = jest.fn();
    render(<CommentInput commentThread={mockComment} />);
    const commentInput = await screen.getByPlaceholderText('Comment_Input');
    await userEvent.type(commentInput, 'Ini adalah komentar pertama');
    const commentButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(commentButton);

    // Assert
    expect(mockComment).toBeCalledWith(
      'Ini adalah komentar pertama',
    );
  });
});
