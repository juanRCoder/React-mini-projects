import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

interface ColorCheckboxProps {
  islabel: string;
  check: boolean;
  onCheck: (value: boolean) => void;
}

//Personalizar estilos 
const StyledCheckbox = styled(Checkbox)``;

export const ColorCheckbox: React.FC<ColorCheckboxProps> = ({ islabel, check, onCheck }) => {
  const [isChecked, setIsChecked] = useState<boolean>(check);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onCheck(checked);
  };


  return (
    <div className=''>
      <label className={`text-2xl ${isChecked ? 'font-bold' : 'font-thin'}`}>
        <StyledCheckbox
          className='text-pink-400 scale-125'
          checked={isChecked}
          onChange={handleChange}
        />
        {islabel}
      </label>
    </div>
  );
}
