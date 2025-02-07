import { FC } from "react";

interface Props {
  visible: boolean;
  message: string;
}

const NotificationBox: FC<Props> = ({ visible, message }) => {
  console.log("showing");
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
