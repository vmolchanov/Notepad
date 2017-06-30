module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }
            ]
        }
    };
}