import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

function Cart() {
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);

    const getStates = (e) => {
        const iso2 = e.target.value;
        const country = countries.find((c) => c.iso2 === iso2);
        setStates(country.cities);
    };

    useEffect(() => {
        async function fetchCountry() {
            const res = await fetch(
                'https://countriesnow.space/api/v0.1/countries'
            );
            const data = await res.json();
            setCountries(data.data);
            setStates(data.data[0].cities);
        }
        fetchCountry();
    }, []);

    useEffect(() => {}, []);

    return (
        <div className='max-w-[1120px] mx-auto py-14'>
            <Link href='/shop'>
                <a className='text-highlight text-base flex-center w-max mb-6'>
                    <span className='text-xl'>
                        <MdOutlineKeyboardArrowLeft />
                    </span>
                    BACK TO SHOP
                </a>
            </Link>
            <div className='grid grid-cols-2 gap-16'>
                <form className='grid gap-6'>
                    <h3 className='font-serif text-3xl font-thin'>
                        Billing Details
                    </h3>
                    <div className='flex-between gap-4'>
                        <div>
                            <label className='font-medium'>
                                FIRST NAME{' '}
                                <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type='text'
                                className='order-input'
                                required
                            />
                        </div>
                        <div>
                            <label className='font-medium'>
                                LAST NAME{' '}
                                <span className='text-red-600'>*</span>
                            </label>
                            <input
                                type='text'
                                className='order-input'
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className='font-medium'>COMPANY NAME</label>
                        <input type='text' className='order-input' />
                    </div>
                    <div>
                        <label className='font-medium'>
                            COUNTRY <span className='text-red-600'>*</span>
                        </label>
                        <select className='order-input' onChange={getStates}>
                            {countries.map((c) => (
                                <option key={c.ios2} value={c.iso2}>
                                    {c.country}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='font-medium'>
                            STREET ADDRESS{' '}
                            <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            className='order-input'
                            required
                            placeholder='House number and street name'
                        />
                    </div>
                    <input
                        type='text'
                        className='order-input'
                        placeholder='Apartment, suite, unit,... (optional)'
                    />
                    <div>
                        <label className='font-medium'>
                            TOWN/CITY <span className='text-red-600'>*</span>
                        </label>
                        <input type='text' className='order-input' required />
                    </div>
                    <div>
                        <label className='font-medium'>
                            STATE <span className='text-red-600'>*</span>
                        </label>
                        <select className='order-input'>
                            {states.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className='font-medium'>
                            ZIP <span className='text-red-600'>*</span>
                        </label>
                        <input type='text' className='order-input' required />
                    </div>
                    <div>
                        <label className='font-medium'>PHONE</label>
                        <input type='tel' className='order-input' />
                    </div>
                    <div>
                        <label className='font-medium'>
                            EMAIL ADDRESS{' '}
                            <span className='text-red-600'>*</span>
                        </label>
                        <input type='email' className='order-input' required />
                    </div>
                    <div>
                        <label className='font-medium'>ORDER NOTES</label>
                        <textarea
                            className='order-input resize-none'
                            placeholder='Notes about your order, e.g. special notes for delivery.'
                            rows='4'
                        />
                    </div>
                </form>
                <div className='grid gap-2 h-max font-medium'>
                    <h3 className='font-serif text-3xl font-thin'>
                        Your order
                    </h3>
                    <div className='flex-between text-gray-400 text-sm'>
                        <span>PRODUCT</span>
                        <span>TOTAL</span>
                    </div>
                    <hr className='border-gray-300' />
                    <div className='flex-between py-3'>
                        <div className='flex-center gap-2'>
                            <img
                                src='https://wovenmagazine.com/content/uploads/2018/11/Issue4_Cover_Dropdown-300x300.jpg'
                                alt=''
                                className='w-20 h-20'
                            />
                            <h5 className='font-serif'>
                                Woven Issue Four - Seconds Sale × 4
                            </h5>
                        </div>
                        <span className='text-gray-400'>$48</span>
                    </div>
                    <hr className='border-gray-300' />
                    <div className='flex-between'>
                        <span>SUBTOTAL</span>
                        <span>$48</span>
                    </div>
                    <hr className='border-gray-300' />
                    <div className='flex-between'>
                        <span>SHIPPING</span>
                        <span>FREE</span>
                    </div>
                    <hr className='border-gray-300' />
                    <div className='flex-between'>
                        <span>TOTAL</span>
                        <span>$48</span>
                    </div>
                    <hr className='border-gray-300' />
                    <div className='text-sm my-4 flex-center gap-2 justify-start'>
                        <input type='checkbox' />
                        <label>
                            I’VE READ AND ACCEPT THE{' '}
                            <Link href='/term-conditions'>
                                <a className='underline text-blue-700'>
                                    TERMS & CONDITIONS
                                </a>
                            </Link>{' '}
                            <span className='text-red-600'>*</span>
                        </label>
                    </div>
                    <button className='btn bg-pink-500 hover:bg-pink-600'>
                        PROCEED
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
