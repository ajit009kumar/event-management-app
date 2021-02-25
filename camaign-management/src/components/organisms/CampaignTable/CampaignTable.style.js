import { css } from 'styled-components';

export default css`
  overflow-x: auto;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  th {
    background-color: #f1f1f4;
  }

  th,
  td {
    text-align: left;
    padding: 12px;
    text-transform: uppercase;
    color: #556789;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .modal {
    display: flex;
    justify-content: center;
  }

  table ~ .popup-overlay .modal-container-content {
    width: auto !important;
  }
`;
