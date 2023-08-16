import './App.css';
import './theme.css'
import { styled } from 'styled-components';
import { useState } from 'react'
import { css } from '@emotion/css'
import { Input, Button } from 'reactstrap'

// const Button = styled.button`
//   color: ${props => props.color};
//   &:hover {
//     color : red
//   }
// `;

const Button1 = styled.button((props) => ({
  color: props.color,
}))

function App() {
  const [color, setColor] = useState();
  return (
    <>
      <div class="grid grid-cols-6 gap-4 border-2" >
        <div class="col-start-2 col-span-4 border-2">01</div>
        <div class="col-start-1 col-end-3 border-2">02</div>
        <div class="col-start-3 col-end-6 border-2">02.5</div>
        <div class="col-end-7 col-span-1 border-2">03</div>
      </div>
    </>
  );

}
const Button3 = ({ color }) => {
  return <button className={css`
  color: red;
  &:hover {
    color: ${color}
  }
`}>fdsafdsa</button>
}

export default App;
