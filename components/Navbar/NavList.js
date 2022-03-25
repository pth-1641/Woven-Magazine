import Link from 'next/link';

function NavList() {
    return (
        <div className="fixed inset-0 bg-white-0.9 z-30 flex-center flex-col justify-end">
            <ul className="flex-center flex-col gap-y-5">
                <li className="text-center">
                    <em className="text-emerald-600 font-serif">.01</em>
                    <span className="nav-item">STORIES</span>
                </li>
                <li className="text-center">
                    <em className="text-emerald-600 font-serif">.02</em>
                    <span className="nav-item">FILMS</span>
                </li>
                <li className="text-center">
                    <em className="text-emerald-600 font-serif">.03</em>
                    <span className="nav-item">SHOP</span>
                </li>
                <li className="text-center">
                    <em className="text-emerald-600 font-serif">.04</em>
                    <span className="nav-item">BLOG</span>
                </li>
                <li className="text-center">
                    <em className="text-emerald-600 font-serif">.05</em>
                    <span className="nav-item">ABOUT</span>
                </li>
            </ul>
            <Link href="/interview">
                <a type="button" className="btn px-8 mt-10">
                    REQUEST INTERVIEW
                </a>
            </Link>
            <div className="flex-center italic font-serif gap-x-14 my-6">
                <a href="https://twitter.com/pth1641">twitter</a>
                <a href="https://www.facebook.com/pth.1641">facebook</a>
                <a href="https://www.instagram.com/pth_1641">instagram</a>
            </div>
        </div>
    );
}

export default NavList;
