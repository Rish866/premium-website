import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";

function FloatingShape() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh rotation={[0.7, 0.4, 0.2]}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial color="#22d3ee" roughness={0.25} metalness={0.65} />
      </mesh>
    </Float>
  );
}

export default function ThreeDepthScene() {
  return (
    <section className="relative h-[720px] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.55} />
          <pointLight position={[4, 4, 4]} intensity={2} />
          <pointLight position={[-4, -2, 3]} intensity={1.5} color="#a855f7" />
          <Stars radius={80} depth={40} count={1800} factor={4} fade speed={1} />
          <FloatingShape />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.25)_45%,rgba(0,0,0,.9)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
          3D Premium Layer
        </div>

        <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
          AgencyOS now has depth, motion and cinematic presence.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          This becomes the base for particles, interactive geometry, futuristic backgrounds and premium SaaS storytelling.
        </p>
      </div>
    </section>
  );
}
