import Link from 'next/link';

function ProductItem({ product }) {
    return (
        <li className='text-center'>
            <Link href={`/shop/${product.id}`}>
                <div className='relative group bg-gray-200 cursor-pointer aspect-[67/44]'>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        loading='lazy'
                        className='w-full'
                    />
                    <span className='absolute inset-0 bg-white-0.5 opacity-0 group-hover:opacity-100 duration-300'></span>
                </div>
            </Link>
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
