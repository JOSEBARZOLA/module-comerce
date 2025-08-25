import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
export default function ParticleBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      backgroundMode: {
        enable: true,
    zIndex: -1,
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      particles: {
        number: {
          value: 30,
          density: { enable: true, area: 800 },
        },
        color: {
          value: [
            "#3998D0",
            "#2EB6AF",
            "#A9BD33",
            "#FEC73B",
            "#F89930",
            "#F45623",
            "#D62E32",
          ],
        },
        shape: { type: "circle" },
        size: {
          value: 8,
          random: { enable: true, minimumValue: 4 },
        },
        opacity: { value: 1 },
        collisions: {
          enable: true, // 👈 sin "mode"
        },
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: { value: 5, random: { enable: true, minimumValue: 4 } },
            rate: { value: 10, random: { enable: true, minimumValue: 5 } },
            particles: {
              collisions: { enable: false },
              mode: "destroy" as const,
              life: { count: 1, duration: { value: 1 } },
            },
          },
        },
        move: {
          enable: true,
          speed: 11,
          direction: "none" as const,
          outModes: { default: "out" as const },
          attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
        },
      },
    }),
    []
  );
  return <Particles id="tsparticles" options={options} />;
}