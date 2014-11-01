require.config({
    baseUrl: './src',
    templateCoders: [
        'coders/component/CpCoder',
        'coders/placeholders/plCoder',
        'coders/databind/bdCoder'

    ],
    templateDecoders: [
        'coders/component/CpDecoder',
        'coders/placeholders/plDecoder',
        'coders/databind/bdDecoder'
    ],
    paths: {
        'coders': '../node_modules/richtemplate/dev/coders',
        'templating': '../node_modules/richtemplate/dev/templating',
        'widget': '../node_modules/stonewalljs/dev/widget',
        'watch': '../bower_components/watch/src/watch'
    }
});