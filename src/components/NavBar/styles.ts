import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.div`
  font-size: 2.8rem;
  text-transform: uppercase;

  span {
    font-weight: bold;
    font-size: 3.3rem;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Li = styled.li`
  a {
    text-decoration: none;
    font-size: 2rem;
    padding: .5rem .8rem;
    color: #000;
  }

  .active {
    background-color: #000;
    color: #fff;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  font-size: 2rem;
  font-weight: normal;
  padding: .5rem .8rem;
  color: #000;
`;