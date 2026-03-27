export const useScroll = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    
    if (element) {
      const navbarHeight = 90; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" 
      });
    }
  };

  return { scrollTo };
};