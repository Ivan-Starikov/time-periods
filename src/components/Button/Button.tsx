import { MouseEvent } from 'react';
import { Wrapper } from './styled';

type Props = {
  size: string;
  stroke: string;
  onClick: (target: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  flipped?: boolean;
}

const Button = ({ size, stroke, disabled, flipped, onClick }: Props) => {
  return (
    // @ts-ignore
    <Wrapper disabled={disabled} flipped={flipped} onClick={onClick}>
      <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" stroke={stroke} strokeOpacity="0.3"/>
        <path d="M27.4999 18.75L21.2499 25L27.4999 31.25" stroke={stroke} strokeWidth="2"/>
      </svg>
    </Wrapper>
  );
};

export default Button;

