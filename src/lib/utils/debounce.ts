export default function debounce<T extends (...args: any[]) => any>(callback: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(args);
    }, delay);

    return result;
  };
}
