import './spinner.scss';

interface SpinnerProps {
  small?: boolean;
}

const Spinner = ({ small }: SpinnerProps) => (
  <div className={`spinner ${small ? 'spinner-small' : ''}`}>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
  </div>
);

export default Spinner;
