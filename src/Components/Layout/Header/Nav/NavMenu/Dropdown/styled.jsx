import styled from "styled-components";

export default styled.div`
.dropdown {
  position: relative;
  display: inline-block;
  width: 200px;
}

.dropdown-button {
  cursor: pointer;
  font-weight: bold;
  color: darkorange;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #F8CF99;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 20px;
}

.dropdown-menu li {
  padding: 8px 12px;
}

.dropdown-menu a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  padding: 0;
}
`