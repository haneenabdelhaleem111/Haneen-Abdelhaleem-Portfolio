function Button({ className, size = "default", children, ...props }) {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus visible:ring-[#AD5D4E] bg-[#AD5D4E] text-[#eef0f2] hover:bg-[#AD5D4E]/90 shadow-lg shadow-[#AD5D4E]/25 ";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
export default Button;
// function Button({ children }) {
//   return (
//     <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
//       {children}
//     </button>
//   );
// }

// export default Button;
