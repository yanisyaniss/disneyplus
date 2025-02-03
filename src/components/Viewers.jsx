import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay loop playsInline>
          <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(150px, 1fr));
  }
`;

const Wrap = styled.div`
  height: 120px;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 69%) 0px 16px 20px -10px,
    rgb(0 0 0 / 73%) 0px 12px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-in-out;
  border: 2px solid rgba(249, 249, 249, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    transform: scale(1.08);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
