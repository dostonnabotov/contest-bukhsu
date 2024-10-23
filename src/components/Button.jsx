const Button = ({ as = "button", href, children, ...props }) => {
  return as === "button" ? (
    <button className="button" {...props}>
      {children}
    </button>
  ) : (
    <a className="button" href={href} {...props}>
      {children}
    </a>
  );
};

export default Button;
