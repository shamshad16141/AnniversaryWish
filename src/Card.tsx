import styled from "styled-components";

const Card = ({ showText }: { showText?: boolean }) => {
  return (
    <StyledWrapper>
      <div className={`card ${showText ? "active" : ""}`}>
        <div className="heart">❤️</div>

        <div className="card__content">
          <p className="card__title">Happy Anniversary ❤️</p>

          <p className="card__description">
            Every moment with you is special.
            <br />
            Thank you for being part of my life.
            <br />
            I love you forever ❤️
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: contents;

  .card {
    position: relative;
    width: 320px;
    height: 220px;
    /* margin: auto; removed to prevent pushing the textbox down in the flex container */
    background: linear-gradient(-45deg, #ff4b91 0%, #ffb347 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    user-select: none;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 227px;
    height: 227px;
    border: 3px solid rgba(255, 255, 255, 0.4);
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 8px;
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 480px) {
    .card {
      width: 290px;
      height: 200px;
    }
    .card::before {
      width: 206px;
      height: 206px;
    }
  }

  .card.active {
    transform: rotate(-5deg) scale(1.08);
    box-shadow: 0 15px 35px rgba(255, 75, 145, 0.5);
  }

  .heart {
    font-size: 80px;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    z-index: 2;
  }

  .card.active .heart {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }

  .card__content {
    position: absolute;
    inset: 0;
    padding: 25px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 3;

    transform: rotate(-45deg) scale(0);
    opacity: 0;

    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card.active .card__content {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 28px;
    color: #ff4b91;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    .card__title {
      font-size: 24px;
    }
  }

  .card__description {
    margin-top: 15px;
    font-size: 16px;
    color: #444;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    .card__description {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

export default Card;