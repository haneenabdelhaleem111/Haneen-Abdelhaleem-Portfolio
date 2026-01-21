export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 border-t border-border">
      <div className="items-center text-center">
        <p className="text-sm text-[#92969a] mt-2">
          © {currentYear} Haneen Abdelhaleem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
