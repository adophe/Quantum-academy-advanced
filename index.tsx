
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quantum Academy | Advanced Neural Tutor</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>
    <script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19.0.0",
    "react-dom": "https://esm.sh/react-dom@19.0.0",
    "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
    "@google/genai": "https://esm.sh/@google/genai@1.37.0",
    "react/": "https://esm.sh/react@^19.2.3/",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/"
  }
}
</script>
    <style>
      @keyframes scan-line {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(400%); opacity: 0; }
      }
      .biometric-scan-line {
        animation: scan-line 2s linear infinite;
      }
      .glass-panel {
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .math-render .katex { font-size: 1.15em; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(34, 211, 238, 0.2); border-radius: 10px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.4); }
    </style>
<link rel="stylesheet" href="/index.css">
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden selection:bg-cyan-500/30">
    <div id="root"></div>
<script type="module" src="/index.tsx"></script>
</body>
</html>
