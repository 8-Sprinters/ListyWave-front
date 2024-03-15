interface IProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
}

function usePressEnterFetch({ handleSubmit, isSubmitting }: IProps) {
  const handlePressEnterFetch = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isSubmitting) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return { handlePressEnterFetch };
}

export default usePressEnterFetch;
