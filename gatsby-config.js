module.exports = {
    plugins:[
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-postcss',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/logoJullia01Maior.png',
            }
        }
    ],
    
}