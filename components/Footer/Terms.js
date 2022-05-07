import Link from 'next/link';

function Term() {
    return (
        <div className='w-full py-20 bg-gray-100'>
            <h1 className='footer-title pb-10'>
                TERMS <span className='block'>& CONDITIONS</span>
            </h1>
            <div className='max-w-lg mx-auto px-5'>
                <h3 className='info-title'>PURCHASES</h3>
                <p className='info-detail'>
                    Shop items are listed in USD. If you are purchasing from an
                    alternative currency, the exchange rate is determined at the
                    time of purchase according to the customer’s bank.
                    <br />
                    <br />
                    <em className='block'>Exchanges and Refunds</em>
                    We are unable to exchange or refund items that have been
                    delivered. If you have not received your items or received
                    the wrong item, please contact us. Refunds will be issued to
                    your original payment method. If an address is entered
                    incorrectly at the time of purchase, we will resend your
                    item for an <em>additional shipping fee</em> upon request.
                    <br />
                    <br />
                    <em className='block'>Shipping</em>
                    If the customer provides inaccurate or incomplete
                    information that causes the package to be delayed or
                    returned to the fulfillment destination the customer accepts
                    this as a consequence of his or her own actions. Items can
                    be resent to the customer for an additional S&H fee equal to
                    the original such fees charged. For more information
                    regarding shipping please see our{' '}
                    <Link href='faq'>
                        <a className='text-highlight'>FAQ</a>
                    </Link>
                    .
                </p>
                <hr className='border-gray-400 my-7' />
                <h3 className='info-title'>INTERNATIONAL ORDERS</h3>
                <p className='info-detail'>
                    International orders may be subject to import duties and
                    taxes levied by the destination country’s government. Any
                    additional fees including but not limited to duties and
                    taxes are not covered by the shipping fee charged when your
                    order is placed. Any such additional charges must be paid by
                    the recipient/customer.
                    <br />
                    <br />
                    Due to the customs process, delivery times are estimates and
                    <em>may take longer than stated</em>. In some cases,
                    packages may be held in customs until any additional fees
                    are paid.
                    <br />
                    <br />
                    Customs policies vary widely from country to country. Please
                    contact your local customs office regarding these policies
                    including duties and taxes.
                </p>
                <hr className='border-gray-400 my-7' />
                <h3 className='info-title'>PRIVACY & GDPR</h3>
                <p className='info-detail'>
                    At Woven we value and respect the personal information our
                    customers and users personal choose to share with us. Any
                    sensitive data you share with us including your name,
                    address, or contact information will be kept safe and will
                    only be used to provide the best possible service to you. We
                    will never sell or otherwise trade your personal data with
                    any other organizations. Our policy on protecting our
                    customers’ personal data has always been the same, but in
                    compliance with the GDPR (General Data Protection
                    Regulation) we have spelled out our policies here.
                    <br />
                    <br />
                    <strong className='text-xs font-semibold font-poppins block'>
                        MANDATORY INFORMATION
                    </strong>
                    When you make any purchase from Woven, you are asked to
                    provide personal information such as name, email address,
                    shipping and billing addresses. Whether for a single
                    purchase or a subscription, this information is stored
                    securely in our private system, accessible only by Woven
                    staff.
                    <br />
                    <br />
                    From 25 May 2018, email addresses provided during the
                    purchase process will only be used to contact you about your
                    purchase. This includes automated emails from WooCommerce,
                    for example confirming a purchase, or confirming a change to
                    your purchase. Read{' '}
                    <span className='text-highlight'>WOOCOMMERCE’S </span>
                    privacy policy.
                    <br />
                    <br />
                    Your information may also be used to send an infrequent
                    email newsletter sent to you or your recipient, providing
                    that you opt in when making a purchase, or subscribe via our
                    website. We use Mailchimp to manage these emails, and you
                    can unsubscribe from them at any time by clicking the link
                    at the bottom of the email. Read{' '}
                    <span className='text-highlight'>MAILCHIMP’S</span> privacy
                    policy.
                    <br />
                    <br />
                    When you buy from us, you will need to provide payment
                    details in one of the following forms: <br />
                    <br />
                    + Credit card details, processed via Stripe <br />+ PayPal
                    account details, processed via PayPal
                    <br />
                    <br />
                    Your payment details are processed and stored securely
                    exclusively by the payment providers above. Woven does not
                    process or store your card or bank account details. Read
                    <span className='text-highlight'> STRIPE </span> and
                    <span className='text-highlight'> PAYAPAL’S </span>
                    privacy policies.
                    <br />
                    <br />
                    If you choose to provide your telephone number it will only
                    ever be used to contact you regarding the management of your
                    subscription, and it will never be used for marketing or
                    other purposes.
                    <br />
                    <br />
                    <strong className='text-xs font-semibold font-poppins block'>
                        CONTENT
                    </strong>
                    Our CMS (content management system) is provided by
                    WordPress. Read{' '}
                    <span className='text-highlight'>WORDPRESS'S</span> privacy
                    policy. We also use the following services to help present
                    the content on Woven:
                    <br />
                    <br />+ Instagram <br />+ Twitter <br />+ Vimeo
                    <br />
                    <br />
                    <strong className='text-xs font-semibold font-poppins block'>
                        SECURITY
                    </strong>
                    Our website uses https, which means that anything sent
                    between your device and our servers will be encrypted. Our
                    SSL certificate is kept up to date at all times, and lets
                    you know that the pages you visit on our website are
                    provided by us. Our website is hosted on secure servers by
                    Hover and Digital Ocean. Read{' '}
                    <span className='text-highlight'>HOVER</span> and
                    <span className='text-highlight'>
                        {' '}
                        DIGITAL OCEAN’S
                    </span>{' '}
                    privacy policies.
                    <br />
                    <br />
                    <strong className='text-xs font-semibold font-poppins block'>
                        CONTACT US
                    </strong>
                    If you have any questions about our privacy policy, or the
                    ways in which we use your data, please contact us on
                    hello@wovenmagazine.com
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

export default Term;
