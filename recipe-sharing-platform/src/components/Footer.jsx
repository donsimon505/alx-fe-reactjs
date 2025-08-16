function Footer() {
  return (
    <footer className="mt-auto text-center lg:px-[100px] md:px-[50px] py-3">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Recipe Sharing Platform. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
