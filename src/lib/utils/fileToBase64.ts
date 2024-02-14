const fileToBase64 = async (file: File, setter: (arg: string) => void) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setter(reader.result as string);
  };
};

export default fileToBase64;
