import { USD, GBP, EUR } from "ccy-icons";

type TIconProps = {
    name: string;
    className: string;
}
const Icon = ({ name, ...props }: TIconProps) => {
  switch (name) {
    case "USD":
      return <USD {...props} />;
    case "GBP":
      return <GBP {...props} />;
    case "EUR":
      return <EUR {...props} />;
    default:
      return null;
  }
};

export default Icon;