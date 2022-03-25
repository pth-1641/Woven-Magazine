import Link from 'next/link';

function FAQ() {
    return (
        <div className='w-full py-20 bg-gray-100'>
            <h1 className='footer-title pb-10'>FAQ</h1>
            <div className='max-w-lg mx-auto px-6'>
                <h3 className='info-title'>SHIPPING</h3>
                <p className='info-detail'>
                    Shipments are batched twice a week from our fulfillment
                    center in Burnaby, BC. Orders received by 9am on Monday and
                    Wednesday mornings will ship the following day. All orders
                    received after 9am on Wednesday mornings will ship on
                    Tuesday morning of the following week. Please allow 3-10
                    days for orders shipping within the United States, and 2-3
                    weeks for international orders.For more information
                    regarding shipping policies please see our
                    <Link href='/term-conditions'>
                        <a className='text-highlight'> TERMS & CONDITIONS</a>
                    </Link>
                    .
                    <br />
                    <br />
                    Tracking is included for all orders within the US and to the
                    following countries internationally: Australia, Belgium,
                    Brazil, Croatia, Denmark, Estonia, Finland, France,
                    Gibraltar, Germany, Hungary, Israel, Italy, Latvia, Lebanon,
                    Lithuania, Luxembourg, Malaysia, Malta, Netherlands, New
                    Zealand, Norway, Portugal, Singapore, Slovak Republic,
                    Spain, Switzerland, Turkey, Great Britain, and Northern
                    Ireland.
                </p>
                <hr className='border-gray-400 my-7' />
                <h3 className='info-title'>BECOMING A STOCKIST</h3>
                <p className='info-detail'>
                    We’re thrilled you would like to carry Woven! Orders can be
                    made directly from our Wholesale Shop, or contact us at{' '}
                    <span className='text-highlight'>
                        STOCKISTS@WOVENMAGAZINE.COM
                    </span>{' '}
                    with questions.
                </p>
                <hr className='border-gray-400 my-7' />
                <p className='info-detail'>
                    For any questions or comments you may have please contact:{' '}
                    <email className='text-highlight'>
                        HELLO@WOVENMAGAZINE.COM
                    </email>
                </p>
            </div>
        </div>
    );
}

export default FAQ;
