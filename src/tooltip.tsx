import React from 'react';
import styled from 'styled-components';

const Tooltip = ({ isActive }: { isActive?: boolean }) => {
  return (
    <StyledWrapper>
      <div className={`tooltip-container ${isActive ? "active" : ""}`}>
        <span className="tooltip">Do you love me? Yes or No</span>
        <span className="text">Click Text Box</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    transition: all 0.2s;
    font-size: 17px;
    padding: 1rem 0;
    width: fit-content;
    box-sizing: border-box;
    --bg: linear-gradient(-45deg, #ff4b91, #ffb347);
    --color: #fff;
    --tooltip-bg: #fff;
    --tooltip-color: #ff4b91;
    --margin: 0.5rem;
  }

  .text {
    z-index: 9;
    background: var(--bg);
    color: var(--color);
    padding: 0.7em 1.8em;
    border-radius: 0.75rem;
    height: fit-content;
    cursor: pointer;
    font-size: 100%;
    font-weight: 600;
    box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.15);
    background-size: 100%;
    display: block;
    transition:
      box-shadow 0.4s ease-in-out,
      transform 0.2s cubic-bezier(0.06, 0.37, 0.3, 0.92);
  }

  .tooltip-container:hover .text,
  .tooltip-container.active .text {
    transform: scale(1.1);
    box-shadow:
      0px 8px 32px 16px #ffb34755,
      0px -2px 8px 2px #ff4b9155;
  }

  .tooltip {
    position: absolute;
    top: calc(-1 * var(--margin));
    left: 50%;
    transform: translateX(-50%) translateY(0%) scale(0);
    padding: 0.3em 0.6em;
    opacity: 0;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.07, 1.17, 0.44, 1.41);
    background: var(--tooltip-bg);
    color: var(--tooltip-color);
    border-radius: 0.5rem;
    z-index: 99999;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    bottom: -0.2em;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    background: var(--tooltip-bg);
    border-bottom-right-radius: 0.175rem;
  }

  .tooltip-container:hover .tooltip,
  .tooltip-container.active .tooltip {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(-100%) scale(1);
  }`;

export default Tooltip;
