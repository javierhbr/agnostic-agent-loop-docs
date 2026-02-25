// fadeIn.ts
// Registers IntersectionObserver for .fi fade-in elements.
// Docusaurus calls onRouteDidUpdate on every client-side navigation.

export function onRouteDidUpdate(): void {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.07 },
  );

  document.querySelectorAll<HTMLElement>('.fi').forEach((el) => {
    observer.observe(el);
  });
}
