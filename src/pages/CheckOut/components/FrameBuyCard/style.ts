import { styled } from '../../../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const ContainerFrameTitle = styled('div', {
  marginTop: '2.5rem',
  height: '2.75rem',
  width: '35rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  span: {
    color: '$baseSubtitle',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '130%',
  },

  svg: {
    color: '$purple',
    fontSize: '1.375rem',
  },

  p: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '130%',

    marginLeft: '1.875rem',
  },
})

export const ContainerFrameActions = styled(RadioGroup.Root, {
  display: 'flex',

  gap: 12,

  marginTop: '2rem',
  height: '3.188rem',
  width: '35rem',
  lineHeight: 0,
})

export const Inputs = styled(RadioGroup.Item, {
  all: 'unset',
  border: '1px solid transparent',
  backgroundColor: '$baseButton',
  borderRadius: '6px',
  cursor: 'pointer',
  color: '$baseText',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gap: 12,

  textTransform: 'uppercase',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',

  width: '11.166rem',

  svg: {
    color: '$purple',
    fontSize: '1rem',
  },

  '&:hover': {
    backgroundColor: '$baseHover',
    transition: 'background-color 0.2s',
  },

  '&[data-state="checked"]': {
    border: '1px solid $purple',
  },
})
