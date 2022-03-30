const path = require('path');
const WebpackBar = require('webpackbar');
const CracoAlias = require("craco-alias");
// const { addBeforeLoader, loaderByName } = require("@craco/craco");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = (arvg) => {
    return {
        plugins: [
            {
                plugin: CracoAlias,
                options: {
                    source: "tsconfig",
                    baseUrl: "./src",
                    tsConfigPath: "./tsconfig.extend.json"
                }
            },
        ],
        webpack: {
            plugins: [
                new WebpackBar(),
            ],
            devServer: (devServerConfig) => {
                return {
                    ...devServerConfig,
                    // 服务开启gzip
                    compress: true,
                    //   proxy: {
                    //     '/api': {
                    //       target: 'https://test.com/',
                    //       changeOrigin: true,
                    //       xfwd: false,
                    //     }
                    //   }
                }
            },
            configure: (webpackConfig) => {
                // const wasmExtensionRegExp = /\.wasm$/;
                // webpackConfig.resolve.extensions.push(".wasm");

                // webpackConfig.module.rules.forEach((rule) => {
                //     (rule.oneOf || []).forEach((oneOf) => {
                //         if (oneOf.loader && oneOf.loader.indexOf("file-loader") >= 0) {
                //             oneOf.exclude.push(wasmExtensionRegExp);
                //         }
                //     });
                // });

                // const wasmLoader = {
                //     test: /\.wasm$/,
                //     include: /node_modules\/(bridge|token-bridge)/,
                //     loaders: ["wasm-loader"],
                // };

                // addBeforeLoader(webpackConfig, loaderByName("file-loader"), wasmLoader);

                return webpackConfig;
            },
        },
    }
}