interface ICustomSelectProps {
  label?: string;
  defaultSelectedKeys: number | string;
  onChange: (value: number| string) => void;
  items: {
    label: string;
    color?:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | undefined;
    value: string | number;
  }[];
}

export default ICustomSelectProps;
