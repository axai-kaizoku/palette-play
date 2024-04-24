import { useEffect, useState, useRef } from 'react';
import { RealtimeChannel } from '@supabase/supabase-js';
import { updateRoomDrawing } from '@/services/drawing-room.service';
import { supabase } from '@/lib/initSupabase';
import { fetchUserById, getUserSession } from '@/services/user.service';
import { DrawingPen } from './BoardContainer';

interface BoardProps {
	room: any;
	drawingPen: DrawingPen;
}

function WhiteBoard(props: BoardProps) {}
