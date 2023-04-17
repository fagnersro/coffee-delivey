import { styled } from '../../styles'

export const SectionSuccess = styled('section', {
  display: 'flex',
  justifyContent: 'center',

  height: '100vh',
})

export const WrapperSuccess = styled('div', {
  width: '100%',
  maxWidth: '69.622rem',
})

export const ContainerContentSuccess = styled('div', {
  display: 'flex',

  marginTop: '5rem',
  height: '23.875rem',
})

export const ContentSuccess = styled('div', {
  height: '100%',
  width: '32.875rem',

  h2: {
    color: '$yellowDark',
    fontFamily: 'Baloo 2',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '2rem',
  },

  p: {
    color: '$baseSubtitle',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '1.25rem',
    marginBottom: '2.813rem',
  },
})

export const ContentDow = styled('div', {
  border: '1px solid #DBAC2C',
  borderRadius: '6px 36px',

  display: 'flex',
  alignItems: 'center',

  height: '16.875rem',
})

export const WrapperContentDow = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  marginLeft: '2.5rem',
  height: '11.699rem',
  width: '27.625rem',
})

export const I = styled('i', {
  borderRadius: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2rem',
  height: '2rem',

  svg: {
    fontSize: '1rem',
    color: '$white',
  },

  variants: {
    color: {
      purple: {
        backgroundColor: '$purple',
      },
      yellow: {
        backgroundColor: '$yellow',
      },
      darkYellow: {
        backgroundColor: '$yellowDark',
      },
    },
  },
})

export const CardDelivery = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  height: '2.625rem',
  width: '100%',

  div: {
    height: '100%',
    width: '19.375rem',
  },
  span: {
    textTransform: 'capitalize',
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
  },
})

export const CardForecast = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  height: '2.625rem',
  width: '100%',

  div: {
    height: '100%',
    width: '10.813rem',
  },
  span: {
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
  },
})

export const CardPayment = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  height: '2.625rem',
  width: '100%',

  div: {
    height: '100%',
    width: '11.813rem',
  },

  span: {
    textTransform: 'capitalize',
    color: '$baseText',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
  },
})

export const ContentImage = styled('div', {
  margin: '6.100rem 0 0 5.875rem',
  height: '18.313rem',
  width: '30.75rem',
})
