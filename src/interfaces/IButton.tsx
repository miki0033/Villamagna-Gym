interface IButton {
  id?: number | string;
  text?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

export default IButton;
