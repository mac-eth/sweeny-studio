import React from 'react';

interface ButtonProps {
  size?: 'md' | 'lg' | 'xl';
  block?: boolean;
  style?: 'outline' | 'primary' | 'inverted';
  className?: string;
  children?: React.ReactNode;
  [x: string]: any; // For additional props
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  style = 'primary',
  block = false,
  className,
  children,
  ...rest
}) => {
  const sizes = {
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3',
    xl: 'px-8 py-6',
  };

  const styles = {
    outline: 'border-2 border-indigo-500 hover:bg-black text-black hover:text-white',
    primary: 'bg-neutral-950 text-neutral-50 hover:bg-neutral-800 border border-neutral-700',
    inverted: 'bg-neutral-50 text-neutral-950 hover:bg-neutral-200 border border-neutral-400',
  };

  const buttonClass = [
    'rounded-full text-center transition duration-200',
    block ? 'w-full' : '',
    sizes[size],
    styles[style],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...rest} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
