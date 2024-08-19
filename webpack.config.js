module.exports = {
  // Outras configurações do Webpack...
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    open: true, // Opcional: abre o navegador automaticamente
  },
};
