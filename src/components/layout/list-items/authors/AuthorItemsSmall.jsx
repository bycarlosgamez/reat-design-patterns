const AuthorItemsSmall = ({ author }) => {
  const { name, age } = author;
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default AuthorItemsSmall;
