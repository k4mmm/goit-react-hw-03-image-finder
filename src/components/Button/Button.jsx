import { LoadMore } from "./Button.styled";
export const Button = ({ onSubmit, page, hits }) => {
  const submit = (e) => {
    e.preventDefault();
    onSubmit({ page: page + 1 });
  };
  return (
    hits !== 0 && (
      <LoadMore type="submit" onClick={submit}>
        Load more
      </LoadMore>
    )
  );
};
