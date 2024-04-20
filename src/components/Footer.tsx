function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <span>
          made with <span className="text-red-500">❤️</span> by
        </span>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Muhmmed Medhat</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400"></div>
      </div>
    </footer>
  );
}

export default Footer;
