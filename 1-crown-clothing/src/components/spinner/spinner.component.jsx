import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles.jsx";

export default function Spinner() {
  return (
    <div>
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    </div>
  );
}
