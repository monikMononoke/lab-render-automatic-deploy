import React from 'react';

interface Props {
  searchTerm: string;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<Props> = (props) => {
  const { handleSearchChange, searchTerm } = props;
  return (
    <div className='input-container'>
      <input
        type='text'
        placeholder='Buscar personaje...'
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};
