import { useState } from 'react';
import DrawingMenu from './DrawingMenu';

interface BoardContainerProps {
	room: any;
}

export interface DrawingPen {
	color: string;
	size: number;
}
const BoardContainer: React.FC<BoardContainerProps> = (props) => {
	const { room } = props;
	const [drawingPen, setDrawingPen] = useState<DrawingPen>({
		color: '#000000',
		size: 5,
	});
	return (
		<section className="relative flex flex-col xl:flex-row gap-1 bg-white h-screen">
			<DrawingMenu
				drawingPen={drawingPen}
				setDrawingPen={setDrawingPen}
			/>
		</section>
	);
};

export default BoardContainer;
