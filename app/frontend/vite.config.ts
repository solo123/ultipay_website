import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteSourceLocator } from '@metagptx/vite-plugin-source-locator';
import { atoms } from '@metagptx/web-sdk/plugins';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import Sitemap from 'vite-plugin-sitemap';
import { getBlogRoutes } from './prerender/blog-routes.js';
import { getSitemapLastmod } from './prerender/blog-sitemap.js';

function createManualChunks() {
  const chunkEntries: Array<[string, string[]]> = [
    // Vendor chunks
    ['react-vendor', ['react', 'react-dom']],
    ['router-vendor', ['react-router-dom']],
    [
      'ui-vendor',
      [
        '@radix-ui/react-accordion',
        '@radix-ui/react-alert-dialog',
        '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox',
        '@radix-ui/react-collapsible',
        '@radix-ui/react-context-menu',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-hover-card',
        '@radix-ui/react-label',
        '@radix-ui/react-menubar',
        '@radix-ui/react-navigation-menu',
        '@radix-ui/react-popover',
        '@radix-ui/react-progress',
        '@radix-ui/react-radio-group',
        '@radix-ui/react-scroll-area',
        '@radix-ui/react-select',
        '@radix-ui/react-separator',
        '@radix-ui/react-slider',
        '@radix-ui/react-slot',
        '@radix-ui/react-switch',
        '@radix-ui/react-tabs',
        '@radix-ui/react-toast',
        '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group',
        '@radix-ui/react-tooltip',
      ],
    ],
    ['form-vendor', ['react-hook-form', '@hookform/resolvers', 'zod']],
    [
      'utils-vendor',
      [
        'axios',
        'clsx',
        'tailwind-merge',
        'class-variance-authority',
        'date-fns',
        'lucide-react',
      ],
    ],
    ['query-vendor', ['@tanstack/react-query']],
  ];

  const pkgToChunk = new Map<string, string>();
  for (const [chunkName, pkgs] of chunkEntries) {
    for (const pkg of pkgs) pkgToChunk.set(pkg, chunkName);
  }

  const NODE_MODULES = `${path.sep}node_modules${path.sep}`;
  return (id: string) => {
    const nmIdx = id.lastIndexOf(NODE_MODULES);
    if (nmIdx === -1) return;

    const rest = id.slice(nmIdx + NODE_MODULES.length);
    const parts = rest.split(/[\\/]/).filter(Boolean);
    if (parts.length === 0) return;

    const pkgName = parts[0]?.startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
    if (!pkgName) return;
    return pkgToChunk.get(pkgName);
  };
}

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function runtimeConfigPlugin(): Plugin {
  const payload = JSON.stringify({
    API_BASE_URL: process.env.VITE_API_BASE_URL || '/',
  });

  const mount: NonNullable<Plugin['configureServer']> = (server) => {
    server.middlewares.use((req, res, next) => {
      if (req.url?.split('?')[0] !== '/api/config') {
        next();
        return;
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(payload);
    });
  };

  return {
    name: 'runtime-config',
    configureServer: mount,
    configurePreviewServer: mount,
  };
}

process.env.VITE_APP_TITLE ??= process.env.OVERVIEW_TITLE ?? '南京 · 益贤瑞';
process.env.VITE_APP_DESCRIPTION ??= process.env.OVERVIEW_DESCRIPTION ?? '南京益贤瑞 — 跨境支付、跨境通国际专网、VCC';
process.env.VITE_APP_TITLE = escapeHtmlAttr(process.env.VITE_APP_TITLE);
process.env.VITE_APP_DESCRIPTION = escapeHtmlAttr(process.env.VITE_APP_DESCRIPTION);
process.env.VITE_APP_LOGO_URL ??= process.env.OVERVIEW_LOGO_URL ?? '/favicon.svg';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const blogPrerenderRoutes = command === 'build' ? getBlogRoutes() : [];

  return {
    plugins: [
      viteSourceLocator({
        prefix: 'mgx', // Prefix used to identify source locations; do not change.
      }),
      react(),
      atoms(),
      ...(!process.env.VITE_API_PROXY_TARGET ? [runtimeConfigPlugin()] : []),
      Sitemap({
        hostname: 'https://atoms.template.com',
        lastmod: getSitemapLastmod(),
        readable: true,
        generateRobotsTxt: true,
      }),
      ...(blogPrerenderRoutes.length > 0
        ? vitePrerenderPlugin({
            renderTarget: '#root',
            prerenderScript: path.resolve(__dirname, 'prerender/blog.js'),
            additionalPrerenderRoutes: blogPrerenderRoutes,
          })
        : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0', // Listen on all network interfaces.
      port: parseInt(process.env.VITE_PORT || '3000'),
      // This repo is a static site. Only proxy /api when a backend is actually running.
      ...(process.env.VITE_API_PROXY_TARGET
        ? {
            proxy: {
              '/api': {
                target: process.env.VITE_API_PROXY_TARGET,
                changeOrigin: true,
              },
            },
          }
        : {}),
      watch: { usePolling: true, interval: 600 },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: createManualChunks(),
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  };
});
