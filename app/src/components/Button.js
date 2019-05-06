import React from 'react';

const Button = ({ onClick, type = 'button', children }) => (
  <button style={styles.button} onClick={onClick} type={type}>
    {children}
  </button>
);

const styles = {
  button: {
    fontWeight: 'bold',
    padding: '7px 25px',
    margin: '10px',
    backgroundColor: '#F7FDFF',
    color: '#282C34',
    borderColor: '#282C34',
    border: '2px solid',
    borderRadius: '4px',
  },
};

export default Button;
