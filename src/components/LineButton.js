import React, {useState} from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const LineButton = ({ children, className = '', size }) => {
  const [hovered, setHovered] = useState(false)

  const styles = {
    background: hovered ? "#243066" : "white",
    color: hovered ? "white" : "#243066",
    border: "1px solid #243066",
    transition: "0.2s"
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
    `}
    >
      {children}
    </button>
  );
};

export default LineButton;
