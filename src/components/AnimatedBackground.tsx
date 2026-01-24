const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle radial gradient from top */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.08), transparent)'
        }}
      />
      
      {/* Ultra-subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Soft gradient accent at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[500px]"
        style={{
          background: 'linear-gradient(to top, hsl(var(--muted) / 0.5), transparent)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
