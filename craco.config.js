// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');


module.exports = {
    webpack: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/') ,
            '@components': path.resolve(__dirname,'src/components/'),
            '@containers': path.resolve(__dirname,'src/containers/'),
            '@pages': path.resolve(__dirname,'src/pages/'),
            '@router': path.resolve(__dirname,'src/router/'),
            '@services': path.resolve(__dirname,'src/services/'),
            '@slices': path.resolve(__dirname,'src/slices/'),
            '@store': path.resolve(__dirname,'src/store/'),
            '@styles': path.resolve(__dirname,'src/styles/'),
            '@theme': path.resolve(__dirname,'src/theme/'),
            '@types': path.resolve(__dirname,'src/types/')
        }
    }
}
