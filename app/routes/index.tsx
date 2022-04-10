import { Theme, useTheme } from "~/utils/theme-provider";

export default function Index() {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <div className="min-h-screen flex flex-col gap-12 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl text-gray-900 dark:text-gray-100">It Works</h1>
      <button
        onClick={toggleTheme}
        className="font-bold p-4 border-2 text-gray-800 border-black dark:border-gray-600 dark:text-gray-300"
      >
        Toggle Theme
      </button>
    </div>
  );
}
