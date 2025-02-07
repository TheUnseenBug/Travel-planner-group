import { FC, useEffect } from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch function
import { hideNotification } from "../helpers/notif";

interface Props {
  visible: boolean;
  message: string;
}

const NotificationBox: FC<Props> = ({ visible, message }) => {
  const dispatch = useDispatch();
  const autoHideDuration = 3000;
  useEffect(() => {
    if (visible === true && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, autoHideDuration);

      return () => clearTimeout(timer); // Cleanup on unmount or state change
    }
  }, [visible, dispatch, autoHideDuration]);

  if (visible) {
    return (
      <div
        className={`z-50 fixed top-4 right-4 md:right-8 w-full max-w-sm rounded-md shadow-lg overflow-hidden bg-gray-600 text-white`}
      >
        <div className="p-4 flex items-center space-x-3">
          <img
            className="w-24"
            src="https://x47fqbpt2q.ufs.sh/f/gFjC50OLd3eUWyvYmrnDRAVT5bPSpwDiEOn7fNH1k28zUmX3"
            alt="party popper"
          />
          {/* {icon && <div className="text-xl">{icon}</div>} */}
          <div className="text-sm font-medium">{message}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default NotificationBox;
