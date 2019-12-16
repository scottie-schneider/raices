import styled from 'styled-components'

const FilterPopUp = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2000 !important;
  position: fixed !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  background-color: #fff;
  height: 100vh;
  width: 100vw;  
  button:focus {outline:0;}
  .header {
    width: 100%;
    height: 50px;
    border-bottom: .5px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: .5rem 1rem .5rem 1rem;
    .close {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      outline: none;
    }
    .clear:hover {
      text-decoration: underline;
    }
  }
  .filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    section:last-of-type {
      margin-bottom: 2rem;
      border-bottom: none;
    }
    section {
      display: block;
      flex-direction: column;
      border-bottom: 1px solid lightgrey;
      padding: 0 .5rem 2rem .5rem;
      width: 90%;  
      margin: auto;    
      /* Slider */
      .sliderHolder {
        margin: 1rem auto;
        padding: 0 1rem 0 1rem;
        width: 100%;
        height: 60px;
      }
      .priceInputs {             
        display: grid;
        align-items: center;
        justify-content: space-between;        
        overflow: hidden;      
        max-width: 100%;  
        margin-top: 28px;
        grid-template-columns: 1fr 1rem 1fr;        
      }
      .priceInput {
        position: relative;
        display: flex;
        min-width: 0;
        width: 100%;
        height: 56px;
        cursor: text;      
        margin: 0;
      }
      .spacer {
        margin: 8px;
        text-align: center;
        height: 1rem;
        display: flex;
        justify-content: center;
      }
      input {
        box-shadow: 0;
        flex: 1;
        outline: 0;
        border-radius: 8px;                     
        width: 100%;
      }
      label.label {
        position: absolute;
        top: .5rem;
        left: .5rem;
        font-size: .7rem;
      }
      .dollar {
        position: absolute;
        top: 1.7rem;
        left: .5rem;
        font-size: .9rem;
      }
      .price-slider {
        width: 300px;
        margin: auto;
        text-align: center;
        position: relative;
        height: 6em;
      }
      .price-slider svg,
      .price-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      input[type=number] {
        border: 1px solid #ddd;
        padding-left: 1rem;
        padding-top: 1rem;
        font-size: 1em;
        -moz-appearance: textfield;
      }
      input[type=number]::-webkit-outer-spin-button,
      input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input[type=number]:invalid,
      input[type=number]:out-of-range {
        border: 2px solid #e60023;
      }
      input[type=range] {
        -webkit-appearance: none;
        width: 100%;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        background: #1da1f2;
      }
      input[type=range]:focus::-ms-fill-lower {
        background: #1da1f2;
      }
      input[type=range]:focus::-ms-fill-upper {
        background: #1da1f2;
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: #1da1f2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }
      input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
      }
      input[type=range]::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: #1da1f2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
      }
      input[type=range]::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-ms-fill-lower,
      input[type=range]::-ms-fill-upper {
        background: #1da1f2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }
      input[type=range]::-ms-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
      }
      /* End Slider */
      .category {
        display: flex;      
        justify-content: space-between;
        margin-bottom: 1rem;
        .selectors {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 125px;
          button {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: transparent;
            border: 1px solid lightgrey;
          }
        }
      }      
      .category.checkbox {
        display: grid;        
        grid-template-columns: 1fr 1fr;
        margin-bottom: 0;
      }
    }
    section.accordion {
      padding: 0;
    }
  }
  /* Slider Button */
  /* The switch - the box around the slider */
  label.switchButton {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  label.switchButton input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  /* End Slider Buttons */
  /* The Custom Checkboxes */
  /* Customize the label (the container) */

  .checkboxContainer {
    display: grid;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkboxContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .checkboxContainer:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .checkboxContainer input:checked ~ .checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkboxContainer input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkboxContainer .checkmark:after {
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
  /* End Custom Checkboxes */
  /* Accordion */
  .accordion > input[type="checkbox"] {
    position: absolute;
    left: -100vw;
  }

  .accordion .content {
    overflow-y: hidden;
    height: 0;
    transition: height 0.3s ease;
  }

  .accordion > input[type="checkbox"]:checked ~ .content {
    height: auto;
    overflow: visible;
  }

  .accordion label {
    display: block;
  }

  /*
  Styling
  */
  .accordion {
    margin-bottom: 1em;
  }

  .accordion .handle {
    margin: 0;
    font-size: 1.125em;
    line-height: 1.2em;
  }

  .accordion label {
    color: #333;
    cursor: pointer;
    font-weight: normal;
  }

  .accordion label:hover,
  .accordion label:focus {
    /* background: #d8d8d8; */
  }
  /* End Accordion */
  /* Footer */
  footer {
    position: fixed;
    bottom: 0;
    height: 70px;
    display: flex;
    justify-content: flex-end;    
    align-items: center;
    background-color: #fff;
    width: 100%;
    border-top: 1px solid lightgrey;
    button {
      cursor: pointer;
      display: inline-block;
      position: relative;
      text-align: center;
      width: auto;
      margin-right: 1rem;
      height: 80%;
      padding: 14px 24px 14px 24px;
      color: #fff;
      background-color: rgb(34,34,34);
      border-radius: 8px;
    }
  }
  /* End Footer */
`;

export default FilterPopUp;