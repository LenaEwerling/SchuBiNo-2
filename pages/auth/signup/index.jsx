import SignUpForm from '@/components/signupForm';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Loader from '@/components/loader';

export default function SignUp() {
	const { data: session, status } = useSession();
	const router = useRouter();

	function signupFormCallback() {
		router.push(
			`/auth/signin?callbackUrl=${
				window.location.protocol +
				'//' +
				window.location.hostname +
				(window.location.port ? ':' + window.location.port : '')
			}/welcome`
		);
	}

	function autoRedirect() {
		setTimeout(() => router.push('/dashboard'), 5000);
	}

	if (status === 'loading') {
		return <Loader />;
	}
	return (
		<>
			{session ? (
				<div>
					<div className='text text-center mt-4 container'>
						<h1>You are already logged in!</h1>
						<p>
							You will be automatically redirected in 5 seconds or
							<Link href='/dashboard' passHref>
								{' '}
								Click here
							</Link>
							!
						</p>
						{autoRedirect()}
					</div>
				</div>
			) : (
				<div className='container'>
					<SignUpForm callback={() => signupFormCallback()} />
					<a
						href='/api/auth/signin'
						className='alert-link btn btn-primary btn-sm'>
						Login
					</a>
				</div>
			)}
		</>
	);
}
