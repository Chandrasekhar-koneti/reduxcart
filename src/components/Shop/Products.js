import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const Dummy_products=[{
    id:'p1',
    price:10,
    title:'js book',
    description:'book is for sale'
  },
  {
    id:'p2',
    price:20,
    title:'react book',
    description:' react book is for sale'}]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_products.map((product)=>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
