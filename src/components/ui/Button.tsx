type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = (props: Props) => {
  return (
    <button
      className="w-fit bg-primary text-white hover:bg-tertiary font-medium py-1.5 px-3 rounded-lg shadow-md shadow-gray-400 text-xs"
      {...props}
    />
  );
};

export default Button;
