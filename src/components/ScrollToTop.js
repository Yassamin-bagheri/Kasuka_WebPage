import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!showButton) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-gray-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default ScrollToTop;
