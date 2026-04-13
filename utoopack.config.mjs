import { defineConfig } from '@utoo/pack';

export default defineConfig({
    entry: [{
        import: "./src/index.tsx",
        html: {
            template: "./index.html"
        }
    }],
    styles: {
        less: {
            javascriptEnabled: true
        }
    },
    output: {
        path: "./dist",
        filename: "[name].[contenthash:8].js",
        chunkFilename: "[name].[contenthash:8].js",
        clean: true
    },
    stats: true,
    rootPath: '.'
})