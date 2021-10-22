const styckyNavCommunications = () => {
  const navbar = document.querySelector('.wrapper');
  if (navbar) {
    const position = navbar.offsetTop;
    window.onscroll = () => {
      if (window.pageYOffset >= position) {
        lastPosition = position;
        navbar.classList.add('wrapper_sticky');
      } 
    };
  };
};

styckyNavCommunications();