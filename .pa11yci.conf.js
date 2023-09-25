var defaults = {
    concurrency: 1,
    standard: 'WCAG2AA',
    timeout: 50000,
    chromeLaunchConfig: {
        args: ['--no-sandbox'],
    },
}

var urls = ['${PA11Y_TEST}']

function myPa11yCiConfiguration() {
    console.error('Env:', process.env.PA11Y_TEST)

    for (var idx = 0; idx < urls.length; idx++) {
        urls[idx] = urls[idx].replace('${PA11Y_TEST}', process.env.PA11Y_TEST)
    }

    return {
        defaults: defaults,
        urls: urls,
    }
}

module.exports = myPa11yCiConfiguration()
