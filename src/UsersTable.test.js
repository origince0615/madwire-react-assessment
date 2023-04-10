import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import UsersTable from './UsersTable';

describe('UsersTable', () => {
  afterEach(cleanup);

  const data = [
    {
      name: 'Test1',
      username: 'test1',
      email: 'test1@test.com',
    },
    {
      name: 'Test2',
      username: 'test2',
      email: 'test2@test.com',
    },
  ];

  it('should render Table with correct number of rows', () => {
    const { container } = render(
      <UsersTable data={data} onEditData={() => {}} />
    );
    const rows = container.querySelectorAll('tbody > tr');
    expect(rows).toHaveLength(2);
  });

  it('should call onEdit when edit button is clicked', () => {
    const onEditData = jest.fn();
    const { getAllByLabelText } = render(
      <UsersTable data={data} onEditData={onEditData} />
    );
    const buttonArray = getAllByLabelText('edit-button');
    fireEvent.click(buttonArray[0]);
    expect(onEditData).toHaveBeenCalled();
    expect(onEditData).toHaveBeenCalledWith(0);
  });
});
