type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = (props: Props) => {
  return (
    <button
      className="w-auto bg-dark text-white hover:bg-tertiary p-4"
      {...props}
    />
  );
};

export default Button;
