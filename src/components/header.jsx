const Header = ({ answers }) => {
  const attempted = answers.filter((a) => a !== null).length;
  return (
    <div className="attempt">
      Attempted {attempted} out of {answers.length}
    </div>
  );
};
export default Header;
