const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
