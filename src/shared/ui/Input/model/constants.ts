const ICON_WIDTH = 22;
const ICON_HEIGHT = 22;

const INPUT_STYLES = {
  width: 360,
  '& .MuiInputBase-root': {
    borderRadius: '4px',
    borderWidth: '2px',
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      borderColor: '#5A5A5A',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#8C8C8C',
    },
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': {
      borderColor: '#8C8C8C',
    },
  },
  '& label': {
    color: 'white',
    fontSize: '13px',
    padding: '0px',
    '&.Mui-focused': {
      color: 'white',
    },
  },
};

export { INPUT_STYLES, ICON_WIDTH, ICON_HEIGHT };
