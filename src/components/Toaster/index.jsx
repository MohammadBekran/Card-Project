import { Toaster as ReactToaster } from "react-hot-toast";

const Toaster = ({ ...rest }) => {
  return <ReactToaster {...rest} />;
};

export { Toaster };
