interface ProductData {
    name?: string,
    price?: number
}


let product: ProductData= {

}
product.name = 'bread';
product.price = 1;

function presentProduct(product: ProductData) {
    console.log('We have a ' + product.name + ' which costs ' + product.price)
}

presentProduct(product);
