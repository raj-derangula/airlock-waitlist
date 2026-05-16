// IOSDevice — scales a 390×844 screen to TARGET_HEIGHT, draws phone chrome around it
function IOSDevice({ width = 390, height = 844, children }) {
  const BEZEL = 14;
  const CORNER_R = 54;
  const TARGET_HEIGHT = 640;

  const deviceW = width + BEZEL * 2;
  const deviceH = height + BEZEL * 2;
  const s = TARGET_HEIGHT / deviceH;

  return (
    <div style={{
      width: Math.round(deviceW * s),
      height: TARGET_HEIGHT,
      borderRadius: CORNER_R * s,
      background: '#1C1C1E',
      boxShadow: '0 0 0 1px #3A3A3A, 0 40px 100px rgba(0,0,0,0.45)',
      padding: BEZEL * s,
      position: 'relative',
      flexShrink: 0,
      boxSizing: 'border-box',
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute',
        top: (BEZEL + 12) * s,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 118 * s,
        height: 33 * s,
        background: '#1C1C1E',
        borderRadius: 20 * s,
        zIndex: 10,
        pointerEvents: 'none',
      }} />

      {/* Screen */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: (CORNER_R - BEZEL) * s,
        overflow: 'hidden',
        background: '#FFFFFF',
        position: 'relative',
      }}>
        <div style={{
          width: width,
          height: height,
          transform: `scale(${s})`,
          transformOrigin: 'top left',
          overflow: 'hidden',
        }}>
          {children}
        </div>
      </div>

      {/* Home indicator */}
      <div style={{
        position: 'absolute',
        bottom: 7 * s,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 118 * s,
        height: 5 * s,
        borderRadius: 3 * s,
        background: 'rgba(255,255,255,0.28)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
