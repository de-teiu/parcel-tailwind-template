const tailwindcss = require('tailwindcss');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const plugins = [];
plugins.push(tailwindcss);

if (!IS_DEVELOPMENT) {
    const purgecss = require('@fullhuman/postcss-purgecss');

    plugins.push(
        purgecss({
            content: ["**/*.html"],
            defaultExtractor: content =>
                content.match(/[\w-/:]+(?<!:)/g) || []
        })
    );
}

module.exports = {
    plugins
}
