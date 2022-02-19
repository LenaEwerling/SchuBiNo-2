import AccessDenied from '@/components/accessDenied';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import NoteArea from '@/components/noteArea';

export default function Dashboard() {
	const { data: session, status } = useSession();
	if (status === 'loading') {
		return <loader />;
	}
	return (
		<>
			{session ? (
				<div>
					<div className='fs-1 text text-center mt-4'>
						Welcome back {session?.user.name}!
					</div>
					<div className='fs-1 text text-center mt-4 container'>
						<NoteArea />
					</div>
				</div>
			) : (
				<AccessDenied />
			)}
		</>
	);
}
