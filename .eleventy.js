module.exports = (config) => {
    config.setTemplateFormats(['njk', 'md', 'yml'])

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    }
}
