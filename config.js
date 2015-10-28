exports.config = {
    project:{
        title         : 'Instant Beatriz Gosta',
        description   : 'As melhores frases de Beatriz Gosta!',
        url           : 'http://beatriz.botoes.co',
        external_link : 'http://www.facebook.com/beatrizgosta',
        facebook: {
            id: "1016048086"
        },
        google: {
            id: 'UA-64812624-1'
        },
    },
    partials: {
        footer: '<a href="mailto:andrefs@andrefs.com">andré santos, joão ferreira <i class="fa fa-envelope"></i></a> , baseado em <a href="https://www.youtube.com/channel/UC3tGjmFxqHfsUGaQkFjaUpA">beatriz gosta <i class="fa fa-external-link"></i></a>'
    },
    manifest : {
        version: 'v1',
        filePath: './',
        fileName: 'manifest.json'
    },
    sourcesPath       : './sources',
    soundsPath        : './sounds',
    tmpPath           : './tmp',
    defaultClipMargin : '2',
    soundEditCommand  : 'audacity',
    toplinks: [
        {
            link: 'http://bussaco.botoes.co',
            title: 'Bussaco'
        },{
            link: 'http://renato.botoes.co',
            title: 'Renato'
        },{
            link: 'http://senhorpe.botoes.co',
            title: 'Senhor Pé'
        },{
            link: 'http://aleixo.botoes.co',
            title: 'Aleixo'
        }
    ],
    server: {
        port: 10111
    }
};
