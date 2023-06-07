import { styled, Button } from '@nextui-org/react';

export const CardButton = styled(Button, {
  boxShadow: '$md',
  variants: {
    size: {
      mysize: {
        height: '$12',
        borderRadius: '$xs',
      },
    },
    color: {
      mycolor: {
        background: 'inherit',
        color: '$white',
        border: '$space$1 solid lightblue',
        '&:hover': {
          background: '#D4AF37',
          color: '$white',
        },
        '&:active': {
          color: '#D4AF37',
          background: '$black',
        },
        '&:focus': {
          borderColor: 'lightblue',
          background: 'inherit',
        },
      },
      mycolor2: {
        background: 'transparent',
        position: 'relative',
        color: 'goldenrod',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'goldenrod',
          zIndex: -1,
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        },
        '&:hover': {
          color: 'black',
          '&::before': {
            opacity: 1,
          },
        },
        '&:active': {
          background: 'goldenrod',
          color: 'black',
        },
      },
    },
  },
});
