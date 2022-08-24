import React, { useState } from 'react';
import Player from 'react-lottie-player';
import lottieButonNav from '../../assets/img/menu-nav.json';

interface Props {
  togglePanelLeft: () => void;
}

const LottieButton = ({ togglePanelLeft }: Props) => {
  const [play, setPlay] = useState(false);
  const [segmentStart, setSegmentStart] = useState(0);
  const [segmentTo, setSegmentTo] = useState(100);
  const [isOpen, toggleIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  const playAnimation = () => {
    setPlay(true);
    toggleIsOpen((isOpen) => !isOpen);
    togglePanelLeft();
    setDisable(true);
    removeDisableClick();
  };

  const removeDisableClick = () => {
    setTimeout(() => {
      setDisable(false);
    }, 500);
  };

  const onAnimationComplete = () => {
    if (isOpen) {
      setSegmentStart(100);
      setSegmentTo(0);
    } else {
      setSegmentStart(0);
      setSegmentTo(100);
    }
    setPlay(false);
  };

  const pointerEvent: Record<string, string> = {
    pointerEvents: disable ? 'none' : '',
  };

  return (
    <div
      onClick={playAnimation}
      className="cursor-pointer lg:hidden"
      style={pointerEvent}
    >
      <Player
        play={play}
        speed={3}
        loop={false}
        segments={[segmentStart, segmentTo]}
        animationData={lottieButonNav}
        style={{ width: 40 }}
        onComplete={onAnimationComplete}
      />
    </div>
  );
};

export default LottieButton;
