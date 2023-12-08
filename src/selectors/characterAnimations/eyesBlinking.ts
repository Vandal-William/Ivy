export function eyesBlinking(): void {
  setInterval(() => {
    const eyeElement = document.querySelector('.eye') as HTMLElement | null;
    const nextEyeElement = document.querySelector('.eye + .eye') as HTMLElement | null;

    if (eyeElement && nextEyeElement) {
      eyeElement.style.animation = 'none';
      nextEyeElement.style.animation = 'none';

      setTimeout(() => {
        eyeElement.style.animation = 'clignement 1s 1';
        nextEyeElement.style.animation = 'clignement 1s 1';
      }, 1000);
    }
  }, 10000);
}
