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

export const Container = styled.div`
  max-width: 1366px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`
export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }
`

export const Column = styled.div`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    width: ${props => (props.grid ? (props.grid / 12) * 100 : '8:33')}%;
  }
`
