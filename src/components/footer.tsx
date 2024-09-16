'use client'

import Image from 'next/image';
import { open } from '@tauri-apps/api/shell';

const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <button
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                onClick={async () => await open('https://github.com/realtaobo/diff-app/')}
            >
                <Image
                    aria-hidden
                    src="https://nextjs.org/icons/github.svg"
                    alt="GitHub"
                    width={16}
                    height={16}
                />
                GitHub
            </button>
            <button
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                onClick={async () => await open('https://crates.io/crates/diff-app')}
            >
                <Image
                    aria-hidden
                    src="https://nextjs.org/icons/window.svg"
                    alt="Download"
                    width={16}
                    height={16}
                />
                Download
            </button>
        </footer>
    );
};

export default Footer;