import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  ${'' /* font-family: "Work Sans", sans-serif; */}
  font-family: 'Nunito', sans-serif;
  text-decoration:none;
}
body{
  background-color:white;
}
div{
  color:#474744;;
  font-size:13px;
}

html {
  ${'' /* font-size: 100%; */}
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

${'' /* body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
} */}

// scroll bar section---------------

${'' /* body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
} */}

${'' /* h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}
h6{
  font-weight:bold;
}
h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 900;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  font-weight:400;
} */}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

::placeholder {
  color: gray;
  opacity: 70%; /* Firefox */
}

::-ms-input-placeholder { /* Edge 12 -18 */
  color: red;
}
.inputColor{
  color:${({ theme }) => theme.colors.text};
  font-size:14px;
  font-weight:700;
}
input[type=text], input[type=Number]{
  border: 1px solid gray;
  padding:3px 15px;
  width:100%;
  color: ${({ theme }) => theme.colors.helper};
  outline: none;
  transitions:0.5s;
  font-size:16px;
  border-radius:8px;
}
input[type=text]:focus{
  ${'' /* border:1px solid ${({ theme }) => theme.colors.helper}; */}
  border:1px solid ${({ theme }) => theme.colors.helper};
  transitions:0.5s;
}

 ${'' /* input type file */}
 input[type="file"] {
  position: relative;
}

input[type="file"]::file-selector-button {
  width: 136px;
  color: transparent;
}

/* Faked label styles and icon */
input[type="file"]::before {
  position: absolute;
  pointer-events: none;
  top: 10px;
  left: 16px;
  height: 20px;
  width: 20px;
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230964B0'%3E%3Cpath d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'/%3E%3C/svg%3E");
}

input[type="file"]::after {
  position: absolute;
  pointer-events: none;
  top: 11px;
  left: 40px;
  color: #0964b0;
  content: "Upload File";
}

/* ------- From Step 1 ------- */

/* file upload button */
input[type="file"]::file-selector-button {
  border-radius: 4px;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.16);
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  margin-right: 16px;
  transition: background-color 200ms;
}

/* file upload button hover state */
input[type="file"]::file-selector-button:hover {
  background-color: #f3f4f6;
}

/* file upload button active state */
input[type="file"]::file-selector-button:active {
  background-color: #e5e7eb;
}


${'' /* @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    } */}

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }



    .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}




`;




