function processProducts(products) {
    const productnamees=products.map(item =>item.name)
    productforEach(product =>{
        if(product.price>50){
            console.log(`${product.name} is above $50`);
        }
        else{
            console.log(`${product.name} is  below $50`);
        }
    });


    return productnamees;
}


const products =  [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
