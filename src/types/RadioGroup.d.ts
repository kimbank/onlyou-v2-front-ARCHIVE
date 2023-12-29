interface RadioOption {
  id: string;
  label: string;
}

interface RadioGroup {
  title: string;
  value : string;
  options: RadioOption[];
}
