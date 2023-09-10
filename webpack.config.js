const path = require('path');
module.exports = () => {
    return {
        resolve: {
            alias: {
                "@": path.join(__dirname, "src")
            },
            extensions: [".json", ".js", ".jsx", ".ts", ".tsx"],
        },
};
};