import { useState } from "react";

const ImageToggle = () => {
  const firstImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADWCAMAAAAHMIWUAAAAclBMVEX///8IfqQAfKMAeaEAdp8Ac50Ad58AcpwAf6X7/v71+vvy+Prh7fLV5u3t9fiJt8vB2ePd6/AniKu51OAyjK52rcRlpL6qy9mWv9FYnbnO4elDk7JAkrGhxtaAs8hQmrd8sMayz9y81+KbwtJvp7+nyNfXAcy7AAAVg0lEQVR4nO1d65aiuhJuk4DgBRRBEVG0td//FQ94IZVLhYQG9py1uvafPTMaU0mlbvmq8vX1R3/0R3/0R3/0f0WrXX7ZV6fqcY0PRTTAgFFxiC+P6nTMLvlmiAGHocVuP/MYpaQmSiljnl/lxaL3eOH6XlGP1SPS94jz4HjrP95wtN5TRmYi1TNktN/0wu/HzKt5lEdkdL8efO5utK7mVJ7Xh1/f228chyv2tYBoh5sROj/+l9yG2VzP6JsoC/Kl9WiLc+IhjL7ZnWfhiNwYqSDGqb3ZzVZWg0UX9Syoo5FiZJ4Qus87OX3Oz3t0cxtl2FmQaH6fgDOFHp4...";
  const secondImage = "https://example.com/second-image.jpg";

  const [src, setSrc] = useState(firstImage);

  const handleClick = (e) => {
    e.preventDefault();
    setSrc(src === firstImage ? secondImage : firstImage);
  };

  return <img src={src} alt="Toggle" onClick={handleClick} style={{cursor: "pointer"}} />;
};

export default ImageToggle;