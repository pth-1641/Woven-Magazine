function ProductItem({ product }) {
    return (
        <li className='text-center'>
            <div className='relative group'>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading='lazy'
                    className='w-full'
                />
                <span className='absolute inset-0 bg-white-0.5 opacity-0 group-hover:opacity-100 transition duration-300'></span>
            </div>
            <h3 className='font-serif text-xl font-extralight mt-3'>
                {product.title}
            </h3>
            <p className='font-semibold text-emerald-500'>
                {product.sale ? (
                    <>
                        <strike className='text-gray-400 mr-3'>
                            ${product.cost} USD
                        </strike>
                        ${product.sale} USD
                    </>
                ) : (
                    `$${product.cost} USD`
                )}
            </p>
        </li>
    );
}

export default ProductItem;
