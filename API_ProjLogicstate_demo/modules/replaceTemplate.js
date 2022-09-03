module.exports = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%SUBMODE%}/g, product.submode);
    output = output.replace(/{%EXIT%}/g, product.exit);
    output = output.replace(/{%MAINMODE%}/g, product.mainmode);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    return output;
}