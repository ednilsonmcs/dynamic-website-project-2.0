import React, {useState} from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  const [hovered, setHovered] = useState(false)

  const styles = {
    background: hovered ? "#243066" : "linear-gradient(29deg, #5B87B5, #3B5F9E 70%)",
  }

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={styles}
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
