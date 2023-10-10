import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vitest/config';

export default defineConfig({
	server: {
		host: true
	},
	define: {
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
	},
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: 'injectManifest',
			workbox: {
				mode: process.env.NODE_ENV ? 'production' : 'development',
			},
			devOptions: {
				enabled: true, 
				type: "module"
			},
			srcDir: 'src',
			filename: 'sw.ts',
			manifest: {
				short_name: 'SvelteKit PWA',
				name: 'SvelteKit PWA',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				theme_color: "#ffffff",
				background_color: "#ffffff",
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
