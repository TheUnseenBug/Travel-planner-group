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
      <div className="z-10 fixed bottom-0 right-0 w-2.5 bg-red-500 text-white">
        {message}
      </div>
    );
  } else {
    return null;
  }
};
export default NotificationBox;
