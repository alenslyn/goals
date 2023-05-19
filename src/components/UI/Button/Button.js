import styledComponents from "styled-components";

const Button = styledComponents.button`
 width: 100%;
font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgb(82, 197, 201);
  color: white;
  background: rgb(82, 197, 201);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 760px) {
    width: auto;
  }

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #16a2ac;
  border-color: #1f989f;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
