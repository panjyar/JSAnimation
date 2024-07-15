document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('#transring');
  const pathContent = document.querySelector('.pathContent');
  const rightContainer = document.querySelector('.rightContainer');
  const leftContainer = document.querySelector('.leftContainer');
  const opaquePath = svg.querySelector('#Opaque_Ring');
  const dots = svg.querySelectorAll('.dots-nav');
  
  const contents = [
    {
      title: 'Redefining',
      subtitle: 'UX Strategy',
      description: 'and UI design',
      background: { light: '#1B1C2B', deep: '#11217A' },
      images: [
        { src: './Assets/pizza_box.png', style: { top: '0%', left: '0%', width: '30%', height: 'auto' } },
        { src: './Assets/dominos-bread.png', style: { top: '-20%', right: '0%', width: '25%', height: 'auto' } },
        { src: './Assets/ux-strategy-for-mobile-app-devlopment.png', style: { bottom: '10%', left: '20%', width: '30%', height: 'auto' } },
        { src: './Assets/domi-img1.png', style: { top: '50%', left: '50%', width: '25%', height: 'auto' } },
        { src: './Assets/dominos-bread1.png', style: { bottom: '0%', right: '0%', width: '35%', height: 'auto' } },
      ]
    },
    {
      title: 'Powered by advance',
      subtitle: { type: 'image', src: './Assets/nasa-mobile-app.png' },
      description: 'algorithms',
      background: { light: '#3F4A87', deep: '#1B234E' },
      images: [
         { src: './assets/nasa-fitness-tracking-mobile-app.png',style: { bottom: '10%', left: '20%', width: '37%', height: 'auto'} },
         { src:'./assets/measure-total-body-weight-through-fitness-app.png', style: { top: '-10%', right: '15%', width: '30%' } },
      ]
    },
    {
      title: 'The Next Big',
      subtitle: 'Blockchain',
      description: 'Revolution',
      background: { light: '#1B2767', deep: '#1937DC' },
      images: [
         { src:'./assets/veme-blockchain-app-developed.png', style: { bottom: '0%', left: '20%', width: '34%', height: 'auto' } },
          { src: './Assets/veme-app-ui-design.png', style: { top: '-10%', right: '15%', width: '30%' } },
      ]
    },
    {
      title: '',
      subtitle: '25M+ Downloads',
      description: 'on appstore & google playstore',
      background: { light: '#CBC6D4', deep: '#A205D1' },
      images: [
        { src: './assets/nexgtv-entertainment-mobile-app-development.png', style: { top: '21%', right: '12%', width: '45%' } },
          { src: './Assets/nexgtv-mobile-app-ui-design.png', style: { top: '21%', right: '50%', width: '45%' } },
      ]
    },
    {
      title: 'Text hadline',
      subtitle: 'Text Headline',
      description: 'Food headline',
      background: { light: '#06CECE', deep: '#003AD1' },
      images: [
        { src: './assets/karavan-social-networking-app-screen.png', style: { top: '-10%', left: '15%', width: '25%' } },
          { src: './assets/social-networking-app-case-study.png', style: { top: '-2%', right: '30%', width: '25%' } },
         { src:'./assets/developers-for-social-media-app.png', style: { top: '25%', right: '7%', width: '23%' } },
         { src:'./assets/karavan_2.png', style: { top: '60%', left: '15%', width: '25%' } },
         { src:'./assets/karavan-social-networking-app-screen-2.png', style: { top: '70%', right: '25%', width: '25%' } },
      ]
    },
    {
      title: 'Biggest Classifieds',
      subtitle: 'East Asia',
      description: 'Countries',
      background: { light: '#43BA5B', deep: '#1E8933' },
      images: [
        { src:  './assets/veme-blockchain-app-developed.png', style: { top: '50%', right: '15%', width: '30%' } },
         { src:'./Assets/veme-app-ui-design.png', style: { top: '21%', right: '45%', width: '30%' } },
      ]
    },
    {
      title: 'Developing ERP Solution for',
      subtitle: 'Text Headlinefds',
      description: 'in furniture industry',
      background: { light: '#06CECE', deep: '#003AD1', image: './Assets/interior.jpg'},
      images: [
        { src: './assets/erp-app-development-service.png', style: { top: '0%', width: '99%' } },
      ]
    },
  ];
  
  let currentContentIndex = 0;

  function updateContent(index) {
    if (index < 0 || index >= contents.length) {
      console.error('Index out of bounds');
      return;
    }

    const content = contents[index];

    // Update background colors and image
    rightContainer.style.backgroundColor = content.background.light;
    leftContainer.style.backgroundColor = content.background.deep;

    if (content.background.image) {
      rightContainer.style.backgroundImage = `url(${content.background.image})`;
      rightContainer.style.backgroundSize = 'cover';
      rightContainer.style.backgroundPosition = 'center';
    } else {
      rightContainer.style.backgroundImage = 'none';
    }

    // Update the text content
    const h4 = pathContent.querySelector('h4');
    const h1 = pathContent.querySelector('h1');
    const p = pathContent.querySelector('p');

    gsap.to([h4, h1, p], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        h4.textContent = content.title;

        if (typeof content.subtitle === 'object' && content.subtitle.type === 'image') {
          h1.innerHTML = `<img src="${content.subtitle.src}" alt="Subtitle Image" style="max-width: 100%; height: auto;">`;
        } else {
          h1.innerHTML = `<span>${content.subtitle}</span>`;
        }

        p.textContent = content.description;

        gsap.to([h4, h1, p], {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1
        });
      }
    });

    // Update the images
    updateImages(content.images);

    // Update the SVG path
    updateSVGPath(index);
  }

  function updateImages(images) {
    // Remove existing images
    rightContainer.innerHTML = '';

    // Define custom animations for each image index
    const animations = [
      { x: -100, y: -100, opacity: 0, duration: 0.5 },
      { scale: 0, opacity: 0, duration: 0.5 },
      {  opacity: 0, duration: 0.5 },
      { y: 100, opacity: 0, duration: 0.5 },
      { x: 100, y: 100, opacity: 0, duration: 0.5 },
      { skewX: 20, opacity: 0, duration: 0.5 }
    ];

    // Add new images with custom animations
    images.forEach((imgData, i) => {
      const imgContainer = document.createElement('div');
      imgContainer.style.position = 'absolute';
      imgContainer.style.overflow = 'hidden';
      
      const img = document.createElement('img');
      img.src = imgData.src;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      
      // Apply custom styles to the container
      Object.assign(imgContainer.style, imgData.style);
      
      imgContainer.appendChild(img);
      rightContainer.appendChild(imgContainer);

      // Get the animation config for the current index
      const anim = animations[i % animations.length];

      // Apply the animation
      gsap.from(imgContainer, {
        ...anim,
        delay: i * 0.1,
        onComplete: () => {
          gsap.to(imgContainer, { opacity: 1, duration: 0.3 });
        }
      });
    });
  }

  function updateSVGPath(index) {
    const totalPaths = contents.length;
    const pathLength = opaquePath.getTotalLength();
    const dashLength = pathLength / totalPaths;
    const dashOffset = dashLength * index;

    gsap.to(opaquePath, {
      strokeDashoffset: dashOffset,
      duration: 0.5,
      ease: 'power2.inOut'
    });
  }

  function handleSVGClick(e) {
    const clickedDot = e.target.closest('.dots-nav');
    if (clickedDot) {
      const dotIndex = Array.from(dots).indexOf(clickedDot);
      if (dotIndex !== -1 && dotIndex < contents.length) {
        currentContentIndex = dotIndex;
        updateContent(currentContentIndex);
      }
    }
  }

  // Add click event listener to the SVG
  svg.addEventListener('click', handleSVGClick);

  // Initialize with the first content
  updateContent(currentContentIndex);
});