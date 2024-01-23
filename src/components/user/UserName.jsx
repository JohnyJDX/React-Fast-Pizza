import { useSelector } from "react-redux";
import { getUserName } from "./userSlice";

const UserName = () => {
  const name = useSelector(getUserName);

  if (!name) return null;

  return <div className="hidden text-sm font-semibold md:block">{name}</div>;
};

export default UserName;
