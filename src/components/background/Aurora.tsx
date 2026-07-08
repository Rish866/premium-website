export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/30 blur-[100px]" />
      <div className="absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-violet-600/30 blur-[110px]" />
      <div className="absolute bottom-[-200px] left-1/3 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(5,7,20,0.9)_70%)]" />
    </div>
  );
}
