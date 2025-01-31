export const getAll = (req, res) => {
    res.send('Product All');
    res.end();
}

export const getProductName = (req, res) => {
    res.send(`상품명 --> ${req.params.pname}`);
    res.end();
}