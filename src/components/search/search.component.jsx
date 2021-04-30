import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '../../components/input/input.component';

export const Search = ({ isMainPage, label }) => {
  const [input, setInput] = useState('');
  const searchHistory = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    searchHistory.push(`/search/${input}`);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <Input
        label="search..."
        value={input}
        handleChange={e => setInput(e.target.value)}
      />
    </form>
  );
};
