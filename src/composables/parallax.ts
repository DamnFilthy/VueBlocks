export default () => {
  const moveParallaxImage = (e: any) => {
    try {
      const speedRatio = 1000;
      const minWindowWidth = 1024;

      document.querySelectorAll('.parallax').forEach((parallaxImage: any) => {
        const movingValue = parallaxImage.getAttribute('data-value');
        const x = (e.clientX * movingValue) / speedRatio;
        const y = (e.clientY * movingValue) / speedRatio;

        if (window.innerWidth > minWindowWidth) {
          parallaxImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
          console.log('moveParallaxImage');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    moveParallaxImage
  };
};
