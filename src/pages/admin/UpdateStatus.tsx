import { useEffect } from "react";

export const UpdateStatus = () => {
  useEffect(() => {
    document.title = "Dashboard | Delivery Express ";
  }, []);
  return <div>UpdateStatus</div>;
};
