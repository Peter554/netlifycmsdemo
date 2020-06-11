module.exports = (config) => {
    config.setTemplateFormats(['njk', 'md', 'yml', 'jpg', 'png'])

    config.setDataDeepMerge(true)

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    }
}
