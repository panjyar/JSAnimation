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
          './Assets/pizza_box.png',
          './Assets/dominos-bread.png',
          './Assets/ux-strategy-for-mobile-app-devlopment.png',
          './Assets/domi-img1.png',
          './Assets/dominos-bread1.png',
        ]
      },
      {
        title: 'Powered by advance',
        subtitle: 'NASA',
        description: 'algorithms',
        background: { light: '#3F4A87', deep: '#1B234E' },
        images: [
          './assets/nasa-fitness-tracking-mobile-app.png',
          './Assets/measure-total-body-weight-through-fitness-app.png',
        ]
      },
      {
        title: 'The Next Big',
        subtitle: 'Blockchain',
        description: 'Revolution',
        background: { light: '#1B2767', deep: '#1937DC' },
        images: [
          './assets/veme-blockchain-app-developed.png',
          './Assets/veme-app-ui-design.png',
        ]
      },
      {
        title: '',
        subtitle: '25M+ Downloads',
        description: 'on appstore & google playstore',
        background: { light: '#CBC6D4', deep: '#A205D1' },
        images: [
          './assets/nexgtv-entertainment-mobile-app-development.png',
          './Assets/nexgtv-mobile-app-ui-design.png',
        ]
      },
      {
        title: 'Developing ERP Solution for',
        subtitle: 'Text Headline',
        description: 'in furniture industry',
        background: { light: '#06CECE', deep: '#003AD1' },
        images: [
          './assets/karavan-social-networking-app-screen.png',
          './assets/erp-app-development-service.png',
          './assets/social-networking-app-case-study.png',
          './assets/developers-for-social-media-app.png',
          './assets/karavan_2.png',
          './assets/karavan-social-networking-app-screen-2.png'
        ]
      },
      {
        title: 'Biggest Classifieds',
        subtitle: 'East Asia',
        description: 'Countries',
        background: { light: '#43BA5B', deep: '#1E8933' },
        images: [
          './assets/veme-blockchain-app-developed.png',
          './Assets/veme-app-ui-design.png',
        ]
      },
      {
        title: 'Developing ERP Solution for',
        subtitle: 'Text Headlinefds',
        description: 'in furniture industry',
        background: { light: '#06CECE', deep: '#003AD1' },
        images: [
          './assets/erp-app-development-service.png',
          './Assets/veme-app-ui-design.png',
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
  
      // Update background colors
      rightContainer.style.backgroundColor = content.background.light;
      leftContainer.style.backgroundColor = content.background.deep;
  
      // Update the text content
      const h4 = pathContent.querySelector('h4');
      const h1Span = pathContent.querySelector('h1 span');
      const p = pathContent.querySelector('p');
  
      gsap.to([h4, h1Span, p], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          h4.textContent = content.title;
          h1Span.textContent = content.subtitle;
          p.textContent = content.description;
  
          gsap.to([h4, h1Span, p], {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1
          });
        }
      });
  
      // Update the images
      const images = rightContainer.querySelectorAll('img');
      gsap.to(images, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        stagger: 0.1,
        onComplete: () => {
          images.forEach((img, i) => {
            if (content.images[i]) {
              img.src = content.images[i];
              img.style.display = '';
            } else {
              img.style.display = 'none';
            }
          });
  
          gsap.to(images, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.1
          });
        }
      });
  
      // Update the SVG path
      updateSVGPath(index);
    }
  
    function updateSVGPath(index) {
      const pathLength = opaquePath.getTotalLength();
      const segmentLength = pathLength / (dots.length - 1);
      const dashOffset = pathLength - (segmentLength * index);
  
      gsap.to(opaquePath, {
        strokeDasharray: pathLength,
        strokeDashoffset: dashOffset,
        duration: 0.5,
        ease: "power2.out"
      });
  
      dots.forEach((dot, i) => {
        const fill = dot.querySelector('.dotsst');
        const stroke = dot.querySelector(`[class^="dotsstro"]`);
        
        if (i <= index) {
          gsap.to(fill, { fill: '#ffffff', duration: 0.3 });
          gsap.to(stroke, { stroke: '#ffffff', duration: 0.3 });
        } else {
          gsap.to(fill, { fill: contents[index].background.deep, duration: 0.3 });
          gsap.to(stroke, { stroke: '#ffffff', duration: 0.3 });
        }
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
  