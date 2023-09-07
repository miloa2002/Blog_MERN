/* eslint-disable @typescript-eslint/no-unused-vars */
import UseBlog from "../hook/UseBlog";

const Alert = () => {
  const { alert } = UseBlog();

  let classNames = "text-white p-3 mb-5 rounded-md";

  if (alert.tipo === "deleted") {
    classNames += " bg-red-500";
  } else if (alert.tipo === "add") {
    classNames += " bg-blue-500";
  } else if (alert.tipo === "emptyFields") {
    classNames += " bg-red-500";
  }else if (alert.tipo === "edited") {
    classNames += "bg-blue-500"
  }
  return (
    <div
      className={classNames}
    >
      {alert.message}
    </div>
  );
};

export default Alert;
