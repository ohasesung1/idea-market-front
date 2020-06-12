import React from 'react';

interface GreetingsProps {
  name: string;
  mark: string;
}

function Greetings({ name, mark }: GreetingsProps) {
  return (
  <div>Hello, {name} and {mark}</div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;