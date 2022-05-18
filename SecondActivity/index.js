const products = [
    {id: 1, name: "Manzana", inStock: false},
    {id: 2, name: "Pera", inStock: false},
    {id: 3, name: "Naranja", inStock: true},
    {id: 4, name: "Banana", inStock: false},
    {id: 5, name: "Kiwi", inStock: true},
    
]

const displayProducts = (argument)=>{
    if(argument === 1){
        return(
            <header id="header1">
                <ul>
                <span>All Products</span>
                           {
                   products.map((product)=>{
                       return (
                           <li key={product.id}>{product.name}</li>
                       )
                   })
                           }
                       </ul>
            </header>
        )
    }else if (argument === 2){
        return(
            <header id="header2">
            <ul>
            <span>Products in Stock</span>
           {
               products.map(product =>{
                if(product.inStock){
                    return (
                        <li key={product.id}>{product.name}</li>
                    )
                }
               })
           }
       </ul>
       </header>
        )
    }else if(argument === 3){
        return(
            <header id="header3">
                <ul>
                <span>Products out of Stock</span>
                           {
                   products.map(product =>{
                    if(!product.inStock){
                        return (
                            <li key={product.id}>{product.name}</li>
                        )
                    }
                   })
                           }
                      </ul>
            </header>
        )
    }
}

//cada función debe retornar un elemento
const App = (
    
       
           <div>
               {displayProducts(1)}
               {displayProducts(2)}
               {displayProducts(3)}
           </div>
       

)

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement)