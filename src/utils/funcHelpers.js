export  const rgbToHex = (r, g, b) => 
'#' + [r, g, b].map(x => 
    { const hex = x.toString(16);
     return (hex.length === 1 || hex==='ffffff' || hex==='000000') ? '0' + hex : hex 
    }).join('');