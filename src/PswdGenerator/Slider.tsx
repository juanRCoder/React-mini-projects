import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from 'styled-components';

interface CustomSliderProps {
  length: number,
  onChange: (value: number) => void;
}

//Estilos del label y la barra
const StyledSlider = styled(Slider)``;

export const CustomSlider: React.FC<CustomSliderProps> = ({ length, onChange }) => {
  const handleChange = (_event: Event, value: number | number[]): void => {
    if (typeof value === 'number') onChange(value);
  };


  return (
    <Box className="w-full col-span-2 my-2 px-4">
      <StyledSlider
        className="text-cyan-700"
        min={1}
        max={20}
        onChange={handleChange}
        value={length}
      />
    </Box>
  );
}
