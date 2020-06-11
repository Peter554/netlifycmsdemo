module.exports = (config) => {
    config.setTemplateFormats(['njk', 'md', 'yml'])

    config.setDataDeepMerge(true)

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    }
}
