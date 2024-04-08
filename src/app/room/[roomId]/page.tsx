'use client';

import { useEffect, useState } from 'react';
import { fetchUserById, getUserSession } from '@/services/user.service';
import { useParams } from 'next/navigation';
import { fetchDrawingRoomById } from '@/services/drawing-room.service';
import Navbar from '@/components/Navbar';
import BoardContainer from '@/components/drawing-room/BoardContainer';

export default function DrawingRoomPage() {
	const { roomId } = useParams();
	const [owner, setOwner] = useState<any | null>(null);
	const [room, setRoom] = useState<any>([]);
	const [user, setUser] = useState<any>({});
	const [session, setSession] = useState<any>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [participantCount, setParticipantCount] = useState<number>(0);

	useEffect(() => {
		getUserSession().then((session) => {
			setSession(session);
			setUser(session?.user);

			fetchDrawingRoomById(roomId as string).then((room) => {
				const canEnterRoom =
					room![0].isPublic || room![0].owner === session?.user?.id;

				if (!canEnterRoom) {
					return (window.location.href = '/');
				}

				setRoom(room![0]);
				setIsLoading(false);
				fetchUserById(room![0].owner).then((res) => {
					setOwner(res.user);
				});
			});
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main>
			<Navbar
				session={session}
				owner={owner}
				room={room}
				isRoom
				isLoadingRoom={isLoading}
				participantCount={participantCount}
			/>
			<BoardContainer room={room} />
		</main>
	);
}
