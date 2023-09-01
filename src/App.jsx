import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const root = useRef();

  useLayoutEffect(() => {
    const sections = [".red", ".blue", ".green", ".yellow"];

    let ctx = gsap.context(() => {
      sections.forEach((section) => {
        gsap.to(`${section} .section-starter`, {
          transform: "translate(-50%, 0) rotate(0)",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <section className="section white">Scroll Down</section>
      <section className="section red">
        <div className="section-starter"></div> Red
      </section>
      <section className="section blue">
        <div className="section-starter"></div> Blue
      </section>
      <section className="section green">
        <div className="section-starter"></div> Green
      </section>
      <section className="section yellow">
        <div className="section-starter"></div> Yellow
      </section>
    </main>
  );
}

export default App;
