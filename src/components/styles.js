import styled from 'styled-components'

export const Header = styled.header`
  background-color: #fff;
  height: 80px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 0px 2px 6px 0px rgba(166, 161, 166, 0.76);
  -moz-box-shadow: 0px 2px 6px 0px rgba(166, 161, 166, 0.76);
  box-shadow: 0px 2px 6px 0px rgba(166, 161, 166, 0.76);
  align-items: center;
  justify-content: center;

  section {
    width: 1366px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  section div {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 1365px) {
    section {
      width: 100vw;
    }
    section div {
      display: none;
    }
  }
`
export const Lazy = styled.div`
  background-color: #3c3c3c;
  width: 100px;
  height: 18px;
  border-radius: 5px;
  margin-right: 35px;
`

export const Grid = styled.div`
  border: 1px solid red;
`
export const Row = styled.div`
  display: flex;
  border: 1px solid green;
  flex-wrap: wrap;
`

const media = {
  xs: styles => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `
}

export const Col = styled.div`
  flex: ${props => props.size};
  border: 1px solid blue;
  ${props => props.collapse && media[props.collapse](`display: none;`)};
`
