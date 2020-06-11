module.exports = (config) => {
    config.setTemplateFormats(['html', 'njk', 'md', 'yml', 'jpg', 'png', 'css'])

    config.setDataDeepMerge(true)

    return {
        dir: {
            input: 'src',
            output: '_site',
        },
    }
}
